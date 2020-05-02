import React, {useState} from 'react'
import styled, {css} from "styled-components";
import {Header} from "./Header";
import {COLORS, FONT_SIZE, SCREEN, STRING} from "../constant/Constants";
import {CustomButton} from "./Button";

const FadeIn = styled.div`
    @keyframes fade-in {
        from {opacity: 0;}
        to {opacity: 1;}
    }
    animation-name: fade-in;
    opacity: 0;
    animation-delay: ${({delay}) => delay ? delay : 0}s;
    animation-duration: ${({duration}) => duration ? duration : 2}s;
    animation-fill-mode: forwards;
`;

const Container = styled.main`
    max-width: 100%;
    text-align: center;
    transition: 2s;
    
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
        setTimeout(() => {onFinished()}, 2000)
    }

    return <Container finished={finished}>
        <FadeIn >
            <Header/>
        </FadeIn>
        <FadeIn delay={1}>
            <WelcomeText>{STRING.WELCOME_TEXT}</WelcomeText>
        </FadeIn>
        <FadeIn delay={2}>
            <CustomButton onClick={() => finish()}>Next</CustomButton>
        </FadeIn>
    </Container>
}