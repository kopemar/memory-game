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

export const Header = ({collapsed}) => {
    const src = collapsed ? "img/logo_small.svg" : "img/logo_great.svg"
    return <Container>
        <img src={src} alt="Logo"/>
    </Container>
}