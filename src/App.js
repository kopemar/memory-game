import React from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/Playground";
import {GlobalContext} from "./context/AppContext";

function App() {
    const game = new Game(16);
    return (
        <GlobalContext>
        <div className="App">
            <Playground game={game} />
        </div>
        </GlobalContext>
    );
}

export default App;
