import React, {Component} from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/game/Playground";
import {PlayerBar} from "./component/game/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";
import {PlayerCount} from "./component/settings/PlayerCount";
import {PlayerNames} from "./component/settings/PlayerNames";
import {GameType} from "./component/settings/GameType";
import {Route, Switch} from "react-router-dom";
import {HASH, PATH} from "./constant/Constants";
import {MultiplayerLoad} from "./component/settings/MultiplayerLoad";
import About from "./component/About";
import Layout from "./component/Layout";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null,
            welcome: false,
            collapsed: false,
            playerCount: false,
            loaded: false,
            activeCard: null
        };

        console.log(window)
    }

    render() {
        const finishWelcomeScreen = () => {
            this.setState({collapsed: true});
            setTimeout(() => {
                this.setState({welcome: true});
                console.log(this.state)
            }, 1000)
        };

        const initGame = (players) => {
            this.setState({game: new Game(16, players)})
        };

        const Multiplayer = ({}) => {
            return <>
                {!this.state.loaded &&
                <MultiplayerLoad game={this.state.game}
                                 onSelected={(game) => {
                                     console.log(this.state.loaded);
                                     this.setState({loaded: true});
                                     if (game === null) {
                                         this.setState({playerCount: 0})
                                         this.setState({game: null})
                                     }
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

        return (<Layout collapsed={this.state.welcome || window.location.hash !== HASH.HOME} shouldFadeIn={!this.state.welcome}>
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
        );
    }
}

export default App;
