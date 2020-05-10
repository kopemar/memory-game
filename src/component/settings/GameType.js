import React from 'react';
import styled from 'styled-components'
import {MoveFromRight} from "../FadeIn";
import {Subheading} from "../Heading";
import {CustomButton} from "../Button";
import {PATH, SCREEN} from "../../constant/Constants";
import {Link} from "react-router-dom";

const Container = styled(MoveFromRight)`
    text-align: center; 
    
    > button {
        margin: auto 30px;
       
        ${SCREEN.BELOW_PHONE} {
            margin-bottom: 30px;
        }
    }
`

export const GameType = () => {
    return <section>
        <Container>
            <Subheading>Choose type of the game</Subheading>
            <CustomButton disabled>Single Player</CustomButton>
            <Link to={PATH.MULTIPLAYER}>
                <CustomButton>
                    Multiplayer
                </CustomButton>
            </Link>
        </Container>
    </section>
}