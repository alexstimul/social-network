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
    getProfile (userId) {
        console.log("qweqew");
        return instance.get(`profile/${userId}`)
    }
}