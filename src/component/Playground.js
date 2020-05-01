import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {CardView} from "./CardView";
import {Card} from "../Game";

const PlaygroundContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    padding: 10px
`;


export const Playground = ({game}) => {
    return <PlaygroundContainer>
        {game && game.cards.map((card) => <CardView card={new Card(card.number)}/>)}
    </PlaygroundContainer>
};