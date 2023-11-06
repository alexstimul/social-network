import React from "react";
import Post from "./Post/Post";

import styles from "./MyPost.module.css";
import NewPostContainer from "./NewPostForm/NewPostForm";

const MyPost = (props) => {
    const {
        postsData,
        addNewPost,
        newPostTextChange
    } = props

    const sendPost = (text) => {
        addNewPost(text)  
    }

    return (
        <div>
            <NewPostContainer sendPost={sendPost} />
            <div className={styles.posts}>
                {postsData && postsData.map((post) => (
                    <Post key={post.id} message={post.text} likes={post.likesCount} />
                ))}
            </div>
        </div>
    );
}

export default MyPost;