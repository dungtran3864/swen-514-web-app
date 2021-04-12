import './css/Home.css';
import SignIn from "./SignIn";
import {Button, styled, Input} from "@material-ui/core";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const StyledHome = styled(CenteredColumn)`
  background-color: #D5DDBC;
  font-size: 32px;
  color: black;
`;



const App = () => {
    return(
        <Router>
            <StyledHome>
                <div>
                    <h1>Winter Storm Communication Service</h1>
                    <p>
                        Welcome to the Winter Storm Communication Service
                        Sign in or create an account to access the website
                    </p>
                </div>
            </StyledHome>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/sign-in"}>Sign In</Link>
                        </li>
                        <li>
                            <Link to={"/create-account"}>Create An Account</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <Button onclick={SignIn()} id={"sign-in"}>Sign in</Button>
                <Input type={"submit"} onClick={SignIn()}>Sign In</Input>
                <Button>Create an account</Button>
            </div>
        </Router>
    );

}

export default App;
