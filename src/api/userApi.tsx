import axiosInstance from './axiosInstance'
import type { User } from '../assets/data/users'
const userApi = {
    register: (data:User) => {
        return axiosInstance.post(`/users`, data)
    },

    updateUser: (userId:number, data:User) => {
        return axiosInstance.put(`/users/update/${userId}`, data)
    },

    getAllUser: () => {
        return axiosInstance.get(`/users/all`)
    },

    deleteUser: (userId:number) => {
        return axiosInstance.delete(`/users/delete/${userId}`)
    },

}
export default userApi;