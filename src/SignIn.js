import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";
import Button from "./Button"
/* TODO: Rename everything from App --> Home ASAP */

const SignIn = () =>  {
    return (
        <div className="SignIn">
            <header className="sign-in-header">
                <h1>Sign In</h1>
            </header>
            <body>
                <form>
                    <InputLabel htmlFor="email">Email:</InputLabel><br/>
                    <Input type="text" id="email" name="email"/><br/>
                    <InputLabel htmlFor="password">Password:</InputLabel><br/>
                    <Input type="password" id="password" name="password"/><br/><br/>
                    <Button to={"/citizen-home"} label={"Submit"}/><br/><br/>
                    <label> -OR- </label><br/><br/>
                    <Button to={"/create-account"} label={"Create Account"}/><br/><br/>

                    <label>================================</label><br/><br/>
                    <Button to={"/"} label={"Back"}/>
                </form>
            </body>
        </div>
    );
}

export default SignIn;
