import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../constant/Constants";

const Container = styled.div`
    width: ${({size}) => size}px;
    height: ${({size}) => size}px; 
    border-radius: 10px;
`;

const Rectangle = styled.rect`
    width: 100%;
    height: 100%;
    rx: 10;
    fill: url(${({fill}) => fill});
    stroke: ${COLORS.WASSERMANN}; 
    :hover {
        stroke: ${COLORS.DARK_WASSERMANN}
    }
`

export const Card = () => {
    const getSelector = (id) => {
        return `#${id}`
    }
    const viewBoxSize = 160;
    const gradientId = "green_linear_gradient";
    return (
        <Container size={viewBoxSize}>
            <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradientId}>
                        <stop stop-color={COLORS.LIGHT_WASSERMANN} offset="0%"/>
                        <stop stop-color={COLORS.GREEN_AGAIN} offset="100%"/>
                    </linearGradient>
                </defs>
                <Rectangle fill={getSelector(gradientId)} id="card_bg_rectangle"/>
            </svg>
        </Container>
    )
}