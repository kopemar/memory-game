import React from 'react';
import styled, {css} from 'styled-components';
import {COLORS, FONT_SIZE, REJECT_ANIMATION, SCREEN} from "../../constant/Constants";

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
    cursor: pointer; 
    
    ${SCREEN.BELOW_PHONE} {
        min-width: 0;
        width: 60vw; 
        opacity: 1;
    }
    
    :hover {
        opacity: 1;
    }
    
    ${({disabled}) => disabled && css`
        background-image: linear-gradient(to bottom , ${COLORS.GRAY_BUT_GREEN}, ${COLORS.UGLY_GREEN});
        cursor: not-allowed; 
        
        &:hover {
            opacity: 0.5;
            ${REJECT_ANIMATION}
        }
    `}
`

export const CustomButton = ({children, onClick, disabled}) => {
    return <StyledButton disabled={disabled} type="submit" onClick={(event) => {if (!disabled && onClick) onClick(event)}}>{children}</StyledButton>
}