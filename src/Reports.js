import './css/Home.css';
import Button from "./Button";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import Styles from "./Styles";
import React from 'react';
import Colors from "./Colors";


const StyledReports = styled(CenteredColumn)`
  ${Styles.pageSetup};
  header{
    h1{
      ${Styles.header}
      font-style: italic;
    }
  }
  #reports{
    align-content: center;
    width: 900px;
    ${Styles.darkOutline};
    background-color: ${Colors.green2};
  }
  p{
    align-content: center;
    color: red;
  }
  label{
    align-content: center;
  }
`;

const Reports = () => {
    return(
        <StyledReports>
            <div className={"Reports"}>
                <header>
                    <h1>My Reports</h1>
                </header>
                <body>
                    <div id={"reports"}>
                        <p>INSERT REPORTS</p>
                    </div>
                    <div>
                        <label>==============================================================================================</label><br/><br/>
                        <Button to={"/"} label={"Back"}/>
                    </div>
                </body>
            </div>
        </StyledReports>
    );
}

export default Reports;
