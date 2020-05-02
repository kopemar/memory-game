import React from 'react'
import styled from "styled-components";
import {Header} from "./Header";

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

export const WelcomeScreen = () => {
    return <>
        <FadeIn delay={1}>
            <Header/>
        </FadeIn>

    </>
}