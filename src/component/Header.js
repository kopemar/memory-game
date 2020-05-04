import React from 'react';
import styled, {css} from 'styled-components';
import {PATH, SCREEN} from "../constant/Constants";
import {Link, useRouteMatch} from "react-router-dom";

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
    cursor: pointer;
    transition: 1s;
    ${({collapsed}) => collapsed && css`
        width: 134px;
        height: 87px; 
        background: url("img/logo_small.svg") no-repeat;
        background-size: cover;
    `}
`

export const Header = ({collapsed}) => {
    let match = useRouteMatch();
    console.log(window.location.search)
    return <Container>
        <Link to={PATH.HOME}>
            <SmallLogo collapsed={collapsed}>Memory Board Game</SmallLogo>
        </Link>
    </Container>
}