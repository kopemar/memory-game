import React from 'react';
import styled from 'styled-components'
import {MoveFromRight} from "../FadeIn";
import {Subheading} from "../Heading";
import {CustomButton} from "../Button";
import {SCREEN} from "../../constant/Constants";

const Container = styled(MoveFromRight)`
    text-align: center; 
    
    > button {
        margin: auto 30px;
        ${SCREEN.BELOW_PHONE} {
            margin-bottom: 30px;
        }
    }
`

export const MultiplayerLoad = ({game, onSelected}) => {
    return <section><Container>
        <Subheading>Choose type of the game</Subheading>
        <CustomButton disabled={game === null} onClick={(game) => onSelected(game)}>Load Game</CustomButton>
        <CustomButton onClick={() => onSelected(null)}>New Game</CustomButton>
    </Container>
    </section>
}