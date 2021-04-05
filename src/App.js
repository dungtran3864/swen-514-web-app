import './App.css';
import {Button} from "@material-ui/core";
/* TODO: Rename everything from App --> Home ASAP */

function Home() {
  return (
    <div className="Home">
      <header className="home-header">
        <h1>Winter Storm Communication Service</h1>
        <p>
          Welcome to the Winter Storm Communication Service
          Sign in or create an account to access the website
        </p>
      </header>
        <body>
            <Button>Sign in</Button>
            <Button>Create an account</Button>
        </body>
    </div>
  );
}

export default Home;
