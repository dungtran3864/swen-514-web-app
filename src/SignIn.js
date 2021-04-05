import './App.css';
import {Button, Input, InputLabel} from "@material-ui/core";
/* TODO: Rename everything from App --> Home ASAP */

/* TODO:
*   -- Add better spacing between the buttons for submit and create account
*       -- right now it's just a bunch of breaks
*       -- the css in general needs work imo
*   -- Do we want to enclose the form in a box of some kind?
*  */
function SignIn() {
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
                    <Input type="submit" value="Submit"/><br/><br/>
                    <Input type="submit" value="Create an account"/><br/>
                </form>
            </body>
        </div>
    );
}

export default SignIn;
