import React, {useContext} from 'react';
import styled from 'styled-components';
import {CardView} from "./CardView";
import {AppContext} from "../../context/AppContext";
import {COLORS} from "../../constant/Constants";

const PlaygroundContainer = styled.main`
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

    const {setActiveCard} = useContext(AppContext);

    game.cards.forEach((card) => {
        cards.push(<CardView clickHandler={(card) => handleCardClick(card)} card={card}
                             timeoutHandler={(card) => handleTimeout(card)}/>)
    })

    const handleTimeout = (card) => {
        if (!card.discovered) {
            card.active = false;
        }
        setActiveCard(null);
        game.activeCard = null;

    }

    function handleCardClick(card) {
        card.active = true;
        console.log(game);
        if (game.activeCard === null) {
            game.activeCard = card;
            setActiveCard(card);
        } else {
            if (game.activeCard.pairsWith(card)) {
                if (!card.discovered && game.activeCard.discovered) game.discovered += 2;
                game.activeCard.discovered = true;
                card.discovered = true;
            } else {
                game.activeCard.active = false;
                card.active = false;
            }
            game.activeCard = null;
            setActiveCard(null)
        }
    }

    return <PlaygroundContainer>
        {cards}
    </PlaygroundContainer>
};