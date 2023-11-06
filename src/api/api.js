import axios from "axios";
import { apiBaseUrl } from "../staticData";

const instance = axios.create({
    withCredentials: true,
    baseURL: apiBaseUrl
});

export const usersAPI = {
    getUsers (page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getProfileStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus (status) {
        return instance.put(`profile/status`, {
            status
        })
    }
}

export const authAPI = {
    auth () {
        return instance.get(`auth/me`)
    },
    login(login, password, isRememberMe) {
        return instance.post(`auth/login`, {
            email: login,
            password,
            rememberMe: isRememberMe || false
        })
    }
}