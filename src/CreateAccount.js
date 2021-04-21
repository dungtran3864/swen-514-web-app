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
            address: "",
            address_l2: "",
            zipCode: "",
            city: "",
            state: ""
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

                {this.state.addressEmpty && <label className="error-msg">Address field is empty</label>}
                <InputLabel htmlFor="address">Address:</InputLabel>
                <Input type="text" id="adrL1" name="addressLine1" onChange={evt => this.updateAddressLine1(evt)}/><br/><br/>

                <InputLabel htmlFor="address">Address L2 (optional):</InputLabel>
                <Input type="text" id="adrl2" name="addressLine2" onChange={evt => this.updateAddressLine2(evt)}/><br/><br/>

                {this.state.zipCodeEmpty && <label className="error-msg">Zipcode field is empty</label>}
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
        this.setState({address: evt.target.value});
    }

    updateAddressLine2(evt) {
        this.setState({address_l2: evt.target.value});
    }

    updateZipcode(evt) {
        this.setState({zipCode: evt.target.value});
    }

    updateCity(evt) {
        this.setState({city: evt.target.value});
    }

    updateState(evt) {
        this.setState({state: evt.target.value});
    }

    createAccount(){

        if(this.state.email.length === 0){
            this.setState({emailEmpty: true});
        } else this.setState({emailEmpty: false});

        if(this.state.password.length === 0){
            this.setState({passwordEmpty: true});
        } else this.setState({passwordEmpty: false});

        if(this.state.address.length === 0){
            this.setState({addressEmpty: true});
        } else this.setState({addressEmpty: false});

        if(this.state.zipCode.length === 0){
            this.setState({zipCodeEmpty: true});
        } else this.setState({zipCodeEmpty: false});

        if(this.state.city.length === 0){
            this.setState({cityEmpty: true});
        } else this.setState({cityEmpty: false});

        if(this.state.state.length === 0){
            this.setState({stateEmpty: true});
        } else this.setState({stateEmpty: false});

    }

}

export  default CreateAccount;