import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, LandingPage } from "./pages";
import { TodoForm } from "./components/todo";
import {Navbar, FooterMenu} from "./components/layout";

function App() {
    return (
        <Router>
            {/* <div className="has-navbar-fixed-top"> */}
            {/* <LandingPage /> */}
            <Navbar />
            <Route component={Home} path="/home" exact />
            <Route component={TodoForm} path="/add" exact />
            <FooterMenu />
            {/* </div> */}
        </Router>
    );
}

export default App;
