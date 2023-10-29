import Dialogs from "./Dialogs"
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";

import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.messagesPage
    }
}

const mapDispatchToProps = {
    sendMessage,
    updateNewMessageBody
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);