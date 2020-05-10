import React from "react";
import styled from 'styled-components';
import {Header} from "./Header";
import Footer from "./Footer";
import {HashRouter as Router} from "react-router-dom";
import {FadeIn} from "./FadeIn";

const Container = styled.div`
    display: flex; 
    min-height: 100vh; 
    position: relative; 
    flex-direction: column;
`

const Main = styled.main`
   position: relative; 
   flex-grow: 1; 
`

export const Layout = ({children, collapsed}) => {
    const header = <Header collapsed={collapsed ?? true} onBack={() => {
        window.history.back();
    }
    }/>
    return <Router basename="/">
        <Container>
                <FadeIn>
                    {header}
                </FadeIn>
            <Main>
                {children}
            </Main>
            <Footer/>
        </Container>
    </Router>
}

export default Layout