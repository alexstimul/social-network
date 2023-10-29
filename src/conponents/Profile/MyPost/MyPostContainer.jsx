import MyPost from "./MyPost";
import {addNewPost, newPostTextChange} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = {
    addNewPost,
    newPostTextChange
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost);