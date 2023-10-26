import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
    const {
        users,
        followUser,
        unFollowUser
    } = props

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
                                    if (user.isFriend) {
                                        unFollowUser(user.id)
                                    } else {
                                        followUser(user.id)
                                    }
                                }}
                              >
                                  {user.isFriend ? "Отписаться" : "Подписаться"}
                              </button>
                          </div>
                      </div>

                      <div>
                          <span>{user.fullName}</span>
                          <span>{user.status}</span>
                      </div>
                      <div>
                          <span>{user.location.city}</span>
                          <span>{user.location.country}</span>
                      </div>
                  </div>
              ))
          }
      </div>
    );
}

export default Users;