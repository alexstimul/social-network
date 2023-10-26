import React from "react";
import Post from "./Post/Post";

import styles from "./MyPost.module.css";

const MyPost = (props) => {
    const {
        postsData,
        addNewPost,
        newPostTextChange
    } = props

    let newPostElement = React.createRef();

    const onSubmit = () => {
        addNewPost()  
    }

    const onChange = () => {
        newPostTextChange(newPostElement.current.value)
    }

    return (
        <div>
            <div className={styles.posts_new_post}>
                <div className={styles.new_post_text_wrapper}>
                    <textarea 
                        className={styles.new_post_text} 
                        placeholder="Что нового?" 
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.create_post_button_wrapper}>
                    <button 
                        className={styles.create_post_button}
                        onClick={onSubmit}
                    >
                        Опубликовать
                    </button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsData && postsData.map((post) => (
                    <Post message={post.text} likes={post.likesCount} />
                ))}
            </div>
        </div>
    );
}

export default MyPost;