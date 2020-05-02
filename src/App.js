import React, {useState, useContext} from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/game/Playground";
import {GlobalContext} from "./context/AppContext";
import {Header} from "./component/Header";
import {PlayerBar} from "./component/game/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";
import {PlayerCount} from "./component/settings/PlayerCount";
import {FadeIn} from "./component/FadeIn";

function App() {
    const [game, setGame] = useState();
    const [welcome, setWelcome] = useState(false);
    const [collapsed, setCollapsed] = useState(false)
    const [playerCount, setPlayerCount] = useState(0)
    !game && setGame(new Game(16));

    const finishWelcomeScreen = () => {
        setCollapsed(true);
        setTimeout(() => {
            setWelcome(true)
        }, 1000)
    }

    const field =  game && <>
        <PlayerBar players={game.players}/>
        <Playground game={game} />
    </>;

    return (
        <GlobalContext>
            <FadeIn>
                <Header collapsed={collapsed}/>
            </FadeIn>

            {!welcome && <>
                    <WelcomeScreen onFinished={() => {finishWelcomeScreen()}}/>
                </>}
            {welcome && playerCount === 0 && <>
                <PlayerCount/>
                </>}
            {welcome && playerCount > 0 && field}
        </GlobalContext>
    );
}

export default App;
