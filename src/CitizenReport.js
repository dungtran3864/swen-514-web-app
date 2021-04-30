import './css/Home.css';
import Button from "./Button"
import {Input, InputLabel} from "@material-ui/core";
import {Component} from "react";
import styled from "styled-components";
import Styles from "./Styles";
import React from 'react';
import Colors from "./Colors";
import {CenteredColumn} from "./StyleBlocks";
import axios from "axios";

const StyledReport = styled(CenteredColumn)`
  padding: 0 64px;
  ${Styles.centeredColumn};
  //position: relative;
  
  Div{
    padding: 10px;
  }
  
  #submit{
    outline: 3px solid black;
  }
  
  #title{
    h1{
      ${Styles.header}
      font-style: italic;
    }
  }
  
  #form{
    ${Styles.darkOutline};
    background-color: ${Colors.green2};
  }
  
  #btn{
    background-color: ${Colors.green2};
    padding: 6px;
    margin: 6px;
    ${Styles.darkOutline};
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
    margin-top: 8px;
    margin-bottom: 20px;
    button{
      margin: 12px;
      ${Styles.darkOutline};
      background: ${Colors.green2};
    }
  }
  
  #facility {
    //outline: 3px solid pink;
  }
  
`;

class CitizenReport extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {

            //default address
            address: "123 Example Street",
            address_l2: "Apt 1A",
            zipCode: "123456",
            city: "Rochester",
            state: "NY",

            //newly input address
            newAddress: "",
            newAddress_l2: "",
            newZipCode: "",
            newCity: "",
            newState: "",
            facility: "",
            details: "",
            citizen_id:""
        }
    }

    render() {
        return (
            <StyledReport>
                <div className="CitizenReport" id ={"CitizenReport"}>
                    <header className="citizen-report-header" id={"title"}>
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
                                {this.state.newAddressEmpty && <label className="error-msg">Address field is empty</label>}
                                <InputLabel className="addressLine1-input-label">Address:</InputLabel>
                                <input id="adr1" disabled={true} type="text" className="addressLine1-input" onChange={evt => this.newAddressLine1(evt)}/><br/><br/>

                                <InputLabel className="addressLine2-input-label">Address L2 (optional):</InputLabel>
                                <input id="adr2" disabled={true} type="text" className="addressLine2-input" onChange={evt => this.newAddressLine2(evt)}/><br/><br/>

                                {this.state.newZipCodeEmpty && <label className="error-msg">Zipcode field is empty</label>}
                                <InputLabel className="zipcode-input-label">Zipcode:</InputLabel>
                                <input id="zipcode" disabled={true} type="text" className="zipcode-input" onChange={evt => this.newZipcode(evt)}/><br/><br/>

                                {this.state.newCityEmpty && <label className="error-msg">City field is empty</label>}
                                <InputLabel className="city-input-label">City:</InputLabel>
                                <input id="city" disabled={true} type="text" className="city-input" onChange={evt => this.newCity(evt)}/><br/><br/>

                                {this.state.newStateEmpty && <label className="error-msg">State field is empty</label>}
                                <InputLabel className="state-input-label" >State:</InputLabel>
                                <input id="state" disabled={true} type="text" className="state-input" onChange={evt => this.newState(evt)}/><br/><br/>

                                {this.state.facilityEmpty && <label className="error-msg">Facility not chosen</label>}
                                <label>Select Facility:</label><br/>
                                <button id={"btn"} onClick={() => this.setElectric()}> Electric </button>
                                <button id={"btn"} onClick={() => this.setRoads()}> Roads </button>
                                <button id={"btn"} onClick={() => this.setWater()}> Water </button><br/>
                                <label id="facility">Chosen Facility: N/A</label><br/>

                            </div>

                        {this.state.detailsEmpty && <label className="error-msg">Details field is empty</label>}
                        <InputLabel id={"formText"} className="state-input-label">Details:</InputLabel>
                        <Input type="text" className="details-input" onChange={evt => this.updateDetails(evt)}/><br/><br/>

                        <button id={"btn"} className="submit-button" onClick={() => this.submit(this.props)}>Submit</button><br/><br/>

                        </div>

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
        this.setState({newAddress: evt.target.value});
    }

    newAddressLine2(evt) {
        this.setState({newAddress_l2: evt.target.value});
    }

    newZipcode(evt) {
        this.setState({newZipCode: evt.target.value});
    }

    newCity(evt) {
        this.setState({newCity: evt.target.value});
    }

    newState(evt) {
        this.setState({newState: evt.target.value});
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

    submit(props){

        let error = false;

        if(this.state.newAddress.length === 0 && document.getElementById("adr1").disabled === false){
            this.setState({newAddressEmpty: true});
            error = true;
        } else this.setState({newAddressEmpty: false});

        if(this.state.newZipCode.length === 0 && document.getElementById("adr2").disabled === false){
            this.setState({newZipCodeEmpty: true});
            error = true;
        } else this.setState({newZipCodeEmpty: false});

        if(this.state.newCity.length === 0 && document.getElementById("city").disabled === false){
            this.setState({newCityEmpty: true});
            error = true;
        } else this.setState({newCityEmpty: false});

        if(this.state.newState.length === 0 && document.getElementById("state").disabled === false){
            this.setState({newStateEmpty: true});
            error = true;
        } else this.setState({newStateEmpty: false});

        if(this.state.details.length === 0){
            this.setState({detailsEmpty: true});
            error = true;
        } else this.setState({detailsEmpty: false});

        if(this.state.facility.length === 0){
            this.setState({facilityEmpty: true});
            error = true;
        } else this.setState({facilityEmpty: false});

        if(error === false){
            if(this.state.newAddress.length != 0){
                axios.post('https://itpuavz5l8.execute-api.us-east-1.amazonaws.com/dev/citizen/report', {
                    "address": this.state.newAddress,
                    "address_l2": this.state.newAddress_l2,
                    "zipCode": this.state.newZipCode,
                    "city": this.state.newCity,
                    "state": this.state.newState,
                    "facility": this.state.facility,
                    "details": this.state.details,
                    "citizen_id": 1
                }).then(function (response) {
                    console.log(response);
                    props.history.push('/citizen-home/:id');
                });
            } else {
                axios.post('https://itpuavz5l8.execute-api.us-east-1.amazonaws.com/dev/citizen/report', {
                    "address": this.state.address,
                    "address_l2": this.state.address_l2,
                    "zipCode": this.state.zipCode,
                    "city": this.state.city,
                    "state": this.state.state,
                    "facility": this.state.facility,
                    "details": this.state.details,
                    "citizen_id": 1
                }).then(function (response) {
                    console.log(response);
                    props.history.push('/citizen-home/:id');
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }

}

export default CitizenReport;