import React from "react";
import Dialogs from "./Dialogs"
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        data: state.messagesPage
    }
}

const mapDispatchToProps = {
    sendMessage,
    updateNewMessageBody
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);