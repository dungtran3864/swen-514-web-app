import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";
import Button from "./Button"
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import Styles from "./Styles";
import React from 'react';
import Colors from "./Colors";
import {Component} from "react";
import axios from "axios";

const StyledAccount = styled(CenteredColumn)`
  ${Styles.pageSetup};
  ${Styles.centeredColumn};

  header{
    ${Styles.header};
  }
  
  button{
    ${Styles.darkOutline};
    background-color: ${Colors.green2};
    ${Styles.smallShadow};
  }

  hr{
    ${Styles.hr};
  }
  
`

class CreateAccount extends Component {

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
            <StyledAccount>
                <header className="CreateAccount">
                    <h1>Create Account</h1>
                </header>
                <body>
                <div className="Form">

                    <div className="Form-Component">
                        {this.state.emailEmpty && <label className="error-msg">Email field is empty</label>}
                        <InputLabel htmlFor="email">Email:</InputLabel>
                        <Input type="text" id="email" name="email" onChange={evt => this.updateEmail(evt)}/><br/><br/>
                    </div>

                    {this.state.passwordEmpty && <label className="error-msg">Password field is empty</label>}
                    <div className="Form-Component">
                        <InputLabel htmlFor="password">Password:</InputLabel>
                        <Input type="password" id="password" name="password"
                               onChange={evt => this.updatePassword(evt)}/><br/><br/>
                    </div>

                    <div className="Form-Component">
                        {this.state.addressEmpty && <label className="error-msg">Address field is empty</label>}
                        <InputLabel htmlFor="address">Address:</InputLabel>
                        <Input type="text" id="adrL1" name="addressLine1"
                               onChange={evt => this.updateAddressLine1(evt)}/><br/><br/>
                    </div>

                    <div className="Form-Component">
                        <InputLabel htmlFor="address">Address L2 (optional):</InputLabel>
                        <Input type="text" id="adrl2" name="addressLine2"
                               onChange={evt => this.updateAddressLine2(evt)}/><br/><br/>
                    </div>

                    <div className="Form-Component">
                        {this.state.zipCodeEmpty && <label className="error-msg">Zipcode field is empty</label>}
                        <InputLabel htmlFor="zipCode">Zip Code:</InputLabel>
                        <Input type="text" id="zipCode" name="zipCode"
                               onChange={evt => this.updateZipcode(evt)}/><br/><br/>
                    </div>

                    <div className="Form-Component">
                        {this.state.cityEmpty && <label className="error-msg">City field is empty</label>}
                        <InputLabel htmlFor="city">City:</InputLabel>
                        <Input type="text" id="city" name="city" onChange={evt => this.updateCity(evt)}/><br/><br/>
                    </div>

                    <div className="Form-Component">
                        {this.state.stateEmpty && <label className="error-msg">State field is empty</label>}
                        <InputLabel htmlFor="state">State:</InputLabel>
                        <Input type="text" id="state" name="state" onChange={evt => this.updateState(evt)}/><br/><br/>
                    </div>

                    <button className="validate-button" onClick={() => this.createAccount()}>Verify</button>
                    <br/><br/>
                    <Button to={"/citizen-home"} label={"Create Account"}/><br/><br/>

                </div>
                <hr/>
                <Button to={"/"} label={"Exit Site"}/>
                </body>
            </StyledAccount>
        );
    }

    updateEmail(evt) {
        this.setState({email: evt.target.value});
    }

    updatePassword(evt) {
        this.setState({password: evt.target.value});
    }

    updateAddressLine1(evt) {
        this.setState({address: evt.target.value});
    }

    updateAddressLine2(evt) {
        this.setState({address_l2: evt.target.value});
    }

    updateZipcode(evt) {
        this.setState({zipCode: evt.target.value});
    }

    updateCity(evt) {
        this.setState({city: evt.target.value});
    }

    updateState(evt) {
        this.setState({state: evt.target.value});
    }

    saveData() {

    }

    createAccount() {

        let error = false;

        if (this.state.email.length === 0) {
            this.setState({emailEmpty: true});
            error = true;
        } else this.setState({emailEmpty: false});

        if (this.state.password.length === 0) {
            this.setState({passwordEmpty: true});
            error = true;
        } else this.setState({passwordEmpty: false});

        if (this.state.address.length === 0) {
            this.setState({addressEmpty: true});
            error = true;
        } else this.setState({addressEmpty: false});

        if (this.state.zipCode.length === 0) {
            this.setState({zipCodeEmpty: true});
            error = true;
        } else this.setState({zipCodeEmpty: false});

        if (this.state.city.length === 0) {
            this.setState({cityEmpty: true});
            error = true;
        } else this.setState({cityEmpty: false});

        if (this.state.state.length === 0) {
            this.setState({stateEmpty: true});
            error = true;
        } else this.setState({stateEmpty: false});

        if (error === false) {
            axios.post('/blizzard-database.cbxhylxbhyt6.us-east-1.rds.amazonaws.com', {
                email: this.state.email,
                password: this.state.password,
                address: this.state.address,
                address_l2: this.state.address_l2,
                zipCode: this.state.zipCode,
                city: this.state.city,
                state: this.state.state
            }).then(function (response) {
                console.log(response);
            });

        }

    }
}

export default CreateAccount;