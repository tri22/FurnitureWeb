export type User = {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    birthday: string; // hoặc Date nếu bạn parse
    role: "ADMIN" | "USER";
};
