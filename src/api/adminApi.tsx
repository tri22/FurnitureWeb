import axiosInstance from "./axiosInstance";

const adminApi = {
    getAllStockInRecord: () => {
        return axiosInstance.get(`/stock-in/all`)
    },
    getRemain: () => {
        return axiosInstance.get(`/stock-in/remain`)
    },
    getAllLog: () => {
        return axiosInstance.get('/log/all-async')
    }
}
export default adminApi;