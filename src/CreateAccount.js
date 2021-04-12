import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";
import Button from "./Button"

const CreateAccount = () =>  {
    return(
        <div className="CreateAccount">
                <header className="create-account-header">
                        <h1>Create Account</h1>
                </header>
                <body>
                        <form>
                            <InputLabel htmlFor="email">Email:</InputLabel>
                            <Input type="text" id="email" name="email"/><br/><br/>
                            <InputLabel htmlFor="password">Password:</InputLabel>
                            <Input type="password" id="password" name="password"/><br/><br/>
                            <InputLabel htmlFor="address">Address:</InputLabel>
                            <Input type="text" id="adrL1" name="addressLine1"/><br/><br/>
                            <InputLabel htmlFor="address">Address L2 (optional):</InputLabel>
                            <Input type="text" id="adrl2" name="addressLine2"/><br/><br/>
                            <InputLabel htmlFor="zipCode">Zip Code:</InputLabel>
                            <Input type="text" id="zipCode" name="zipCode"/><br/><br/>
                            <InputLabel htmlFor="city">City:</InputLabel>
                            <Input type="text" id="city" name="city"/><br/><br/>
                            <InputLabel htmlFor="state">State:</InputLabel>
                            <Input type="text" id="state" name="state"/><br/><br/>
                            <Button to={"/user-home"} label={"Create Account"}/>
                        </form>
                </body>
        </div>
    );
}

export  default CreateAccount;