import './css/Home.css';
import Button from "./Button"

const GovernmentHome = () => {

    return (
        <div className="GovernmentHome">
            <header className="Account-Header">
                <h1>Welcome User</h1>
            </header>
            <body>
            <form>
                <Button to="/gov-manage-account" label="Manage Account"/><br/><br/>
                <Button to="/gov-submit-report" label="Submit Issue Form"/><br/><br/>
                <Button to="/gov-my-submissions" label="My Submissions"/><br/><br/>
                <Button to="/gov-reports-near-me" label="Reports Near Me"/><br/><br/>
                <Button to="/" label="Sign Out"/><br/><br/>
            </form>
            </body>
        </div>
    );
}

export default GovernmentHome;
