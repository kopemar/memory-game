import React from 'react';
import styled, {css} from 'styled-components';
import {SCREEN} from "../constant/Constants";

const Container = styled.header`
    text-align: center; 
    margin: 5px;
    max-width: 100vw;
    
    ${SCREEN.BELOW_PHONE} {
        max-width: 500px;
        margin: auto;
    }
    
    > img {
        margin:auto;
        max-width: 80%
    }
`;

const SmallLogo = styled.h1`
    text-indent: -9999px;
    margin: auto;
    width: 401px; 
    height: 263px;
    border: none;
    background: url("img/logo_great.svg");
    transition: 1s;
    ${({collapsed}) => collapsed && css`
        width: 134px;
        height: 87px; 
        background: url("img/logo_small.svg") no-repeat;
        background-size: cover;
    `}
`

export const Header = ({collapsed}) => {
    return <Container>
        <SmallLogo collapsed={collapsed}>
            Memory Board Game
        </SmallLogo>

    </Container>
}