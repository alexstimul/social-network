import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import MessageFormContainer from "./MessageForm/MessageForm";

const Dialogs = (props) => {
    const {
        data,
        sendMessage,
        updateNewMessageBody,
        isAuth
    } = props

    const sendNewMessage = (message) => {
        sendMessage(message)
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

                <MessageFormContainer sendNewMessage={sendNewMessage} />
            </div>
        </div>
    );
}

export default Dialogs;