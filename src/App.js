import React, {Component} from 'react';
import './App.css';
import {MultiplayerGame, SinglePlayerGame} from "./Game";
import {Playground} from "./component/game/Playground";
import {PlayerBar} from "./component/game/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";
import {PlayerCount} from "./component/settings/PlayerCount";
import {PlayerNames} from "./component/settings/PlayerNames";
import {GameType} from "./component/settings/GameType";
import {Link, Route, Switch} from "react-router-dom";
import {HASH, PATH, STORAGE} from "./constant/Constants";
import {MultiplayerLoad} from "./component/settings/MultiplayerLoad";
import About from "./component/About";
import Layout from "./component/Layout";
import {getTimeout} from "./util/TimeoutUtil";
import {SingleplayerLoad} from "./component/settings/SingleplayerLoad";

export function saveMultiplayer(game) {
    saveGame(game, STORAGE.MULTIPLAYER)
}

export function saveSingleplayer(game) {
    saveGame(game, STORAGE.SINGLEPLAYER)
}

function saveGame(game, key) {
    console.log("saving game", game);
    if (game !== null) {
        for (const card of game.cards) {
            if (card.timeout !== null) {
                card.remainining = getTimeout(card.timeout);
                clearTimeout(card.timeout)
            }
        }
    }

    console.log(game)
    if (game !== null) window.localStorage.setItem(key, JSON.stringify(game))
    else window.localStorage.removeItem(key)
}

function isWelcome() {
    if (JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)) === null || JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)).welcome === null) return false;
    return JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)).welcome
}

function welcome() {
    window.localStorage.setItem(STORAGE.WELCOME, JSON.stringify({welcome: true}));
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            welcome: isWelcome(),
            collapsed: false,
            playerCount: false,
            loaded: false,
            activeCard: null
        };
    }

    render() {
        const finishWelcomeScreen = () => {
            this.setState({collapsed: true});

            setTimeout(() => {
                welcome();
                this.setState({welcome: JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)).welcome});
                console.log(JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)).welcome)
            }, 1000)
        };

        // start new game
        const initGame = (players) => {
            const game = new MultiplayerGame(16, players)
            this.setState({game: game})
            saveMultiplayer(game)
        };

        class Singleplayer extends Component {

            constructor(props) {
                super(props);
                this.state = {
                    game: null,
                    loaded: false,
                }
            }

            componentWillUnmount(): void {
                console.log(this.state.game);
                if (this.state.game !== null) saveSingleplayer(this.state.game)
            }

            render() {
                return <>{!this.state.loaded && <SingleplayerLoad onSelected={(game) => {
                    const g = game === null ? new SinglePlayerGame(16) : game;
                    console.log(this.state.game)
                    this.setState({loaded: true, game: g})
                    saveSingleplayer(g);
                }}/>}
                {this.state.loaded &&
                <Playground game={this.state.game}/>
                } </>;
            }

        }

        class Multiplayer extends Component {
            constructor(props) {
                super(props);
                if (!isWelcome()) welcome();
                console.log("Multiplayer constructor");
                this.state = {
                    game: null,
                    welcome: isWelcome(),
                    playerCount: false,
                    activeCard: null
                };
            }

            componentWillUnmount(): void {
                if (this.state.game !== null) saveMultiplayer(this.state.game)
            }

            render() {
                return <>
                    {!this.state.loaded &&
                    <MultiplayerLoad onSelected={(game) => {
                        this.setState({loaded: true});
                        if (game === null) {
                            this.setState({playerCount: 0})
                        }
                        this.setState({game: game})
                    }}/>
                    }
                    {this.state.loaded && this.state.playerCount === 0 &&
                    <PlayerCount onFinished={(playerCount) => this.setState({playerCount: playerCount})}/>
                    }
                    {this.state.loaded && this.state.playerCount > 0 && !this.state.game && <>
                        <PlayerNames count={this.state.playerCount} onFinished={players => initGame(players)}/></>}
                    {this.state.loaded && this.state.game && this.state.game.players && <>
                        {this.state.game instanceof MultiplayerGame && <PlayerBar game={this.state.game}/>}
                        <Playground game={this.state.game}/>
                    </>}
                </>
            }
        }

        return (
            <Layout collapsed={this.state.collapsed || this.state.welcome || window.location.hash !== HASH.HOME}
                    shouldFadeIn={!this.state.welcome}>
                <Switch>
                    <Route path={PATH.MULTIPLAYER}>
                        <Multiplayer/>
                    </Route>
                    <Route path={PATH.SINGLEPLAYER}>
                        <Singleplayer/>
                    </Route>
                    <Route path={PATH.ABOUT}>
                        <About/>
                    </Route>
                    <Route path={PATH.HOME}>
                        {!this.state.welcome && <>
                            <WelcomeScreen onFinished={() => {
                                finishWelcomeScreen()
                            }}/>
                        </>}
                        {
                            this.state.welcome && <GameType/>
                        }
                    </Route>
                </Switch>
            </Layout>
        )
            ;
    }
}

export default App;
