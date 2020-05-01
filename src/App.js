import React from 'react';
import './App.css';
import {Card} from "./component/Card";
import {Game} from "./Game";

function App() {
    new Game(16);
    return (
        <div className="App">
            <Card/>
        </div>
    );
}

export default App;
