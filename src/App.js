import './css/Home.css';
import SignIn from "./SignIn";
import {Button, styled, Input} from "@material-ui/core";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const StyledHome = styled`
  background-color: black;
  font-size: 32px;
  color: white;
`;

const App = () => {
    return(
        <Router>
            <div>
                <h1>Winter Storm Communication Service</h1>
                <p>
                    Welcome to the Winter Storm Communication Service
                    Sign in or create an account to access the website
                </p>
            </div>
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
