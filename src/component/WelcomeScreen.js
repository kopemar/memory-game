import React, {useState} from 'react'
import styled, {css} from "styled-components";
import {STRING} from "../constant/Constants";
import {CustomButton} from "./Button";
import {FadeIn} from "./FadeIn";
import {Subheading} from "./Heading";

const Container = styled.section`
    max-width: 100%;
    text-align: center;
    transition: 1s;
    
    ${({finished}) => finished && css`
        transform: translateX(-100%);
    `}
`

export const WelcomeScreen = ({onFinished}) => {
    const [finished, setFinished] = useState(false);

    const finish = () => {
        setFinished(true)
        onFinished()
    }

    return <Container finished={finished}>
        <FadeIn delay={1}>
            <Subheading>{STRING.WELCOME_TEXT}</Subheading>
        </FadeIn>
        <FadeIn delay={2}>
            <CustomButton onClick={() => finish()}>Next</CustomButton>
        </FadeIn>
    </Container>
}