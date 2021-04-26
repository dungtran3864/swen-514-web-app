import './css/Home.css';
import Button from "./Button"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {Input, InputLabel} from "@material-ui/core";

const GovernmentReport = () => {

    return (
        <div className="GovernmentReport">
            <header className="government-report-header">
                <h1>Manage Reports</h1>
            </header>
            <body>
            <form>
                <Button label="Use My Address"/><br/><br/>
                <Button label="Use Other Address"/><br/><br/>

                <form>
                    <InputLabel className="addressLine1-input-label">Address:</InputLabel>
                    <Input id="adr1" disabled={true} type="text" className="addressLine1-input"></Input><br/><br/>

                    <InputLabel className="addressLine2-input-label">Address L2 (optional):</InputLabel>
                    <Input id="adr2" disabled={true} type="text" className="addressLine2-input"></Input><br/><br/>

                    <InputLabel className="zipcode-input-label">Zipcode:</InputLabel>
                    <Input id="zipcode" disabled={true} type="text" className="zipcode-input"></Input><br/><br/>

                    <InputLabel className="city-input-label">City:</InputLabel>
                    <Input id="city" disabled={true} type="text" className="city-input"></Input><br/><br/>

                    <InputLabel className="state-input-label">State:</InputLabel>
                    <Input id="state" disabled={true} type="text" className="state-input"></Input><br/><br/>
                </form>

                <InputLabel className={"facility-label"}>Select Facility:</InputLabel>
                <Dropdown
                    placeholder="-/-"
                    className="facility-dropdown"
                    options={['Electric', 'Roads', 'Water']}
                    value="Electric"
                    onChange={(value) => console.log('change!', value)}
                    onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
                    onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
                    onOpen={() => console.log('open!')}
                />

                <InputLabel className="state-input-label">Details:</InputLabel>
                <Input type="text" className="details-input"></Input><br/><br/>

                <Button label="Submit" to="/citizen-home"/>

            </form>
            </body>
        </div>
    );
}

export default GovernmentReport;
