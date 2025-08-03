import type { User } from "../assets/data/users";
import axiosInstance from "./axiosInstance";

export const loginApi = async ( username:string, password:string ) => {
    try {
        const response = await axiosInstance.post("/auth/login", { username, password });
        return response.data;
    } catch (error) {
        console.error("Login API Error", error); // Log error chi tiết
        throw error;
    }
};

export const registerApi = async ( username:string, password:string, email:string ) => {
    try {
        const response = await axiosInstance.post("/users", {
            username,
            password,
            email,
            role: "USER",       // mặc định role là USER
        });
        return response.data;
    } catch (error) {
        console.error("Register API Error", error);
        throw error;
    }
};

export const introspectApi = async (token:string) => {
    try {
        const response = await axiosInstance.post("/auth/introspect", token);
        return response.data;
    } catch (error) {
        console.error("Register API Error", error); // Log error chi tiết
        throw error;
    }
};

export const currentUser = async () :Promise<User> => {
    try {
        const response = await axiosInstance.get("/users/me");
        return response.data.result;
    } catch (error) {
        console.error("Error get user", error); // Log error chi tiết
        throw error;
    }
};