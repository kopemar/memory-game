import React from 'react';
import styled from 'styled-components';
import {COLORS, FONT_SIZE} from "../constant/Constants";

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
`

export const CustomButton = ({children}) => {
    return <StyledButton type="button">{children}</StyledButton>
}