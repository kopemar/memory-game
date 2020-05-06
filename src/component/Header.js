import React from 'react';
import styled, {css} from 'styled-components';
import {PATH, SCREEN} from "../constant/Constants";
import {Link, Route, Switch} from "react-router-dom";

const Container = styled.header`
    text-align: center; 
    margin: 5px;
    max-width: 100vw;
    position: relative; 
    
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
    display: inline-block; 
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

const BackButton = styled.nav`
    position: absolute; 
    left: 0;
    top: 25%; 
    bottom: 75%;
    margin-left: 30px;
    cursor: pointer; 
`

export const Header = ({collapsed, onBack}) => {
    return <Container>
        <Switch>
            <Route path={PATH.MULTIPLAYER}>
                <BackButton
                    onClick={() => {
                        onBack()
                    }}
                >
                    <img src="img/back.svg"/>
                </BackButton>
            </Route>
        </Switch>
        <Link to={PATH.HOME}>
            <SmallLogo collapsed={collapsed}>Memory Board Game</SmallLogo>
        </Link>
    </Container>
}