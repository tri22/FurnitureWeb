import type { Address } from "../assets/data/users";
import axiosInstance from "./axiosInstance";

const addressApi = {
    updateAddress: (addressId:number,data:Address) => {
        return axiosInstance.put(`/address/update/${addressId}`,data)
    },
    addAddress: (userId:number,data:Address) => {
        return axiosInstance.post(`/address//add/${userId}`,data)
    },
    deleteAddress: (addressId: number) => {
        return axiosInstance.delete(`/delete/${addressId}`)
    }
}
export default addressApi;