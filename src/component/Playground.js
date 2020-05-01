import React from 'react';
import styled from 'styled-components';
import {CardView} from "./CardView";
import {Card} from "../Game";

const PlaygroundContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    padding: 10px
`;


export const Playground = ({game}) => {
    const handleCardClick = (card) => {
        card.active = true;
        if (game.activeCard === null) {
            game.activeCard = card;
            console.log(game.activeCard)
        } else {
            if (game.activeCard.equals(card)) {
                console.log("Match!");
                game.activeCard = null;
            } else {
                game.activeCard.active = false;
                card.active = false;
                game.activeCard = null;
            }

        }
    }
    return <PlaygroundContainer>
        {game && game.cards.map((card) => <CardView onClick={(card) => handleCardClick(card)}
                                                    card={new Card(card.number)}/>)}
    </PlaygroundContainer>
};