import axiosInstance from "./axiosInstance";
import type { Voucher } from "../assets/data/vouchers";

const voucherApi = {

    getVoucher: (code:string) => {
        return axiosInstance.get(`vouchers/find/${code}`)
    },
    getAllVoucher:()=>{
        return axiosInstance.get('/vouchers/all')
    },

    addVoucher:(data:Voucher)=>{
        return axiosInstance.post('/vouchers/add',data)
    },

    updateVoucher:(id:number,data:Voucher)=>{
        return axiosInstance.put(`/vouchers/update/${id}`,data)
    },
    
    deleteVoucher:(id:number)=>{
        return axiosInstance.delete(`/vouchers/delete/${id}`)
    },
}
export default voucherApi;