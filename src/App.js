import React, {Component} from 'react';
import './App.css';
import {MultiplayerGame} from "./Game";
import {Playground} from "./component/game/Playground";
import {PlayerBar} from "./component/game/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";
import {PlayerCount} from "./component/settings/PlayerCount";
import {PlayerNames} from "./component/settings/PlayerNames";
import {GameType} from "./component/settings/GameType";
import {Route, Switch} from "react-router-dom";
import {HASH, PATH, STORAGE} from "./constant/Constants";
import {MultiplayerLoad} from "./component/settings/MultiplayerLoad";
import About from "./component/About";
import Layout from "./component/Layout";

export function saveMultiplayer(game) {
    console.log("saving game", game);
    window.localStorage.setItem(STORAGE.MULTIPLAYER, JSON.stringify(game))
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            welcome: JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)).welcome ?? false,
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
                window.localStorage.setItem(STORAGE.WELCOME, JSON.stringify({welcome: true}));
                console.log(window.localStorage)
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

        class Multiplayer extends Component {
            constructor(props) {
                super(props);
                console.log("Multiplayer constructor")
                this.state = {
                    game: null,
                    welcome: true,
                    collapsed: false,
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
                        console.log(this.state.loaded);
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
                        <PlayerBar players={this.state.game.players}/>
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
