import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {Subheading} from "../visuals/Heading";
import {MAX_PLAYER_COUNT, MIN_PLAYER_COUNT, STRING} from "../../constant/Constants";
import {PlayerNumber} from "./PlayerNumber";
import {CustomButton} from "../visuals/Button";

const Container = styled.main`
    transform: translateX(100%);
    transition: 1s; 
    text-align: center;
    ${({shouldMove}) => shouldMove && css`
        transform: translateX(0%);
    `}
`;

const Numbers = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
`

export const PlayerCount = ({onFinished}) => {
    const [shouldMove, setShouldMove] = useState(false);
    const [playerCount, setPlayerCount] = useState(0)

    const onSelected = (value) => {
        setPlayerCount(value);
    };

    const numbers = [];
    for (let i = MIN_PLAYER_COUNT; i <= MAX_PLAYER_COUNT; i++) {
        numbers.push(<PlayerNumber value={i} enabled={playerCount === i} onSelect={(value) => onSelected(value)}/>)
    }

    setTimeout(() => setShouldMove(true), 100)
    return <section><Container shouldMove={shouldMove}>
        <Subheading>{STRING.NUMBER_OF_PLAYERS}</Subheading>
        <Numbers>
            {numbers}
        </Numbers>
        <CustomButton disabled={playerCount === 0} onClick={()=> {onFinished(playerCount)}}>Next</CustomButton>
    </Container>
    </section>
}