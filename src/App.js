import React from 'react';
import './App.css';
import {Game} from "./Game";
import {Playground} from "./component/Playground";
import {GlobalContext} from "./context/AppContext";
import {Header} from "./component/Header";

const game = new Game(16);

function App() {
    return (
        <GlobalContext>
            <Header/>
        <div className="App">
            <Playground game={game} />
        </div>
        </GlobalContext>
    );
}

export default App;
