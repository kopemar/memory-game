import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    text-align: center; 
    margin: 5px;
`;
export const Header = () => {
    return <Container>
        <img src="img/logo_small.svg"/>
    </Container>
}