import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {Subheading} from "../Heading";
import {STRING} from "../../constant/Constants";
import {PlayerNumber} from "./PlayerNumber";

const Container = styled.main`
    transform: translateX(100%);
    transition: 1s; 
    top: 0;
    
    ${({shouldMove}) => shouldMove && css`
        transform: translateX(0%);
    `}
`;

export const PlayerCount = () => {
    const [shouldMove, setShouldMove] = useState(false)

    setTimeout(() => setShouldMove(true), 100)
    return <Container shouldMove={shouldMove}>
        <Subheading>{STRING.NUMBER_OF_PLAYERS}</Subheading>
        <PlayerNumber value={1}/>
    </Container>
}