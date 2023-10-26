import Dialogs from "./Dialogs"
import {addMessageActionCreator, newMessageTextChangeCreator} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(addMessageActionCreator())
        },
        sendMessage: (body) => {
            dispatch(newMessageTextChangeCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;