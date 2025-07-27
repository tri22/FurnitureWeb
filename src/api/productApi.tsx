import axiosInstance from "./axiosInstance";
import type { Product } from "../assets/data/product";
const productApi = {
    getAllProduct: () => {
        return axiosInstance.get("/products/all")
    },
    getProduct: (productId:number) => {
        return axiosInstance.get(`/products/${productId}`)
    },
    deleteProduct: (productId:number) => {
        return axiosInstance.delete(`/products/delete/${productId}`)
    },
    updateProduct: (productId:number, data:Product) => {
        return axiosInstance.put(`/products/${productId}`, data)
    },
    createProduct: (data:Product) => {
        return axiosInstance.post("/products", data);
    }
}
export default productApi;