import React from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/Playground";

function App() {
    const game = new Game(16);
    return (
        <div className="App">
            <Playground game={game} />
        </div>
    );
}

export default App;
