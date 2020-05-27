import React from 'react';
import styled from 'styled-components'
import {MoveFromRight} from "../FadeIn";
import {Subheading} from "../Heading";
import {CustomButton} from "../Button";
import {SCREEN, STORAGE} from "../../constant/Constants";
import {SinglePlayerGame} from "../../Game";

const Container = styled(MoveFromRight)`
    text-align: center; 
    
    > button {
        margin: auto 30px;
        ${SCREEN.BELOW_PHONE} {
            margin-bottom: 30px;
        }
    }
`

export const SingleplayerLoad = ({onSelected}) => {
    return <section>
        <Container>
            <Subheading>Choose type of the game</Subheading>
            <CustomButton disabled={window.localStorage.getItem(STORAGE.SINGLEPLAYER) === undefined || window.localStorage.getItem(STORAGE.SINGLEPLAYER) === null}
                          onClick={() => {
                              console.log(window.localStorage.getItem(STORAGE.SINGLEPLAYER));
                              onSelected(SinglePlayerGame.fromProps(
                                  JSON.parse(window.localStorage.getItem(STORAGE.SINGLEPLAYER)))
                              )}}
            >
                Load Game
            </CustomButton>
            <CustomButton onClick={() => onSelected(null)}>New Game</CustomButton>
        </Container>
    </section>
}