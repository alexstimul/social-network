import React from "react";
import styles from "./Users.module.css";
import { NavLink } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Users = (props) => {
    const {
        users,
        followUser,
        unFollowUser,
        onPageChanged,
        currentPage,
        totalUsersCount,
        pageSize
    } = props

    return (
        <div>
            <Pagination
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
            />
            {
                users.map(user => (
                    <div key={user.id}>
                        <div>
                            <div>
                                <NavLink
                                    to={`/profile/${user.id}`}
                                >
                                    <img src={user.photos.small ? user.photos.small : "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} style={{ width: "100px" }} />
                                </NavLink>
                            </div>
                            <div>
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        if (user.followed) {
                                            followUser(user.id)
                                        } else {
                                            unFollowUser(user.id)
                                        }
                                    }}
                                >
                                    {user.followed ? "Отписаться" : "Подписаться"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;