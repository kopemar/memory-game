import React, {useState, Component} from 'react'
import styled, {css} from 'styled-components';
import {Subheading} from "../Heading";
import {COLORS, FONT_SIZE, SCREEN, STRING} from "../../constant/Constants";
import {CustomButton} from "../Button";
import {MoveFromRight} from "../FadeIn";
import {Player} from "../../Game";

const Container = styled.div`
    
`

const FormContainer = styled.main`
    width: 100vw;
    
    ${({active}) => active && css`
        transform: translateX(-${(active - 1) * 100}%);
    `}
    transition: 2s; 
`;

const FormSection = styled.section`
    width: 100vw;
    display: inline-block;
    position: absolute; 
    
    ${({number}) => number && css`
        left: ${(number - 1) * 100}%;
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

const Indicators = styled.div`
    // position: absolute; 
    // right: 50%;
    // left: 50%; 
    display: flex;
    align-items: center;
    text-align: center; 
    justify-content: center;
`;

const Circle = styled.circle`
    fill: ${COLORS.WHITE};
    transition: 1s;
    
    ${({disabled, active}) => {
    return disabled && !active && css`
        fill: ${COLORS.UGLY_GREEN}
    `
}}
    
    ${({active}) => active && css`
        fill: ${COLORS.POISONOUS}
    `}
`

const IndicatorWrapper = styled.div`
    margin: 10px;
`

const IndicatorsWrapper = styled(MoveFromRight)`
    width: 100vw;
    position: absolute; 
    bottom: 0;
`


const Indicator = ({active, disabled}) => {
    return <IndicatorWrapper>
        <svg width="22px" height="22px" viewBox="0 0 22 22">
            <Circle cx="11" cy="11" r="8" active={active} disabled={disabled}/>
        </svg>
    </IndicatorWrapper>
}

class PlayerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            number: this.props.number,
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        if (event.target.name === "name" && this.state.name != null && event.target.value.length >= 10) {
            this.setState({isLong: true})
        } else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    }

    render() {
        const {name} = this.state;
        return (
            <FormSection number={this.state.number}>
                <Subheading>{STRING.NAME_OF_PLAYER} {this.props.number}</Subheading>
                <Form
                    onSubmit={(e) => {
                        this.props.onSubmit(this.state);
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

export const PlayerNames = ({count, onFinished}) => {
    const [active, setActive] = useState(1);
    const [players] = useState([]);
    const forms = [];
    const indicators = [];

    const onSubmit = (value) => {
        players[value.number] = new Player(value.name);
        if (value.number < count) setActive(value.number + 1)
        else if (value.number === count) onFinished && onFinished(players)
    }

    for (let i = 1; i <= count; i++) {
        let disabled = players[i] === undefined || players[i].length === 0;
        indicators.push(
            <Indicator
                active={active === i}
                disabled={disabled}
            />);
        forms.push(<PlayerForm filled={i < active} number={i} active={active === i}
                               onSubmit={(value) => onSubmit(value)}/>)
    }
    return <Container>
        <MoveFromRight>
            <FormContainer active={active}>
                {forms}
            </FormContainer>
        </MoveFromRight>
        <IndicatorsWrapper>
            <Indicators>
                {indicators}
            </Indicators>
        </IndicatorsWrapper>
    </Container>
};