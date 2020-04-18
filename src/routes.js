import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SignIn from "./components/signin/signin";
import SignUp from "./components/signup/signup";
import EmailVerification from "./components/signup/emailVerficationPage"
import FirstPassword from "./components/firstpassword/firstPassword"
import TestHome from "./components/dashboard/home"

export default function Routes() {
    return (
        <Router>
            <div>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">SignIn</Link>
                        </li>
                        <li>
                            <Link to="/signup">SignUp</Link>
                        </li>
                    </ul>
                </nav> */}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/home">
                        <TestHome/>
                    </Route>
                    <Route path="/firstpassword">
                        <FirstPassword/>
                    </Route>
                    <Route path="/emailverifiction">
                        <EmailVerification/>
                    </Route>
                    <Route path="/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/">
                        < SignIn/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
