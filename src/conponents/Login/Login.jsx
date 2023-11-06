import React from "react";
import styles from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../FormControl/FormControl";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} type="text" placeholder="Логин" name="login" validate={[ required ]} />
            </div>
            <div>
                <Field component={Input} type="password" name="password"  validate={[ required ]} />
            </div>
            <div>
                <Field component={Input} type="checkbox" placeholder="Логин" name="isRememberMe"  validate={[ required ]} /> Запомни меня
            </div>
            <div>
                <button>Войти</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

const Login = (props) => {
    const {
        loginMe
    } = props

    const onSubmit = (formData) => {
        const {login, password, isRememberMe} = formData
        loginMe(login, password, isRememberMe)
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;