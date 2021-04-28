import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";
import Button from "./Button"
import Styles from "./Styles";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import React, {Component} from 'react';
import Colors from "./Colors";

const StyledSignIn = styled(CenteredColumn)`
  ${Styles.pageSetup};
  ${Styles.centeredColumn};

  header{
    ${Styles.header};
  }

  button{
    ${Styles.darkOutline};
    background-color: ${Colors.green2};
    ${Styles.smallShadow};
    cursor: pointer;
  }

  hr{
    ${Styles.hr};
  }
` ;

const axios = require('axios').default;

class SignIn extends Component{

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <StyledSignIn>
                <head>
                    <title>WSCS - Sign In</title>
                </head>
                <header className="Account-Header">
                    <h1>Sign In</h1>
                </header>
                <body>
                <div className="Form">
                    <div id="login">
                        {this.state.invalidEmail && <label className="error-msg">Email not found.</label>}
                        <InputLabel htmlFor="email">Email:</InputLabel>
                        <Input type="text" id="email" name="email" onChange={evt => this.updateEmail(evt)} /> {/* todo : update the states on input */}

                        {this.state.invalidPassword && <label className="error-msg">Password is incorrect.</label>}
                        <InputLabel htmlFor="password">Password:</InputLabel>
                        <Input type="password" id="password" name="password" onChange={evt => this.updatePassword(evt)}/><br/>
                    </div>

                    <div id="buttons">
                        <button id="validate-button" onClick={() => this.axiosPost(this.props)}>Sign In</button><br/>
                        <label id="or"> -OR- </label><br/>
                        <Button to="/create-account" label="Create Account"/>
                    </div>
                </div>
                <hr />
                <Button to={"/"} label={"Exit Site"}/>
                </body>
            </StyledSignIn>
        );
    }

    updateEmail(evt) {
        this.setState({email: evt.target.value});
    }

    updatePassword(evt) {
        this.setState({password: evt.target.value});
    }

    check(){
        document.getElementById("validate-button").innerText = "Button";
    }

    axiosPost(props){
        axios.post('https://itpuavz5l8.execute-api.us-east-1.amazonaws.com/dev/login', {
            "email": this.state.email,
            "password": this.state.password
        }).then(function (response){
            console.log(response);
            if(response.data.status === 401){
                //email does not exist: set invalidEmail to true
                this.setState({invalidEmail: true});
                return false;
            }else if(response.data.status === 403){
                //password is incorrect: set invalidPassword to true
                this.setState({invalidPassword: true});
                return false;
            }else{
                if (response.data.usertype === "Citizen") {
                    props.history.push('/citizen-home');
                }
                //everything is awesome
                //todo: testing the method: true should be changed to false OR removed
            }
        }).catch(function(error){
            console.log(error);
        });
    }

}

export default SignIn;
