import React, {Component, useEffect, useState} from "react";
import axios from 'axios'
import {API, COLORS, FONT_SIZE} from "../constant/Constants";
import styled from 'styled-components'
import {Header} from "./Header";
import {Subheading} from "./Heading";

const Container = styled.div`
    text-align:center; 
`

const PersonalInfo = styled.div`
    justify-content: center;
    align-items: center;
   
    & > img {
        margin-top: -10px; 
        width: 250px;
        height: 250px;
   }
   
   & > * {
    color: ${COLORS.WHITE};
    font-size: ${FONT_SIZE.LARGE};
    margin: 15px;
    
    & > a {
        color: ${COLORS.DARK_WASSERMANN}
    }
   }
`

export class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            user: null
        }
    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {
        return nextState !== this.state
    }

    componentDidMount(): void {
        axios.get(API.GITHUB_PATH).then((response) => {
            console.log(response.data)
            this.setState({user: response.data})
        }).catch((err) => console.error(err))
    }

    render() {

        return <Container>
            <Header collapsed onBack={() => {window.history.back();}}/>
            <main>
                <section>
                    {this.state.user && <Subheading>About</Subheading>}
                    {this.state.user && <PersonalInfo>
                        <img src={this.state.user.avatar_url}/>
                        <div>{this.state.user.name}</div>
                        <div><a href={this.state.user.html_url}>@{this.state.user.login}</a></div>

                    </PersonalInfo>}
                </section>
            </main>
        </Container>
    }
}

export default About