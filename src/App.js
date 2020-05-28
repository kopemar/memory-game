import React, {Component} from 'react';
import './App.css';
import {MultiplayerGame, SinglePlayerGame} from "./Game";
import {Playground} from "./component/game/Playground";
import {PlayerBar} from "./component/game/PlayerBar";
import {WelcomeScreen} from "./component/pages/WelcomeScreen";
import {PlayerCount} from "./component/settings/PlayerCount";
import {PlayerNames} from "./component/settings/PlayerNames";
import {GameType} from "./component/settings/GameType";
import {Route, Switch} from "react-router-dom";
import {HASH, PATH, STORAGE} from "./constant/Constants";
import {MultiplayerLoad} from "./component/settings/MultiplayerLoad";
import About from "./component/pages/About";
import Layout from "./component/layout/Layout";
import {getTimeout} from "./util/TimeoutUtil";
import {SingleplayerLoad} from "./component/settings/SingleplayerLoad";
import {Multiplayer} from "./component/pages/Multiplayer";
import {Singleplayer} from "./component/pages/Singleplayer";

export function saveMultiplayer(game) {
    saveGame(game, STORAGE.MULTIPLAYER)
}

export function saveSingleplayer(game) {
    saveGame(game, STORAGE.SINGLEPLAYER)
}

export function saveGame(game, key) {
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

export function isWelcome() {
    if (JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)) === null || JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)).welcome === null) return false;
    return JSON.parse(window.localStorage.getItem(STORAGE.WELCOME)).welcome
}

export function welcome() {
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
