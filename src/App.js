import React, {useState, useContext} from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/game/Playground";
import {AppContext, GlobalContext} from "./context/AppContext";
import {Header} from "./component/Header";
import {PlayerBar} from "./component/game/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";
import {PlayerCount} from "./component/settings/PlayerCount";
import {FadeIn} from "./component/FadeIn";
import {PlayerNames} from "./component/settings/PlayerNames";
import {GameType} from "./component/settings/GameType";
import {
    BrowserRouter as Router,
    Switch,
    Route, withRouter
} from "react-router-dom";
import {PATH} from "./constant/Constants";

function App() {
    const [game, setGame] = useState(null);
    const [welcome, setWelcome] = useState(false);
    const [collapsed, setCollapsed] = useState(false)
    const [playerCount, setPlayerCount] = useState(0);

    const finishWelcomeScreen = () => {
        setCollapsed(true);
        setTimeout(() => {
            setWelcome(true)
        }, 1000)
    }
    const initGame = (players) => {
        setGame(new Game(16, players));
    }

    const Multiplayer = () => {
        return <>
            <Header collapsed/>
            {playerCount === 0 &&
        <PlayerCount onFinished={(playerCount) => setPlayerCount(playerCount)}/>
        }
            {playerCount > 0 && !game && <><PlayerNames count={playerCount}
                                                        onFinished={players => initGame(players)}/></>}
            {game && game.players && <>
                <PlayerBar players={game.players}/>
                <Playground game={game}/>
            </>}
        </>
    }


    return (
        <GlobalContext>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path={PATH.MULTIPLAYER}>
                        <Multiplayer/>
                    </Route>
                    <Route path={PATH.HOME}>
                        <FadeIn>
                            <Header collapsed={collapsed}/>
                        </FadeIn>
                        {!welcome && <>
                            <WelcomeScreen onFinished={() => {
                                finishWelcomeScreen()
                            }}/>
                        </>}
                        {
                            welcome && <GameType/>
                        }
                    </Route>
                </Switch>
            </Router>
        </GlobalContext>
    );
}

export default App;
