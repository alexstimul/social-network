import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "../MyPost.module.css";

const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.new_post_text_wrapper}>
                <Field
                    className={styles.new_post_text}
                    placeholder="Что нового?"
                    component={"textarea"}
                    name="text"
                />
            </div>
            <div className={styles.create_post_button_wrapper}>
                <button
                    className={styles.create_post_button}
                >
                    Опубликовать
                </button>
            </div>
        </form>
    );
}

const NewPostReduxForm = reduxForm({
    form: "post"
})(NewPostForm)

const NewPostContainer = (props) => {

    const onSubmit = (postData) => {
        props.sendPost(postData.text)
    }

    return (
        <div className={styles.posts_new_post}>
            <NewPostReduxForm onSubmit={onSubmit} />
        </div>
    );
}

export default NewPostContainer;