import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import textareaStyle from "../Profile/MyPost/MyPost.module.css"

const Dialogs = (props) => {
    const {
        data,
        sendMessage,
        updateNewMessageBody
    } = props

    let newMessageElement = React.createRef();

    const sendNewMessage = () => {
        sendMessage()
    }

    const newMessageTextChange = () => {
        updateNewMessageBody(newMessageElement.current.value)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {data.dialogs && data.dialogs.map((dialog) => (
                    <DialogItem
                        key={dialog.id}
                        id={dialog.id}
                        name={dialog.name}
                    />
                ))}
            </div>
            <div className={styles.messages}>
                {data.messages && data.messages.map((message) => (
                    <Message key={message.id} message={message.message} />
                ))}

                <div className={textareaStyle.posts_new_post}>
                    <div className={textareaStyle.new_post_text_wrapper}>
                        <textarea
                            className={textareaStyle.new_post_text}
                            placeholder="Введите текст сообщения..."
                            ref={newMessageElement}
                            value={data.newMessageText}
                            onChange={newMessageTextChange}
                        />
                    </div>
                    <div className={textareaStyle.create_post_button_wrapper}>
                        <button
                            className={textareaStyle.create_post_button}
                            onClick={sendNewMessage}
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;