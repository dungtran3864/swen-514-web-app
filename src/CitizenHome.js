import './css/Home.css';
import Button from "./Button"

const CitizenHome = () => {

    return (
        <div className="CitizenHome">
            <header className="Account-Header">
                <h1>Welcome User</h1>
            </header>
            <body>
                <form>
                    <Button to="/manage-account" label="Manage Account"/><br/><br/>
                    <Button to="/submit-report" label="Submit Issue Form"/><br/><br/>
                    <Button to="/submissions" label="Submissions"/><br/><br/>
                    <Button to="/reports-near-me" label="Reports Near Me"/><br/><br/>
                    <Button to="/" label="Sign Out"/><br/><br/>
                </form>
            </body>
        </div>
    );
}

export default CitizenHome;
