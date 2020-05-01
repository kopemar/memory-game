import React, {useState} from 'react';
import styled from 'styled-components';
import {COLORS} from "../constant/Constants";

const Container = styled.div`
    margin: 10px;
    width: ${({size}) => size}px;
    height: ${({size}) => size}px; 
    border-radius: 10px;
`;

const Rectangle = styled.rect`
    width: 90%;
    height: 90%;
    rx: 10;
    fill: url(${({fill}) => fill});
    stroke: ${({active}) => active ? COLORS.DARK_WASSERMANN : COLORS.WASSERMANN}; 
    
    :hover {
        stroke: ${COLORS.DARK_WASSERMANN}
    }
`

export const Card = () => {
    const [active, setActive] = useState(false);
    const getSelector = (id) => {
        return `#${id}`
    }
    const viewBoxSize = 160;
    const gradientId = "green_linear_gradient";

    const handleClick = (event) => {
        setActive(!active)
    }
    return (
        <Container size={viewBoxSize} onClick={(event) => handleClick(event)}>
            <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradientId}>
                        <stop stop-color={COLORS.LIGHT_WASSERMANN} offset="0%"/>
                        <stop stop-color={COLORS.GREEN_AGAIN} offset="100%"/>
                    </linearGradient>
                </defs>
                <Rectangle active={active} fill={getSelector(gradientId)} id="card_bg_rectangle"/>
            </svg>
        </Container>
    )
}