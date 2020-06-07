import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, LandingPage } from "./pages";
import { TodoForm } from "./components/todo";
import { Navbar, FooterMenu } from "./components/layout";
import ProfileCard from "./components/user/ProfileCard";
import DeleteMessage from "./components/messages/DeleteMessage";
import PrivateRoute from "./components/Routing/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
    return (
        <Provider store={store}>
            <Router>
                {/* <div className="has-navbar-fixed-top"> */}
                {/* <LandingPage /> */}
                <Navbar />
                {/* <Route path='/' component={Navbar}> */}
                    <PrivateRoute component={Home} path="/home" />
                    <Route component={Register} path="/register" exact />
                    <Route component={Login} path="/login" exact />
                    <PrivateRoute component={TodoForm} path="/task" exact />
                    <PrivateRoute
                        component={DeleteMessage}
                        path="/delete/:id"
                        exact
                    />
                    <PrivateRoute component={TodoForm} path="/task/:id" exact />
                    <PrivateRoute
                        component={ProfileCard}
                        path="/profile"
                        exact
                    />
                {/* </Route> */}
                <FooterMenu />
                {/* </div> */}
            </Router>
        </Provider>
    );
}

export default App;
