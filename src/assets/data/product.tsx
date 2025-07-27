import { toast } from "react-toastify";
import productApi from "../../api/productApi";
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        description: "Apple smartphone with A17 Bionic chip and Titanium frame.",
        price: 1199,
        stock: 15,
        category: "Electronics",
        image: '/img/products/product-1.png',
        rating: 4.8,
        createdAt: "2025-07-05T12:00:00Z"
    },
    {
        id: 2,
        name: "Nike Air Max 270",
        description: "Comfortable and stylish running shoes.",
        price: 149.99,
        stock: 32,
        category: "Fashion",
        image: '/img/products/product-1.png',
        rating: 4.5,
        createdAt: "2025-07-01T09:30:00Z"
    },
    {
        id: 3,
        name: "Samsung QLED TV 55\"",
        description: "4K Smart TV with vivid colors and deep contrast.",
        price: 799.99,
        stock: 7,
        category: "Electronics",
        image: '/img/products/product-1.png',
        rating: 4.3,
        createdAt: "2025-06-28T18:20:00Z"
    },
    {
        id: 4,
        name: "MacBook Pro 14” M3",
        description: "Apple laptop with the new M3 chip for creators.",
        price: 1999,
        stock: 5,
        category: "Computers",
        image: '/img/products/product-1.png',
        rating: 4.9,
        createdAt: "2025-07-02T14:10:00Z"
    },
    {
        id: 5,
        name: "MacBook Pro 14” M3",
        description: "Apple laptop with the new M3 chip for creators.",
        price: 1999,
        stock: 5,
        category: "Computers",
        image: '/img/products/product-1.png',
        rating: 4.9,
        createdAt: "2025-07-02T14:10:00Z"
    },
    {
        id: 6,
        name: "MacBook Pro 14” M3",
        description: "Apple laptop with the new M3 chip for creators.",
        price: 1999,
        stock: 5,
        category: "Computers",
        image: '/img/products/product-1.png',
        rating: 4.9,
        createdAt: "2025-07-02T14:10:00Z"
    },
    {
        id: 7,
        name: "MacBook Pro 14” M3",
        description: "Apple laptop with the new M3 chip for creators.",
        price: 1999,
        stock: 5,
        category: "Computers",
        image: '/img/products/product-1.png',
        rating: 4.9,
        createdAt: "2025-07-02T14:10:00Z"
    },
    {
        id: 8,
        name: "MacBook Pro 14” M3",
        description: "Apple laptop with the new M3 chip for creators.",
        price: 1999,
        stock: 5,
        category: "Computers",
        image: '/img/products/product-1.png',
        rating: 4.9,
        createdAt: "2025-07-02T14:10:00Z"
    },
];

export default products;

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    categoryName: string;
};


export const fetchProductData = async (): Promise<Product[]> => {
    try {
        const response = await productApi.getAllProduct();
        return response.data.result.map((item: any) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            image: item.image,
            rating: item.rating,
            categoryName: item.categoryName,
        }));
    } catch (error:any) {
        toast.error("Lỗi khi lấy sản phẩm:", error);
        return [];
    }
}