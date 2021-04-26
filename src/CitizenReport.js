import './css/Home.css';
import Button from "./Button"
import {Input, InputLabel} from "@material-ui/core";
import {Component} from "react";
import styled from "styled-components";
import Styles from "./Styles";
import React from 'react';
import Colors from "./Colors";
import {CenteredColumn} from "./StyleBlocks";

const StyledReport = styled(CenteredColumn)`
  ${Styles.pageSetup};
  
  #form{
    ${Styles.form};
  }
  
  #btn{
    ${Styles.button};
  }
  
  #btns{
    margin: 6px;
  }
  
  #other{
    label{
      margin: 6px;
      padding: 8px;
    }
  }
  
  #formText{
    padding: 12px;
    font-weight: bold;
    margin: 12px;
  }
  
  #locationForm{
    button{
      margin: 12px;
      ${Styles.darkOutline};
      background: ${Colors.green2};
    }
  }
  
`;

class CitizenReport extends Component {

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
            state: "",
            facility: "",
            details: "",
            citizen_id:""
        }
    }

    render() {
        return (
            <StyledReport>
                <div className="CitizenReport">
                    <header className="Account-Header">
                        <h1>Report Issue</h1>
                    </header>
                    <body id = "form">
                        <div id={"btns"}>
                            <button onClick={() => this.setOtherLocationDisable()} id={"btn"}>Use My Address</button><br/>
                            <button className="other-location-button" onClick={() => this.setOtherLocationEnable()} id={"btn"}>Use Other Address</button><br/>
                        </div>

                        <div id={"other"}>
                            <label>Other Location:</label><br/>

                            <div id={"locationForm"}>
                                {this.state.addressEmpty && <label className="error-msg">Address field is empty</label>}
                                <InputLabel className="addressLine1-input-label">Address:</InputLabel>
                                <input id="adr1" disabled={true} type="text" className="addressLine1-input" onChange={evt => this.newAddressLine1(evt)}/><br/><br/>

                                <InputLabel className="addressLine2-input-label">Address L2 (optional):</InputLabel>
                                <input id="adr2" disabled={true} type="text" className="addressLine2-input" onChange={evt => this.newAddressLine2(evt)}/><br/><br/>

                                {this.state.zipCodeEmpty && <label className="error-msg">Zipcode field is empty</label>}
                                <InputLabel className="zipcode-input-label">Zipcode:</InputLabel>
                                <input id="zipcode" disabled={true} type="text" className="zipcode-input" onChange={evt => this.newZipcode(evt)}/><br/><br/>

                                {this.state.cityEmpty && <label className="error-msg">City field is empty</label>}
                                <InputLabel className="city-input-label">City:</InputLabel>
                                <input id="city" disabled={true} type="text" className="city-input" onChange={evt => this.newCity(evt)}/><br/><br/>

                                {this.state.stateEmpty && <label className="error-msg">State field is empty</label>}
                                <InputLabel className="state-input-label" >State:</InputLabel>
                                <input id="state" disabled={true} type="text" className="state-input" onChange={evt => this.newState(evt)}/><br/><br/>

                                {this.state.facilityEmpty && <label className="error-msg">Facility not chosen</label>}<br/>
                                <label>Select Facility:</label><br/>
                                <button id={"btn"} onClick={() => this.setElectric()}> Electric </button>
                                <button id={"btn"} onClick={() => this.setRoads()}> Roads </button>
                                <button id={"btn"} onClick={() => this.setWater()}> Water </button><br/>
                                <label id="facility">Chosen Facility: N/A</label><br/><br/>

                            </div>

                        {this.state.detailsEmpty && <label className="error-msg">Details field is empty</label>}
                        <InputLabel id={"formText"} className="state-input-label">Details:</InputLabel>
                        <Input type="text" className="details-input" onChange={evt => this.updateDetails(evt)}/><br/><br/>

                        <button id={"btn"} className="validate-button" onClick={() => this.submit()}>Verify</button><br/><br/>

                        </div>

                    <Button label="Submit" to="/citizen-home"/>
                    </body>
                </div>
            </StyledReport>
        );
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
        this.setState({address: evt.target.value});
    }

    newAddressLine2(evt) {
        this.setState({address_l2: evt.target.value});
    }

    newZipcode(evt) {
        this.setState({zipCode: evt.target.value});
    }

    newCity(evt) {
        this.setState({city: evt.target.value});
    }

    newState(evt) {
        this.setState({state: evt.target.value});
    }

    setElectric() {
        this.setState({facility: "Electric"})
        document.getElementById("facility").innerText = "Chosen Facility: Electric"
    }

    setRoads() {
        this.setState({facility: "Roads"})
        document.getElementById("facility").innerText = "Chosen Facility: Roads"
    }

    setWater() {
        this.setState({facility: "Water"})
        document.getElementById("facility").innerText = "Chosen Facility: Water"
    }
    updateDetails(evt) {
        this.setState({details: evt.target.value});
    }

    submit(){

        if(this.state.address.length === 0 && document.getElementById("adr1").disabled === false){
            this.setState({addressLine1Empty: true});
        } else this.setState({addressLine1Empty: false});

        if(this.state.zipCode.length === 0 && document.getElementById("adr2").disabled === false){
            this.setState({zipcodeEmpty: true});
        } else this.setState({zipcodeEmpty: false});

        if(this.state.city.length === 0 && document.getElementById("city").disabled === false){
            this.setState({cityEmpty: true});
        } else this.setState({cityEmpty: false});

        if(this.state.state.length === 0 && document.getElementById("state").disabled === false){
            this.setState({stateEmpty: true});
        } else this.setState({stateEmpty: false});

        if(this.state.details.length === 0){
            this.setState({detailsEmpty: true});
        } else this.setState({detailsEmpty: false});

        if(this.state.facility.length === 0){
            this.setState({facilityEmpty: true});
        } else this.setState({facilityEmpty: false});
    }

}

export default CitizenReport;