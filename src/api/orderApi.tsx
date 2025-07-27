import axiosInstance from "./axiosInstance";
import type { Order } from "../assets/data/orders";
const orderApi = {
    createOrder: (data:Order) => {
        return axiosInstance.post(`/order/create`, data)
    },

    getOrderById: (orderId:number) => {
        return axiosInstance.get(`/order/${orderId}`)
    },

    cancelOrder: (id:number) => {
        return axiosInstance.delete(`/order/delete/${id}`)
    },

    getOrderByUserId: (userId:number) => {
        return axiosInstance.get(`/order/get-order/${userId}`)
    },

    updateOrder: (orderId:number, data:Order) => {
        return axiosInstance.put(`/order/update/${orderId}`, data)
    },

    getAllOrder: () => {
        return axiosInstance.get(`/order/all`)
    },

    bestSellingProduct: (date:Date) => {
        return axiosInstance.get(`order/week-best-selling/${date}`)
    },

    weekTotalOrder: (date:Date) => {
        return axiosInstance.get(`order/week-total/${date}`)
    },

    weekTotalRevenue: (date:Date) => {
        return axiosInstance.get(`order/week-sale/${date}`)
    },

    weekCancelledOrder: (date:Date) => {
        return axiosInstance.get(`order/week-cancelled/${date}`)
    },

    getWeeklySales: (date:Date) => {
        return axiosInstance.get(`order/revenue/weekly/${date}`)
    },

    getMonthlySales: (date:Date) => {
        return axiosInstance.get(`order/revenue/monthly/${date}`)
    },

    getYearlySales: (date:Date) => {
        return axiosInstance.get(`order/revenue/yearly/${date}`)
    },




}
export default orderApi;