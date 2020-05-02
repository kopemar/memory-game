import React, {useState} from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/Playground";
import {GlobalContext} from "./context/AppContext";
import {Header} from "./component/Header";
import {PlayerBar} from "./component/PlayerBar";
import {WelcomeScreen} from "./component/WelcomeScreen";



function App() {
    const [game, setGame] = useState();
    // !game && setGame(new Game(16));

    const welcome = <WelcomeScreen/>;
    const field =  game && <>
        <PlayerBar players={game.players}/>
        <Playground game={game} />
    </>;



    return (
        <GlobalContext>
            {game && <Header collapsed/>}
            {!game && welcome}
            {game && field}
        </GlobalContext>
    );
}

export default App;
