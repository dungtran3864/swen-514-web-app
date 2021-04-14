import './css/Home.css';
import {Input, InputLabel} from "@material-ui/core";

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
                    <Input type="submit" value="Submit"/><br/><br/>
                    <Input type="submit" value="Create an account"/><br/>
                </form>
            </body>
        </div>
    );
}

export default SignIn;
