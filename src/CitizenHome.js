import './css/Home.css';
import Button from "./Button"
import React, {Component} from "react";

class CitizenHome extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const citizenId = this.props.match.params.id;
        return (
            <div className="CitizenHome">
                <head>
                    <title>WSCS - Home</title>
                </head>
                <header className="Account-Header">
                    <h1>
                        <label style={{marginLeft: "20px"}}>{"Welcome Citizen"}</label>
                    </h1>
                </header>
                <body>
                <form>
                    <Button to={"/citizen-submit-report/" + citizenId}  label="Submit Issue Form"/><br/><br/>
                    <Button to={"/reports/" + citizenId} label="Submissions"/><br/><br/>
                    <Button to="/" label="Sign Out"/><br/><br/>
                </form>
                </body>
            </div>
        );
    }
}

export default CitizenHome;
