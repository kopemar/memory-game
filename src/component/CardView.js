import React, {useContext, useState} from 'react';
import styled, {css} from 'styled-components';
import {COLORS} from "../constant/Constants";
import {AppContext} from "../context/AppContext";

const Container = styled.div`
    box-sizing: border-box;
    width: 25%;
    padding: 10px;
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
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
    rx: 10;
    fill: ${({src}) => src};
    stroke: ${({active}) => !active ? COLORS.DARK_WASSERMANN : COLORS.WASSERMANN}; 
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
`

export const CardView = ({card, clickHandler, timeoutHandler}) => {
    const [active, setActive] = useState(card.active);
    const [discovered, setDiscovered] = useState(false)
    const {cCard} = useContext(AppContext);

    const getSelector = (id) => {
        return `#${id}`
    }
    const viewBoxSize = 160;
    const gradientId = "green_linear_gradient";

    const handleClick = () => {
        clickHandler(card)
        setActive(true);
        if (card.pairsWith(cCard)) {
            console.log("clearing timeout")
            clearTimeout(cCard.timeout);
        }

        setTimeout(() => {
            setActive(card.active)
            if (!discovered) setDiscovered(card.discovered)
        }, 500)

        card.timeout = setTimeout(() => {
            setActive(card.discovered)
            timeoutHandler(card)
        }, 1500);

        console.log(card)
    }

    return (
        <Container onClick={() => {if (!card.discovered) handleClick()}}>
            <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradientId}>
                        <stop stopColor={COLORS.LIGHT_WASSERMANN} offset="0%"/>
                        <stop stopColor={COLORS.GREEN_AGAIN} offset="100%"/>
                    </linearGradient>

                    <pattern id="img1" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image href="wall.jpg" x="0" y="0" width="100" height="100"/>
                    </pattern>
                </defs>
                <FlipCard>
                    <Inner active={card.isTheSame(cCard) || active || discovered} size={viewBoxSize}>
                        <Back active={card.isTheSame(cCard) || active || discovered} fill={getSelector(gradientId)} id="card_bg_rectangle"/>
                        <Front active={card.isTheSame(cCard) || active || discovered} src={card.src} fill="#img1"/>
                    </Inner>
                </FlipCard>
            </svg>
        </Container>
    )
}