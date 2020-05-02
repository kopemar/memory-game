import React, {useState} from 'react'
import styled, {css} from "styled-components";
import {Header} from "./Header";
import {COLORS, FONT_SIZE, SCREEN, STRING} from "../constant/Constants";
import {CustomButton} from "./Button";
import {FadeIn} from "./FadeIn";

const Container = styled.main`
    max-width: 100%;
    text-align: center;
    transition: 1s;
    
    ${({finished}) => finished && css`
        transform: translateX(-100%);
    `}
`

const WelcomeText = styled.p`
    margin: 50px;
    color: ${COLORS.WHITE}; 
    font-size: ${FONT_SIZE.XLARGE};
    
    ${SCREEN.BELOW_PHONE} {
        font-size: ${FONT_SIZE.LARGE};
    }
`

export const WelcomeScreen = ({onFinished}) => {
    const [finished, setFinished] = useState(false);

    const finish = () => {
        setFinished(true)
        onFinished()
    }

    return <Container finished={finished}>
        <FadeIn delay={1}>
            <WelcomeText>{STRING.WELCOME_TEXT}</WelcomeText>
        </FadeIn>
        <FadeIn delay={2}>
            <CustomButton onClick={() => finish()}>Next</CustomButton>
        </FadeIn>
    </Container>
}