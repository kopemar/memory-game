import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {COLORS, FONT_SIZE, SCREEN} from "../constant/Constants";

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

export const PlayerBar = ({players}) => {
    const [activePlayer, setActivePlayer] = useState(players[0])
    const fields = [];
    players && players.forEach((player) => fields.push(<PlayerField>
        <PlayerName active={player === activePlayer}>{player.name}</PlayerName>
    </PlayerField>
    ));
    return <Container>
        {fields}
        <Indicator/>
    </Container>
}