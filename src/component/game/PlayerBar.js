import React, {useReducer, useState} from 'react';
import styled from 'styled-components';
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
    right: 0;
    bottom: 0;
    margin-bottom: 4px;
`

export const PlayerBar = ({game}) => {
    const [activePlayer, setActivePlayer] = useState(game.players[game.activePlayer]);
    const fields = [];
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    for (const player of game.players) {
        player !== null && observe(player, "score", () => {
            forceUpdate();
        })
    }

    observe(game, "activePlayer", change => {
        setActivePlayer(game.players[change.newValue])
    })


    for (let i = 1; i < game.players.length; i++) {
        const player = game.players[i];
        player && fields.push(<PlayerField><PlayerName active={player === activePlayer}>{player.name} ({player.score})</PlayerName></PlayerField>)
    }

    return <Container>
        {fields}
        <Indicator/>
    </Container>
}