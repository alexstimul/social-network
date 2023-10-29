import React from "react";
import Header from "./Header";
import { apiBaseUrl } from "../../staticData";
import { connect } from "react-redux";
import {login} from "../../redux/auth-reducer";
import axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`${apiBaseUrl}/auth/me`, {
            withCredentials: true
        }).then(response => {
            console.log(response.data)

            if (response.data.resultCode === 0) {
                const {login, id, email} = response.data.data
                this.props.login(
                    id, email, login
                )
            }
            
        })
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
    login
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);