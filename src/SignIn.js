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
  
  #email{
    ${Styles.label};
  }
  
  #password{
    ${Styles.input};
  }
  
  #emailLabel{
    ${Styles.label};
  }

  #passwordLabel{
    ${Styles.input};
  }

  #buttons{
    padding: 12px;
    ${Styles.centeredRow};
  }
  
  #or{
    margin: 8px;
    align: center;
  }
  
` ;

const axios = require('axios').default;

class SignIn extends Component{

    axiosPost(email, password){
        axios.post('https://itpuavz5l8.execute-api.us-east-1.amazonaws.com/dev/login', {
            "email": "email",
            "password": "password"
        }).then(function (response){
            console.log(response);
        }).catch(function(error){
            console.log(error);
        });
    }

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            email: "",
            password: "",
        }
    }

    render() {
        return (
            <StyledSignIn>
                <header className="Account-Header">
                    <h1>Sign In</h1>
                </header>
                <body>
                <div className="Form">
                    <div id="login">
                        <InputLabel htmlFor="email" id="emailLabel">Email:</InputLabel>
                        <Input type="text" id="email" name="email"/>
                        <InputLabel htmlFor="password" id="passwordLabel">Password:</InputLabel>
                        <Input type="password" id="password" name="password"/><br/>
                        <button id="validate">Validate</button>
                    </div>

                    <div id="buttons">
                        <Button to="/citizen-home" label="Submit"/><br/>
                        <label id="or"> -OR- </label>
                        <Button to="/create-account" label="Create Account"/>
                    </div>
                </div>
                <hr />
                <Button to={"/"} label={"Back"}/>
                </body>
            </StyledSignIn>
        );
    }
}


export default SignIn;
