import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {auth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        auth()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToProps = {
    auth
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);