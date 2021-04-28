import './css/Home.css';
import SignIn from "./SignIn";
import Landing from "./Landing";
import CreateAccount from "./CreateAccount";
import CitizenHome from "./CitizenHome";
import Reports from "./Reports";
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CitizenReport from "./CitizenReport";
import GovernmentReport from "./GovernmentReport";
import GovernmentHome from "./GovernmentHome";
import ManageAccount from "./ManageAccount";

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/citizen-submit-report">
                    <CitizenReport />
                </Route>
                <Route path="/citizen-home" component={CitizenHome}/>
                <Route path="/gov-submit-report">
                    <GovernmentReport />
                </Route>
                <Route path="/gov-home">
                    <GovernmentHome />
                </Route>
                <Route path="/sign-in" component={SignIn}/>
                <Route path="/create-account">
                    <CreateAccount />
                </Route>
                <Route path="/submissions">
                    <Reports />
                </Route>
                <Route path="/manage-account">
                    <ManageAccount />
                </Route>
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
