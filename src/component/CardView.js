import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {COLORS} from "../constant/Constants";

const Container = styled.div`
    margin: 10px;
    width: ${({size}) => size}px;
    height: ${({size}) => size}px; 
    border-radius: 10px;
    perspective: 1000px;
`;

const Inner = styled.g`
    position: relative;
    fill: transparent;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    text-align: center;
    ${({active}) => active && css`transform: rotateY(180deg);`}
`

const FlipCard = styled.g`
    perspective: 1000px;
    position: relative; 
`


const Back = styled.rect`
    width: 60%;
    height: 60%;
    rx: 10;
    fill: url(${({fill}) => fill});
    stroke: ${({active}) => active ? COLORS.DARK_WASSERMANN : COLORS.WASSERMANN}; 
    position: absolute;
    backface-visibility: hidden;
    
    &:hover {
        stroke: ${COLORS.DARK_WASSERMANN}
    }
`

const Front = styled.rect`
    width: 60%;
    height: 60%;
    rx: 10;
    fill: ${({src}) => src};
    stroke: ${({active}) => !active ? COLORS.DARK_WASSERMANN : COLORS.WASSERMANN}; 
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

export const CardView = ({card}) => {
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
            {card.number}
            <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradientId}>
                        <stop stopColor={COLORS.LIGHT_WASSERMANN} offset="0%"/>
                        <stop stopColor={COLORS.GREEN_AGAIN} offset="100%"/>
                    </linearGradient>
                </defs>
                <FlipCard active={active}>
                <Inner active={active}>
                    <Back active={active} fill={getSelector(gradientId)} id="card_bg_rectangle"/>
                    <Front active={active} src={card.src} />
                </Inner>
                </FlipCard>
            </svg>
        </Container>
    )
}