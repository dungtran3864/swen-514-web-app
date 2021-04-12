import './css/Home.css';
import SignIn from "./SignIn";
import Landing from "./Landing";
import CreateAccount from "./CreateAccount";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/create-account">
                    <CreateAccount />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
