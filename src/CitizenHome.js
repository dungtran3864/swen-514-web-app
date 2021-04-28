import './css/Home.css';
import Button from "./Button"
import React, {Component} from "react";

class CitizenHome extends Component{

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        return (
            <div className="CitizenHome">
                <head>
                    <title>WSCS - Home</title>
                </head>
                <header className="Account-Header">
                    <h1>
                        <label style={{marginLeft: "20px"}}>{"Welcome " + this.props.email + "!"}</label>
                    </h1>
                </header>
                <body>
                <form>
                    <Button to="/manage-account" label="Manage Account"/><br/><br/>
                    <Button to="/citizen-submit-report" label="Submit Issue Form"/><br/><br/>
                    <Button to="/submissions" label="Submissions"/><br/><br/>
                    <Button to="/reports-near-me" label="Reports Near Me"/><br/><br/>
                    <Button to="/" label="Sign Out"/><br/><br/>
                </form>
                </body>
            </div>
        );
    }
}

export default CitizenHome;
