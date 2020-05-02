import React from 'react';
import styled from 'styled-components'
import {COLORS, FONT_SIZE} from "../../constant/Constants";

const Wrapper = styled.div`
    margin: 10px;
    width: 136px;
    height: 168px;
    border-radius: 60px; 
    text-align: center;
    background: ${COLORS.GRAY_BUT_GREEN};
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.XLARGE};
    
    &, >p {
        transition: 1s;
    }
    
    > p {
        opacity: 0.5;
        height: 20%;
        padding: 40%;
    }
    
    &:hover {
        > p {
            opacity: 1;
        }
        background: ${COLORS.GREEN};
    }
`;

export const PlayerNumber = ({value, onSelect, enabled}) => {
    return <Wrapper>
        <p>{value}</p>
    </Wrapper>
}