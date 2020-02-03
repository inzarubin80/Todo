import { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import React from "react";

class LogoutComponent extends Component {
    render() {

        AuthenticationService.logout();

        return (
            <>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank You for Using Our Application.
                </div>
            </>
        )
    }
}

export default LogoutComponent;