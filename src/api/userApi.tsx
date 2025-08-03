import axiosInstance from './axiosInstance'
import type { User, UserUpdate } from '../assets/data/users'
import { toast } from 'react-toastify'
const userApi = {
    register: (data:User) => {
        return axiosInstance.post(`/users`, data)
    },

    updateUser: (userId:number, data:UserUpdate) => {
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

export const handleUploadAvatar = async (file: File,userId:number) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await axiosInstance.post(`/users/update-avatar/${userId}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        if (response.data.code === 200) {
            toast.success("Cập nhật ảnh thành công!");
            // Cập nhật giao diện, hoặc gọi lại loadUserInfo()
        } else {
            toast.error("Thất bại: " + response.data.message);
        }
    } catch (err) {
        toast.error("Lỗi khi upload ảnh"+err);
    }
};
