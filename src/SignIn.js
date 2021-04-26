import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";
import Button from "./Button"
import Styles from "./Styles";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import React from 'react';
import Colors from "./Colors";

const StyledSignIn = styled(CenteredColumn)`
  ${Styles.pageSetup};
  ${Styles.centeredColumn};
  
  #title{
    h1{
      ${Styles.header}
      font-style: italic;
    }
  }
  
  #login {
    text-align: center;
    padding: 6px;
    background-color: ${Colors.green2};
    ${Styles.darkOutline};
  }
  
  #label{
    ${Styles.label};
  }
  
  #input{
    ${Styles.input};
  }

  #buttons{
    align: center;
    display: flex;
    padding: 12px;
    ${Styles.centeredRow};
    
    #signOut{
      background-color: ${Colors.red};
    }
    
    #or{
      padding: 8px;
      align: center;
    }
  }
` ;

const SignIn = () =>  {
    return (
        <StyledSignIn className="SignIn">
            <header id="title">
                <h1>Sign In</h1>
            </header>
            <body>
                <form>
                    <div id="login">
                        <InputLabel htmlFor="email" id="label">Email:</InputLabel><br/>
                        <Input type="text" id="input" name="email"/><br/>
                        <InputLabel htmlFor="password" id="label">Password:</InputLabel><br/>
                        <Input type="password" id="input" name="password"/><br/><br/>
                    </div>

                    <div id={"buttons"}>
                        <Button to={"/citizen-home"} label={"Submit"}/><br/><br/>
                        <label id={"or"}> -OR- </label><br/><br/>
                        <Button to={"/create-account"} label={"Create Account"}/><br/><br/>
                    </div>

                    <label>================================</label><br/><br/>
                    <Button to={"/"} label={"Back"}/>
                </form>
            </body>
        </StyledSignIn>
    );
}

export default SignIn;
