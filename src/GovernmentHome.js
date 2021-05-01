import './css/Home.css';
import Button from "./Button"
import React, {Component} from "react";

class GovernmentHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const citizenId = this.props.match.params.id;
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
                        <Button to={"/gov-submit-report/" + citizenId}  label="Submit Report"/><br/><br/>
                        <Button to={"/reports/" + citizenId} label="My Reports"/><br/><br/>
                        <Button to="/" label="Sign Out"/><br/><br/>
                    </form>
                </body>
            </div>
        );
    }
}

export default GovernmentHome;
