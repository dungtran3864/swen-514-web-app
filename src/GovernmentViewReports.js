import './css/Home.css';
import Button from "./Button";
import { CenteredColumn } from "./StyleBlocks";
import styled from "styled-components";
import Styles from "./Styles";
import React, {Component} from 'react';
import Colors from "./Colors";
import {getGovernmentReports, updateReport} from "./API.js";
import Typography from "@material-ui/core/Typography";
import MatButton from '@material-ui/core/Button';


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
  }
  body{
    align-content: center;
  }
`;

const axios = require('axios').default;

class ViewReports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: []
        }
    }

    componentDidMount() {
        axios.get(getGovernmentReports).then(response => {
            this.setState({reports: response.data.reports});
        }).catch(error => {
            console.log(error);
        })
    }

    render(){
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
                        {this.state.reports.map(report => (
                            <div style={{backgroundColor: 'lightgray', marginTop: 15, borderWidth: 20, borderColor: 'blue'}}>
                                <Typography>Facility: {report.facility}</Typography>
                                <Typography>Details: {report.details}</Typography>
                                <Typography>Address: {report.address}</Typography>
                                <Typography>Address L2:{report.address_l2}</Typography>
                                <Typography>Zip code:{report.zipCode}</Typography>
                                <Typography>City: {report.city}</Typography>
                                <Typography>State: {report.state}</Typography>
                                <Typography>Status: {report.status ? "Issue Resolved" : "Issue Not Resolved"}</Typography>
                                <MatButton variant="contained" onClick={() => this.markAsResolved(report.id)}>Mark as Resolved</MatButton>
                            </div>
                        ))}
                        <Button to={"/gov-home"} label={"Back"}/>
                    </div>
                    </body>
                </div>
            </StyledReports>
        );
    }

    markAsResolved = (reportId) => {
        axios.patch(updateReport, {
            status: 1,
            report_id: reportId
        }).then(response => {
            alert(response.data.message);
        }).catch(error => {
            console.log(error);
        })
    }

}

export default ViewReports;
