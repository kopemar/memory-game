import React from 'react';
import styled, {css} from 'styled-components';

const Container = styled.header`
    text-align: center; 
    margin: 5px;
    max-width: 100%;
`;

export const Header = ({collapsed}) => {
    const src = collapsed ? "img/logo_small.svg" : "img/logo_great.svg"
    return <Container>
        <img src={src} alt="Logo"/>
    </Container>
}