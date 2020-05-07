import React from "react";
import styled from "styled-components";

const Container = styled.footer`
    width: 100vw;
    height: 3em;
    display: block;
    text-align: center;
    position: absolute; 
    bottom: 0;
`

export const Footer = () => {
    return <Container>
        (c) 2020
    </Container>
}
export default Footer