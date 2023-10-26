import React from "react";
import styles from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
    const {
        users,
        followUser,
        unFollowUser,
        setUsers
    } = props

    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            setUsers(response.data.items)
        })
    }

    return (
      <div>
          {
              users.map(user => (
                  <div key={user.id}>
                      <div>
                          <div>
                              <img src={user.photoUser} />
                          </div>
                          <div>
                              <button
                                onClick={() => {
                                    if (user.followed) {
                                        unFollowUser(user.id)
                                    } else {
                                        followUser(user.id)
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
                      {/* <div>
                          <span>{user.location.city}</span>
                          <span>{user.location.country}</span>
                      </div> */}
                  </div>
              ))
          }
      </div>
    );
}

export default Users;