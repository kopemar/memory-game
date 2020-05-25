import React from 'react';
import styled from 'styled-components'
import {MoveFromRight} from "../FadeIn";
import {Subheading} from "../Heading";
import {CustomButton} from "../Button";
import {SCREEN, STORAGE} from "../../constant/Constants";
import {MultiplayerGame} from "../../Game";

const Container = styled(MoveFromRight)`
    text-align: center; 
    
    > button {
        margin: auto 30px;
        ${SCREEN.BELOW_PHONE} {
            margin-bottom: 30px;
        }
    }
`

export const MultiplayerLoad = ({onSelected}) => {
    return <section>
        <Container>
            <Subheading>Choose type of the game</Subheading>
            <CustomButton disabled={window.localStorage.getItem(STORAGE.MULTIPLAYER) === undefined || window.localStorage.getItem(STORAGE.MULTIPLAYER) === null}
                          onClick={() => {
                              console.log(window.localStorage.getItem(STORAGE.MULTIPLAYER));
                              onSelected(MultiplayerGame.fromProps(
                              JSON.parse(window.localStorage.getItem(STORAGE.MULTIPLAYER)))
                          )}}
            >
                Load Game
            </CustomButton>
            <CustomButton onClick={() => onSelected(null)}>New Game</CustomButton>
        </Container>
    </section>
}