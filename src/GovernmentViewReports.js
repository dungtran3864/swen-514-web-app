import './css/Home.css';
import Button from "./Button";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import Styles from "./Styles";
import React, {Component} from 'react';
import Colors from "./Colors";
import {getCitizenReports} from "./API.js";


const StyledReports = styled(CenteredColumn)`
  ${Styles.pageSetup};
  ${Styles.centeredColumn};
  text-align: center;
  
  header{
    h1{
      ${Styles.header}
      font-style: italic;
    }
  }
  #reports{
    alignment: center;
    width: 900px;
    ${Styles.darkOutline};
    background-color: ${Colors.green2};
  }
  p{
    align-content: center;
    color: red;
  }
  body{
    align-content: center;
  }
`;

const axios = require('axios').default;

class ViewReports extends Component {
    reports;

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render(){
        const citizenId = this.props.match.params.id;
        return (
            <StyledReports>
                <div className="Report-page">
                    <head>
                        <title>My Reports</title>
                    </head>
                    <header>
                        <h1>My Reports</h1>
                    </header>
                    <body>
                    <div className="Reports-display" id="reportsDiv">
                        {this.displayReportsRENAME(this)}
                        <Button to={"/gov-home/" + citizenId} label={"Back"}/>
                    </div>
                    </body>
                </div>
            </StyledReports>
        );
    }

    displayReport(id, facility, details, resolved) {

        /*Step 1: Create a Div node (for every report in the user's zipcode)*/
        const divNode = document.createElement("DIV");
        divNode.className = "Report-Component";

        /*Step 2: Create Text nodes*/
        // REPORT ID
        const reportID = document.createElement("LABEL");
        reportID.innerHTML = "Report ID: " + id;
        reportID.className = "Report-info";

        //REPORT FACILITY
        const reportFacility = document.createElement("LABEL");
        reportFacility.innerHTML = "Facility: " + facility;
        reportFacility.className = "Report-info";

        //REPORT DETAILS
        const reportDetails = document.createElement("LABEL");
        reportDetails.innerHTML = "Details: " + details;
        reportDetails.className = "Report-info";

        //REPORT RESOLVED
        const reportResolved = document.createElement("LABEL");
        reportResolved.innerHTML = "Report is Resolved";
        reportResolved.className = "Report-info";
        const reportNotResolved = document.createElement("LABEL");
        reportNotResolved.innerHTML = "Report is not Resolved";
        reportNotResolved.className = "Report-info";

        /*Step 3: Append the Text node to the Div node*/
        divNode.appendChild(reportID);
        divNode.appendChild(reportFacility);
        divNode.appendChild(reportDetails);
        if(resolved === 1){
            divNode.appendChild(reportResolved);
        }else{
            divNode.appendChild(reportNotResolved);
        }

        /*Step 4: Append the Text node to the Div*/
        document.getElementById("reportsDiv").appendChild(divNode);
    }

    displayReportsRENAME(that){
        const citizenId = this.props.match.params.id;
        axios.get(getCitizenReports + parseInt(citizenId))
            .then(function (response) {
                console.log(response);

                console.log(response.data.reports); //array of reports
                response.data.reports.forEach(report => {that.displayReport(report.id, report.facility, report.details, report.status)});

            }).catch(function(error){
            console.log(error);
        });
    }

}

export default ViewReports;
