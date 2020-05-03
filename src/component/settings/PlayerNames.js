import React, {useState, Component} from 'react'
import styled, {css} from 'styled-components';
import {Subheading} from "../Heading";
import {COLORS, FONT_SIZE, SCREEN, STRING} from "../../constant/Constants";
import {CustomButton} from "../Button";

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

const TextField = styled.input`
    display: block; 
    margin:  0 auto 64px;    
    height: 64px;
    min-width: 300px;
    border-radius: 64px;
    letter-spacing: 3px;
    font-weight: 500;
    font-size: ${FONT_SIZE.XLARGE};
    text-align: center;
    
    color: ${COLORS.GRAY};
    padding: 10px;
    border: 5px solid ${COLORS.WASSERMANN}; 
    transition: 1s;
    
    ${SCREEN.BELOW_PHONE} {
        &::placeholder {
            font-size: ${FONT_SIZE.LARGE};
        }
        min-width: 0;
        width: 60vw; 
    }
    
    &::placeholder {
        font-weight: 500;
        opacity: 0.2;
    }
    
    &:invalid {
        border-color: ${COLORS.UGLY_GREEN};
    }
`;

const Form = styled.form`
    text-align: center; 
`;

class PlayerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        if (event.target.name === "name" && this.state.name != null && event.target.value.length >= 10) {
            this.state.isLong = true;
        } else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    render() {
        const {name} = this.state;
        return (
            <FormSection active={this.props.active}>
                <Subheading>{STRING.NAME_OF_PLAYER} {this.props.number}</Subheading>
                <Form

                    onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <TextField
                        autoComplete={'off'}
                        autocomplete="off"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder={`Player ${this.props.number} name`}
                        required/>
                    <CustomButton disabled={this.state.name === null || this.state.name.length < 1}>Next</CustomButton>
                </Form>
            </FormSection>
        );
    }

}

export const PlayerNames = ({count}) => {
    const [active] = useState(1);
    const forms = [];
    for (let i = 1; i <= count; i++) {
        forms.push(<PlayerForm number={i} active={active === i}/>)
    }
    return <Container>
        {forms}
    </Container>
};