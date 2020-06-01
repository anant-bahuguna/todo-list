import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, LandingPage } from "./pages";
import { TodoForm } from "./components/todo";
import {Navbar, FooterMenu} from "./components/layout";
import ProfileCard from './components/user/ProfileCard'
import AddTodo from './components/todo/AddTodo'

import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
        <Router>
            {/* <div className="has-navbar-fixed-top"> */}
            {/* <LandingPage /> */}
            <Navbar />
            {/* <AddTodo isActive={true}/> */}
            <Route component={Home} path="/home" exact />
            <Route component={TodoForm} path="/add" exact />
            <Route component={ProfileCard} path="/profile" exact />
            <FooterMenu />
            {/* </div> */}
        </Router>
        </Provider>
    );
}

export default App;
