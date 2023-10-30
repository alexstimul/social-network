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
    },
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    auth () {
        return instance.get(`auth/me`)
    }
}