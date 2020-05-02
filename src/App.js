import React from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/Playground";
import {GlobalContext} from "./context/AppContext";

const game = Game.getGame(16);

function App() {
    return (
        <GlobalContext>
        <div className="App">
            <Playground game={game} />
        </div>
        </GlobalContext>
    );
}

export default App;
