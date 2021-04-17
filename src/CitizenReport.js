import React, { Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { Button, Input, InputLabel } from '@material-ui/core';

class CitizenReportPage extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            newAddressLine1: "",
            newAddressLine2: "",
            newZipcode: "",
            newCity: "",
            newState: "",
            facility: "",
            details: ""
        }

        this.goToPage = this.goToPage.bind(this);

    }

    render() {
        return (

            <div className={"CitizenReport"}>

                <header className={"page-label"}>Issue Report Form</header>

                <label>Location:</label>
                <Button onClick={() => this.setOtherLocationDisable()}>Use My Address</Button>
                <Button className="other-location-button" onClick={() => this.setOtherLocationEnable()}>Use Other Address</Button>
                <label>Other Location:</label>

                {this.state.addressLine1Empty && <label className="error-msg">Address field is empty</label>}
                <InputLabel className="addressLine1-input-label">Address:</InputLabel>
                <Input id="adr1" disabled={true} type="text" className="addressLine1-input" onChange={evt => this.newAddressLine1(evt)}></Input>

                <InputLabel className="addressLine2-input-label">Address L2 (optional):</InputLabel>
                <Input id="adr2" disabled={true} type="text" className="addressLine2-input" onChange={evt => this.newAddressLine2(evt)}></Input>

                {this.state.zipcodeEmpty && <label className="error-msg">Zipcode field is empty</label>}
                <InputLabel className="zipcode-input-label">Zipcode:</InputLabel>
                <Input id="zipcode" disabled={true} type="text" className="zipcode-input" onChange={evt => this.newZipcode(evt)}></Input>

                {this.state.cityEmpty && <label className="error-msg">City field is empty</label>}
                <InputLabel className="city-input-label">City:</InputLabel>
                <Input id="city" disabled={true} type="text" className="city-input" onChange={evt => this.newCity(evt)}></Input>

                {this.state.stateEmpty && <label className="error-msg">State field is empty</label>}
                <InputLabel className="state-input-label">State:</InputLabel>
                <Input id="state" disabled={true} type="text" className="state-input" onChange={evt => this.newState(evt)}></Input>

                <label className={"facility-label"}>Select Facility:</label>
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

                {this.state.detailsEmpty && <label className="error-msg">Details field is empty</label>}
                <InputLabel className="state-input-label">Details:</InputLabel>
                <Input type="text" className="details-input" onChange={evt => this.updateDetails(evt)}></Input>

                <Button onClick={evt => this.submit(evt)}>Submit</Button>

            </div>
        );

    }

    goToPage(pageName){
        this.props.navCallback(pageName);
    }

    setOtherLocationDisable(){
        if(document.getElementById("adr1").disabled === false){
            document.getElementById("adr1").disabled = true;
        }

        if(document.getElementById("adr2").disabled === false){
            document.getElementById("adr2").disabled = true
        }

        if(document.getElementById("zipcode").disabled === false){
            document.getElementById("zipcode").disabled = true
        }

        if(document.getElementById("city").disabled === false){
            document.getElementById("city").disabled = true;
        }

        if(document.getElementById("state").disabled === false){
            document.getElementById("state").disabled = true;
        }

    }

    setOtherLocationEnable(){

        if(document.getElementById("adr1").disabled === true){
            document.getElementById("adr1").disabled = false;
        }

        if(document.getElementById("adr2").disabled === true){
            document.getElementById("adr2").disabled = false;
        }

        if(document.getElementById("zipcode").disabled === true){
            document.getElementById("zipcode").disabled = false;
        }

        if(document.getElementById("city").disabled === true){
            document.getElementById("city").disabled = false;
        }

        if(document.getElementById("state").disabled === true){
            document.getElementById("state").disabled = false;
        }
    }

    newAddressLine1(evt) {
        this.setState({newAddressLine1: evt.target.value});
    }

    newAddressLine2(evt) {
        this.setState({newAddressLine2: evt.target.value});
    }

    newZipcode(evt) {
        this.setState({newZipcode: evt.target.value});
    }

    newCity(evt) {
        this.setState({newCity: evt.target.value});
    }

    newState(evt) {
        this.setState({newState: evt.target.value});
    }

    updateDetails(evt) {
        this.setState({details: evt.target.value});
    }

    onSelect(evt) {
        this.setState({facility: evt.target.value});
    }

    submit(){
        let errorFound = false;

        if(this.state.addressLine1.length === 0 && document.getElementById("adr1").disabled === false){
            this.setState({addressLine1Empty: true});
            errorFound = true;
        } else this.setState({addressLine1Empty: false});

        if(this.state.zipcode.length === 0 && document.getElementById("adr2").disabled === false){
            this.setState({zipcodeEmpty: true});
            errorFound = true;
        } else this.setState({zipcodeEmpty: false});

        if(this.state.city.length === 0 && document.getElementById("city").disabled === false){
            this.setState({cityEmpty: true});
            errorFound = true;
        } else this.setState({cityEmpty: false});

        if(this.state.State.length === 0 && document.getElementById("state").disabled === false){
            this.setState({stateEmpty: true});
            errorFound = true;
        } else this.setState({stateEmpty: false});

        if(this.state.details.length === 0){
            this.setState({detailsEmpty: true});
            errorFound = true;
        } else this.setState({detailsEmpty: false});

        if(!errorFound){
            this.goToPage("CitizenHomePage");
        }

    }

}

export default CitizenReportPage;