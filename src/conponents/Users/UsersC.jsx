import React from "react";
import styles from "./Users.module.css";
import axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            console.log(response.data)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount > 50 ? 50 : response.data.totalCount)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            console.log(response.data)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {
                    pages.map(page => (
                        <span onClick={(e) => { this.onPageChanged(page) }} className={this.props.currentPage === page && styles.selectedPage}>{page}</span>
                    ))
                }
            </div>
            {
                this.props.users.map(user => (
                    <div key={user.id}>
                        <div>
                            <div>
                                <img src={user.photoUser} />
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        if (user.followed) {
                                            this.props.unFollowUser(user.id)
                                        } else {
                                            this.props.followUser(user.id)
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
    }
}

export default Users;