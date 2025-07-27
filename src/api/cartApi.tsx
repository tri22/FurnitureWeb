import axiosInstance from "./axiosInstance";

const cartApi = {
    addToCart: (productId: number, quantity: number) => {
        return axiosInstance.post(`/cart/add-item`, {
            productId,
            quantity
        });
    },


    removeCartItem: (productId: number) => {
        return axiosInstance.delete(`/cart/delete-item/${productId}`)
    },

    clearCart: () => {
        return axiosInstance.delete('/cart/clear');
    },

    getCart: () => {
        return axiosInstance.get(`/cart`)
    },

    updateItemQuantity: (itemId: number, quantity: number) => {
        return axiosInstance.put(`/cart/update-item/${itemId}`, quantity)
    },
}
export default cartApi;