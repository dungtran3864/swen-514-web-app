import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";
import Button from "./Button"
/* TODO: Rename everything from App --> Home ASAP */

/* TODO:
*   -- Add better spacing between the buttons for submit and create account
*       -- right now it's just a bunch of breaks
*       -- the css in general needs work imo
*   -- Do we want to enclose the form in a box of some kind?
*  */
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
                    <Input type="text" id="password" name="password"/><br/><br/>
                    <Button to={"/citizen-home"} label={"Submit"}/><br/><br/>
                    <label> -OR- </label><br/><br/>
                    <Button to={"/create-account"} label={"Create Account"}/><br/>
                </form>
            </body>
        </div>
    );
}

export default SignIn;
