import React, {useReducer, useState} from 'react';
import styled, {css} from 'styled-components';
import {COLORS, FONT_SIZE, SCREEN} from "../../constant/Constants";
import {observe} from "mobx"

const Container = styled.div`
    position: relative;
    display: flex;
    background: ${COLORS.WHITE}; 
    min-height: 100px;
    ${SCREEN.ABOVE_TABLET} {
        padding: 6px 200px;
    }
    ${SCREEN.BELOW_PHONE} {
        flex-direction: column; 
        padding: 20px;
    }
    > * {
        text-align: center; 
    }
`;

const PlayerField = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center
    ${SCREEN.BELOW_PHONE} {
        position: absolute;
    }
`

const PlayerName = styled.div`
    height: 0;
    flex-grow: 1; 
    text-transform: uppercase;
    padding: 20px;
    font-size: ${FONT_SIZE.XLARGE};
    color: ${({active}) => active? COLORS.SILLY_GREEN : COLORS.GRAY};
    transition: 1s linear;
    
    ${SCREEN.BELOW_PHONE} {
        text-align: left;
        padding: 5px;
        font-size: ${FONT_SIZE.LARGE};
    }
`

const Indicator = styled.div`
    background: ${COLORS.SILLY_GREEN};
    position: absolute;
    height: 10px;
    width: 100%;
    left: 0;
    bottom: 0;
    margin-bottom: 4px;
    transition: 2s linear;
    
    ${({shouldAnimate}) => shouldAnimate && css`
        @keyframes indicator {
            from {
                width: ${({start}) => start ? start : 100}%;
            }
            to {
                width: ${({end}) => end ? end : 0}%;
            }
        }
        animation-name: indicator; 
        animation-duration: ${({duration}) => duration ? duration : 6000}ms; 
        animation-timing-function: linear;`
    }
    
    
`

export const PlayerBar = ({game}) => {
    const [activePlayer, setActivePlayer] = useState(game.players[game.activePlayer]);
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [iStart] = useState(100);
    const [iEnd] = useState(0);
    const [iDuration] = useState(6000);
    const [iAnimation, setIAnimation] = useState(true);

    for (const player of game.players) {
        player !== null && observe(player, "score", () => {
            forceUpdate();
        })
    }

    observe(game, "activePlayer", change => {
        setActivePlayer(game.players[change.newValue])
    });

    observe(game, "timeout", () => {
        setIAnimation(false)

        setTimeout(() => {
            setIAnimation(true)
        }, 100)
    })

    const fields = [];
    for (let i = 1; i < game.players.length; i++) {
        const player = game.players[i];
        player && fields.push(<PlayerField><PlayerName active={player === activePlayer}>{player.name} ({player.score})</PlayerName></PlayerField>)
    }

    return <Container>
        {fields}
        <Indicator start={iStart} end={iEnd} duration={iDuration} shouldAnimate={iAnimation}/>
    </Container>
}