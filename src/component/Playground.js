import React, {useContext} from 'react';
import styled from 'styled-components';
import {CardView} from "./CardView";
import {Card} from "../Game";
import {AppContext} from "../context/AppContext";

const PlaygroundContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    padding: 10px
`;


export const Playground = ({game}) => {
    const cards = [];

    const {cCard, setCCard} = useContext(AppContext);

    game.cards.forEach((card) => {
        cards.push(<CardView clickHandler={(card) => handleCardClick(card)} card={new Card(card.number)}/>)
    })

    async function handleCardClick(card) {
        if (!card.discovered) {
            if (cCard === null) {
                card.active = true;
                game.activeCard = card;
                setCCard(card);
            } else {
                if (game.activeCard.equals(card)) {
                    game.activeCard.discovered = true;
                    card.discovered = true;
                    console.log("Match!");
                    game.activeCard = null;
                } else {
                    game.activeCard.active = false;
                    card.active = false;
                    game.activeCard = null;
                }
                setCCard(null)
            }
        }
    }

    return <PlaygroundContainer>
        {cards}
    </PlaygroundContainer>
};