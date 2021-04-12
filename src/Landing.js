import './css/Home.css';
import Button from "./Button";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import Styles from "./Styles";
import React from 'react';


const StyledHome = styled(CenteredColumn)`
  padding: 0 64px;
  
  #header{
    background-color: #D5DDBC;
    h1{
      ${Styles.header}
      font-style: italic;
    }
  }
  
`;

const Landing = () => {
    return(
            <StyledHome>
                <div id={"header"}>
                    <h1>Winter Storm Communication Service</h1>
                    <p>
                        Welcome to the Winter Storm Communication Service
                        Sign in or create an account to access the website
                    </p>
                </div>
                <div>
                    <Button to={"/sign-in"} label="Sign In"/>
                    <label> -OR- </label>
                    <Button to={"/create-account"} label="Create An Account"/>
                </div>
            </StyledHome>


    );

}

export default Landing;
