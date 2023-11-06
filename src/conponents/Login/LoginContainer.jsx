import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import {compose} from "redux";
import { login } from "../../redux/auth-reducer";

const LoginContainer = (props) => {
    const {
        login
    } = props
    
    return (
        <Login {...props} loginMe={login} />
    )
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = {
    login
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginContainer);