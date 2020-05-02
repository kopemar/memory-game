import React from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/Playground";
import {GlobalContext} from "./context/AppContext";
import {Header} from "./component/Header";
import {PlayerBar} from "./component/PlayerBar";

const game = new Game(16);

function App() {
    return (
        <GlobalContext>
            <Header collapsed/>
            <PlayerBar players={game.players}/>

            <Playground game={game} />
        </GlobalContext>
    );
}

export default App;
