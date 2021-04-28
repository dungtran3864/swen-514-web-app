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

                        <button id="validate-button" onClick={() => this.axiosPost()}>Validate</button><br />
                    </div>

                    <div id="buttons">
                        <Button to="/citizen-home" label="Submit"/><br/>
                        <label id="or"> -OR- </label>
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

    validateStates(){
        let send = this.axiosPost();
        if(send){
            if(this.state.usertype === "Citizen"){
                //todo send to citizen home
                this.props.history.push("/citizen-home");
            }else if(this.state.usertype === "Government"){
                //todo send to gov home
                this.props.history.push("/gov-home");
            }
        }
    }

    axiosPost(){
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
                //password is incorrect: set invalidEmail to true
                this.setState({invalidPassword: true});
                return false;
            }else{
                // console.log(response);
                // if(response.data.usertype === "Citizen"){
                //     this.props.history.push("/citizen-home");
                // }
                console.log(this.props);
                this.props.history.push("/citizen-home");
            }
        }).catch(function(error){
            console.log(error);
        });
    }

}

export default SignIn;
