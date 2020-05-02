import React, {useState} from 'react'
import styled, {css} from 'styled-components';
import {Subheading} from "../Heading";
import {STRING} from "../../constant/Constants";

const Container = styled.main`
    width: 100%;
    display: flex;
    // transform: translateX(100%);
    overflow: hidden;
`;

const FormSection = styled.section`
    flex-grow: 1; 
    display: none; 
    ${({active}) => active && css`
        display: block; 
    `}
    
`

const PlayerForm = ({number, active}) => {
    return <FormSection active={active}>
        <Subheading>{STRING.NAME_OF_PLAYER} {number}</Subheading>
    </FormSection>
}

export const PlayerNames = ({count}) => {
    const [active, setActive] = useState(1);
    const forms = [];
    for (let i = 1; i <= count; i++) {
        forms.push(<PlayerForm number={i} active={active === i}/>)
    }
    return <Container>
        {forms}
    </Container>
};