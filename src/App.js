import React, {Component} from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/game/Playground";
import {Header} from "./component/Header";
import {PlayerBar} from "./component/game/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";
import {PlayerCount} from "./component/settings/PlayerCount";
import {FadeIn} from "./component/FadeIn";
import {PlayerNames} from "./component/settings/PlayerNames";
import {GameType} from "./component/settings/GameType";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {PATH} from "./constant/Constants";
import {MultiplayerLoad} from "./component/settings/MultiplayerLoad";
import About from "./component/About";
import Footer from "./component/Footer";
import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh; 
    position: relative; 
`;

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
                <Header context={this.state} collapsed={true} onBack={() => {
                    console.log("back")
                    window.history.back();
                    this.setState({loaded: false})}
                }/>
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

        return (<Container>
                <Router basename="/">
                    <Switch>
                        <Route path={PATH.MULTIPLAYER}>
                            <Multiplayer/>
                        </Route>
                        <Route path={PATH.ABOUT}>
                            <About/>
                        </Route>
                        <Route path={PATH.HOME}>
                            <FadeIn>
                                <Header collapsed={this.state.collapsed} onBack={() => {
                                    window.history.back();
                                    this.setState({loaded: false})
                                }}/>
                            </FadeIn>
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
                    <Footer/>
                </Router>
            </Container>
        );
    }
}

export default App;
