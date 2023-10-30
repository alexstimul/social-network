import React from "react";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
    const {
        totalUsersCount,
        pageSize,
        onPageChanged,
        currentPage
    } = props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.paginationWrapper}>
            {
                pages.map(page => (
                    <span
                        onClick={(e) => { onPageChanged(page) }}
                        className={`${styles.page} ${currentPage === page && styles.selectedPage}`}
                    >
                        {page}
                    </span>
                ))
            }
        </div>
    );
}

export default Pagination;