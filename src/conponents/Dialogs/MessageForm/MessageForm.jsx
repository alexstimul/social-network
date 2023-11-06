import React from "react"

import textareaStyle from "../../Profile/MyPost/MyPost.module.css"
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { TextArea } from "../../FormControl/FormControl";

const maxLength30 = maxLengthCreator(30)

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={textareaStyle.new_post_text_wrapper}>
                <Field
                    className={textareaStyle.new_post_text}
                    placeholder="Введите текст сообщения..."
                    component={TextArea}
                    name="message"
                    validate={[ required, maxLength30 ]}
                />
            </div>
            <div className={textareaStyle.create_post_button_wrapper}>
                <button
                    className={textareaStyle.create_post_button}
                >
                    Отправить
                </button>
            </div>
        </form>
    );
}

const MessageReduxForm = reduxForm({
    form: "message"
})(MessageForm)

const MessageFormContainer = (props) => {
    const onSubmit = (formData) => {
        props.sendNewMessage(formData.message);
    }

    return (
        <div className={textareaStyle.posts_new_post}>
            <MessageReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default MessageFormContainer;