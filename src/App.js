import React, {useState, useContext} from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/Playground";
import {GlobalContext} from "./context/AppContext";
import {Header} from "./component/Header";
import {PlayerBar} from "./component/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";



function App() {
    const [game, setGame] = useState();
    const [welcome, setWelcome] = useState(false);
    !game && setGame(new Game(16));

    const welcomeScreen = <WelcomeScreen onFinished={() => {
        setWelcome(true)}
    }/>;
    const field =  game && <>
        <PlayerBar players={game.players}/>
        <Playground game={game} />
    </>;

    return (
        <GlobalContext>
            {welcome && <Header collapsed/>}
            {welcome === false && welcomeScreen}
            {welcome && field}
        </GlobalContext>
    );
}

export default App;
