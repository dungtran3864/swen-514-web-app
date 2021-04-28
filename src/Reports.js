import './css/Home.css';
import Button from "./Button";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import Styles from "./Styles";
import React, {Component} from 'react';
import Colors from "./Colors";


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

class Reports extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            newAddress: "",
            newAddress_l2: "",
            newZipCode: "",
            newCity: "",
            newState: "",
            facility: "",
            details: "",
            citizen_id:""
        }
    }

    render(){
        return (
            <StyledReports>
                <div className="Report-page">
                    <header>
                        <h1>My Reports</h1>
                    </header>
                    <body className="Reports-display">
                        <div className="Reports-div" id="reportsDiv">
                            {this.displayReports(this.props)}
                            <div id="report-0" className="Report-Component">
                                <div className="Form-Component">
                                    <label>Report ID:   </label>
                                    <label id="report0-id">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>ZipCode: </label>
                                    <label id="report0-zip">######</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Facility:    </label>
                                    <label id="report0-facility">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Details: </label>
                                    <label id="report0-details">#</label>
                                </div>
                            </div>
                            <div id="report-1" className="Report-Component">
                                <div className="Form-Component">
                                    <label>Report ID:   </label>
                                    <label id="report1-id">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>ZipCode: </label>
                                    <label id="report1-zip">######</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Facility:    </label>
                                    <label id="report1-facility">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Details: </label>
                                    <label id="report1-details">#</label>
                                </div>
                            </div>
                            <div id="report-2" className="Report-Component">
                                <div className="Form-Component">
                                    <label>Report ID:   </label>
                                    <label id="report2-id">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>ZipCode: </label>
                                    <label id="report2-zip">######</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Facility:    </label>
                                    <label id="report2-facility">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Details: </label>
                                    <label id="report2-details">#</label>
                                </div>
                            </div>
                            <div id="report-3" className="Report-Component">
                                <div className="Form-Component">
                                    <label>Report ID:   </label>
                                    <label id="report3-id">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>ZipCode: </label>
                                    <label id="report3-zip">######</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Facility:    </label>
                                    <label id="report3-facility">#</label>
                                </div>
                                <div className="Form-Component">
                                    <label>Details: </label>
                                    <label id="report3-details">#</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button to={"/"} label={"Exit Site"}/>
                        </div>
                    </body>
                </div>
            </StyledReports>
        );
    }

    displayReports(props){
        axios.get("https://itpuavz5l8.execute-api.us-east-1.amazonaws.com/dev/citizen/reports?citizen_id=1", {
            "citizen_id" : this.state.citizen_id
        }).then(function (response) {
            console.log(response);
            document.getElementById('report0-id').innerHTML = response.data.reports[0].id;
            document.getElementById('report0-zip').innerHTML = response.data.reports[0].zipCode;
            document.getElementById('report0-facility').innerHTML = response.data.reports[0].facility;
            document.getElementById('report0-details').innerHTML = response.data.reports[0].details;

            document.getElementById('report1-id').innerHTML = response.data.reports[1].id;
            document.getElementById('report1-zip').innerHTML = response.data.reports[1].zipCode;
            document.getElementById('report1-facility').innerHTML = response.data.reports[1].facility;
            document.getElementById('report1-details').innerHTML = response.data.reports[1].details;

            document.getElementById('report2-id').innerHTML = response.data.reports[2].id;
            document.getElementById('report2-zip').innerHTML = response.data.reports[2].zipCode;
            document.getElementById('report2-facility').innerHTML = response.data.reports[2].facility;
            document.getElementById('report2-details').innerHTML = response.data.reports[2].details;

            document.getElementById('report3-id').innerHTML = response.data.reports[3].id;
            document.getElementById('report3-zip').innerHTML = response.data.reports[3].zipCode;
            document.getElementById('report3-facility').innerHTML = response.data.reports[3].facility;
            document.getElementById('report3-details').innerHTML = response.data.reports[3].details;

        }).catch(function(error){
            console.log(error);
        });
    }

}

export default Reports;
