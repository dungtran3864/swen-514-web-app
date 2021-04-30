import './css/Home.css';
import Button from "./Button"
import React, {Component} from "react";

class GovernmentHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="GovernmentHome">
                <head>
                    <title>WSCS - Home</title>
                </head>
                <header className="Account-Header">
                    <h1>
                        <label style={{marginLeft: "20px"}}>{"Welcome Government"}</label>
                    </h1>
                </header>
                <body>
                    <form>
                        <Button to="/manage-account" label="Manage Account"/><br/><br/>
                        <Button to="/gov-submit-report" label="Submit Issue Form"/><br/><br/>
                        <Button to="/submissions" label="My Submissions"/><br/><br/>
                        <Button to="/" label="Sign Out"/><br/><br/>
                    </form>
                </body>
            </div>
        );
    }
}

export default GovernmentHome;
