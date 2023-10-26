import React from "react";

import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <p>
                {props.message}
            </p>
        </div>
    );
}

export default Post;