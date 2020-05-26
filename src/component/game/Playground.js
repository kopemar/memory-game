import React from 'react';
import styled from 'styled-components';
import {CardView} from "./CardView";
import {COLORS} from "../../constant/Constants";

const PlaygroundContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    padding: 10px;
    background: ${COLORS.WHITE};
    border-radius: 4px;
    border: 1px solid ${COLORS.GRAY_BUT_GREEN};
    margin: 10px;
`;


export const Playground = ({game}) => {
    const cards = [];

    game.cards.forEach((card) => {
        cards.push(<CardView clickHandler={(card) => handleCardClick(card)}
                             card={card}
                             game={game}
                             timeoutHandler={(card) => handleTimeout(card)}/>)
    })

    const handleTimeout = (card) => {
        if (!card.discovered) {
            card.active = false;
        }
        game.activeCard = null;
    }

    function handleCardClick(card) {
        card.active = true;
        console.log(game);
        if (game.activeCard === null) {
            game.activeCard = card;
        } else {
            if (game.activeCard.pairsWith(card)) {
                if (!card.discovered && !game.activeCard.discovered) game.discovered += 2;
                game.activeCard.discovered = true;
                card.discovered = true;
            } else {
                game.activeCard.active = false;
                card.active = false;
            }
            game.activeCard = null;
            if (game.isWon()) setTimeout(() => alert("Game is won!"), 1000)
        }
    }

    return <PlaygroundContainer>
        {cards}
    </PlaygroundContainer>
};