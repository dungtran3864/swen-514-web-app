import './css/Home.css';
import SignIn from "./SignIn";
import Landing from "./Landing";
import CreateAccount from "./CreateAccount";
import CitizenHome from "./CitizenHome";
import ViewReports from "./ViewReports";
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
                <Route path="/citizen-submit-report/:id" component={CitizenReport}/>
                    <Route path="/citizen-home/:id" component={CitizenHome} />
                    <Route path="/gov-submit-report" component={GovernmentReport}/>
                    <Route path="/gov-home" component={GovernmentHome}/>
                    <Route path="/sign-in" component={SignIn} />
                    <Route path="/create-account" component={CreateAccount}/>
                    <Route path="/reports/:id" component={ViewReports }/>
                    <Route path="/manage-account" component={ManageAccount} />
                    <Route path="/" component={Landing}/>
            </Switch>
        </Router>
    );
}

export default App;
