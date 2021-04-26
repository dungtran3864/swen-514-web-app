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
    align: center;
    display: inline-block;
    padding: 12px;
    ${Styles.centeredRow};
    
    #signOut{
      background-color: ${Colors.red};
    }
    
    
  }
  #or{
    margin: 8px;
    align: center;
  }
  
` ;

const SignIn = () =>  {
    return (
        <StyledSignIn>
            <header id="title">
                <h1>Sign In</h1>
            </header>
            <body>
                <div className="form" id={"formed"}>
                    <div id="login">
                        <InputLabel htmlFor="email" id="emailLabel">Email:</InputLabel>
                        <Input type="text" id="email" name="email"/>
                        <InputLabel htmlFor="password" id="passwordLabel">Password:</InputLabel>
                        <Input type="password" id="password" name="password"/><br/>
                    </div>

                    <div id={"buttons"}>
                        <Button to={"/citizen-home"} label={"Submit"}/><br/>
                        <label id={"or"}> -OR- </label>
                        <Button to={"/create-account"} label={"Create Account"}/>
                    </div>
                </div>
                <label>================================</label><br/>
                <Button to={"/"} label={"Back"}/>
            </body>
        </StyledSignIn>
    );
}

export default SignIn;
