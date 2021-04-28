import './css/Home.css';
import Button from "./Button"
import React, {Component} from "react";

class GovernmentHome extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            email: "",
            password: "",
            address: "",
            address_l2: "",
            zipCode: "",
            city: "",
            state: ""
        }
    }

    render() {
        return (
            <div className="GovernmentHome">
                <head>
                    <title>WSCS - Home</title>
                </head>
                <header className="Account-Header">
                    <h1>Welcome {this.state.email}</h1>
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
