import React, {useContext} from 'react';
import styled from 'styled-components';
import {CardView} from "./CardView";
import {Card} from "../Game";
import {AppContext} from "../context/AppContext";

const PlaygroundContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    padding: 10px
`;


export const Playground = ({game}) => {
    const cards = [];

    const {setCCard} = useContext(AppContext);

    game.cards.forEach((card) => {
        cards.push(<CardView clickHandler={(card) => handleCardClick(card)} card={new Card(card.number)}
                             timeoutHandler={(card) => handleTimeout(card)}/>)
    })

    const handleTimeout = (card) => {
        console.log("TIMEOUT", card)
        if (!card.discovered) {
            card.active = false;
        }
        setCCard(null);
        game.activeCard = null;

    }

    function handleCardClick(card) {
        card.active = true;
        console.log(game);
        // no card active
        if (game.activeCard === null) {
            game.activeCard = card;
            setCCard(card);
        } else {
            if (game.activeCard.equals(card)) {
                console.log("Match!");
                if (!card.discovered && game.activeCard.discovered) game.discovered += 2;
                game.activeCard.discovered = true;
                card.discovered = true;
            } else {
                game.activeCard.active = false;
                card.active = false;
            }
            game.activeCard = null;
            setCCard(null)
        }
        console.log(game);

        if (game.isWon()) {
            console.log("YOU WON!")
            alert("You won!")
        }
    }

    return <PlaygroundContainer>
        {cards}
    </PlaygroundContainer>
};