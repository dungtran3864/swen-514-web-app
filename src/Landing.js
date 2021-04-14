import './css/Home.css';
import Button from "./Button";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import Styles from "./Styles";
import React from 'react';
import Colors from "./Colors";


const StyledHome = styled(CenteredColumn)`
  padding: 0 64px;
  background-color: ${Colors.background};
  
  #header{
    h1{
      ${Styles.header}
      font-style: italic;
    }
  }
  #buttons{
    align: center;
    padding: 0 12px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
  }
  
  #btn{
    padding-left: 12px;
    padding-right: 12px;
  }
  
`;

const Landing = () => {
    return(
            <StyledHome>
                <head>
                    <title>
                        WSCS
                    </title>
                </head>
                <body>
                    <div id={"header"}>
                        <h1>Winter Storm Communication Service</h1>
                        <p>
                            Welcome to the Winter Storm Communication Service
                            Sign in or create an account to access the website
                        </p>
                    </div>
                    <div id={"buttons"}>
                        <Button to={"/sign-in"} label="Sign In"/>
                        <br/>
                        <br/>
                        <Button to={"/create-account"} label="Create An Account"/>
                    </div>
                </body>
            </StyledHome>
    );
}

export default Landing;
