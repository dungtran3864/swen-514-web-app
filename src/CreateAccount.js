import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";
import Button from "./Button"
import {Component} from "react";

class CreateAccount extends Component{

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            email: "",
            password: "",
            addressLine1: "",
            addressLine2: "",
            zipcode: "",
            city: "",
            State: ""
        }

    }

    render(){
        return (
            <div className="CreateAccount">
                <header className="create-account-header">
                    <h1>Create Account</h1>
                </header>
                <body>

                {this.state.emailEmpty && <label className="error-msg">Email field is empty</label>}
                <InputLabel htmlFor="email">Email:</InputLabel>
                <Input type="text" id="email" name="email" onChange={evt => this.updateEmail(evt)}/><br/><br/>

                {this.state.passwordEmpty && <label className="error-msg">Password field is empty</label>}
                <InputLabel htmlFor="password">Password:</InputLabel>
                <Input type="password" id="password" name="password" onChange={evt => this.updatePassword(evt)}/><br/><br/>

                {this.state.addressLine1Empty && <label className="error-msg">Address field is empty</label>}
                <InputLabel htmlFor="address">Address:</InputLabel>
                <Input type="text" id="adrL1" name="addressLine1" onChange={evt => this.updateAddressLine1(evt)}/><br/><br/>

                <InputLabel htmlFor="address">Address L2 (optional):</InputLabel>
                <Input type="text" id="adrl2" name="addressLine2" onChange={evt => this.updateAddressLine2(evt)}/><br/><br/>

                {this.state.zipcodeEmpty && <label className="error-msg">Zipcode field is empty</label>}
                <InputLabel htmlFor="zipCode">Zip Code:</InputLabel>
                <Input type="text" id="zipCode" name="zipCode" onChange={evt => this.updateZipcode(evt)}/><br/><br/>

                {this.state.cityEmpty && <label className="error-msg">City field is empty</label>}
                <InputLabel htmlFor="city">City:</InputLabel>
                <Input type="text" id="city" name="city" onChange={evt => this.updateCity(evt)}/><br/><br/>

                {this.state.stateEmpty && <label className="error-msg">State field is empty</label>}
                <InputLabel htmlFor="state">State:</InputLabel>
                <Input type="text" id="state" name="state" onChange={evt => this.updateState(evt)}/><br/><br/>

                <button className="validate-button" onClick={() => this.createAccount()}>Verify</button><br/><br/>
                <Button to={"/citizen-home"} label={"Create Account"}/><br/><br/>

                <label>================================</label><br/><br/>
                <Button to={"/"} label={"Back"}/>

                </body>
            </div>
        );
    }

    updateEmail(evt) {
        this.setState({email: evt.target.value});
    }

    updatePassword(evt) {
        this.setState({password: evt.target.value});
    }

    updateAddressLine1(evt) {
        this.setState({addressLine1: evt.target.value});
    }

    updateAddressLine2(evt) {
        this.setState({addressLine2: evt.target.value});
    }

    updateZipcode(evt) {
        this.setState({zipcode: evt.target.value});
    }

    updateCity(evt) {
        this.setState({city: evt.target.value});
    }

    updateState(evt) {
        this.setState({State: evt.target.value});
    }

    createAccount(){

        if(this.state.email.length === 0){
            this.setState({emailEmpty: true});
        } else this.setState({emailEmpty: false});

        if(this.state.password.length === 0){
            this.setState({passwordEmpty: true});
        } else this.setState({passwordEmpty: false});

        if(this.state.addressLine1.length === 0){
            this.setState({addressLine1Empty: true});
        } else this.setState({addressLine1Empty: false});

        if(this.state.zipcode.length === 0){
            this.setState({zipcodeEmpty: true});
        } else this.setState({zipcodeEmpty: false});

        if(this.state.city.length === 0){
            this.setState({cityEmpty: true});
        } else this.setState({cityEmpty: false});

        if(this.state.State.length === 0){
            this.setState({stateEmpty: true});
        } else this.setState({stateEmpty: false});

    }

}

export  default CreateAccount;