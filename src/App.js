import React from 'react';
import './App.css';
import {CardView} from "./component/CardView";
import {Card, Game} from "./Game";

function App() {
    const game = new Game(16);
    return (
        <div className="App">
            {
                game && game.cards.map((card) => <CardView card={new Card(card.number)}/>)
            }

        </div>
    );
}

export default App;
