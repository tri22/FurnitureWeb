import userApi from "../../api/userApi";

export type User = {
    id: number;
    fullName: string;
    email: string;
    avatarUrl: string;
    phoneNumber: string;
    dateOfBirth: string; // hoặc Date nếu bạn parse
    addresses:Address[];
    accountRole: string;
};

export type UserUpdate = {
    fullName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: Date; 
};


export type Address = {
    id:number;
    street:string;
    city:string;
    ward:string;
    district:string;
};


export const fetchUserData = async () : Promise<User[]>=>{
    try {
        const response = await userApi.getAllUser();
        return response.data.result.map((item:any)=>({
            id: item.id,
            fullName: item.fullName,
            description: item.description,
            email: item.email,
            avatarUrl: item.avatarUrl,
            phoneNumber: item.phoneNumber,
            dateOfBirth: item.dateOfBirth,
            addresses: item.addresses || [],
            accountRole: item.accountRole,
        }))
    } catch (error) {
        return []
    }
}

