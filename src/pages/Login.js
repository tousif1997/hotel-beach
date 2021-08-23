import React from 'react'
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import Register from './Register';
import LoginPage from './LoginPage'
function Login() {
    return (
        <>
        <Router>
        <div className="App">
          <div className="appAside" >
          <img src='defaultBcg.jpeg' width='100%' height='100%'/>
          </div>
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Sign Up
              </NavLink>
            </div>
  
            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>
  
            <Route exact path="/" component={Register} />
            <Route path="/sign-in" component={LoginPage} />
          </div>
        </div>
      </Router>  
        </>
    )
}
 
export default Login;