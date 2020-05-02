import React from 'react';
import styled from 'styled-components';
import {COLORS, FONT_SIZE, SCREEN} from "../constant/Constants";

const StyledButton = styled.button`
    border: none; 
    height: 64px;
    background-image: linear-gradient(to bottom , ${COLORS.POISON}, ${COLORS.POISONOUS});
    min-width: 300px;
    border-radius: 64px;
    font-size: ${FONT_SIZE.LARGE};
    color: ${COLORS.WHITE};
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    opacity: 0.5; 
    transition: 1s; 
    ${SCREEN.BELOW_PHONE} {
        min-width: 0;
        width: 60vw; 
        opacity: 1;
    }
    :hover {
        opacity: 1;
    }
`

export const CustomButton = ({children, onClick}) => {
    return <StyledButton type="button" onClick={(event) => onClick(event)}>{children}</StyledButton>
}