import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useParams } from "react-router";
import { FaFacebook, FaMinus, FaPlus,  FaSquareInstagram, FaTwitter } from "react-icons/fa6";
import { useState } from "react";
import ProductList from "../components/ProductList";
import StartRender from "../components/StartRender";
import CommentSection from "../components/CommentSection";


const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        description: "Apple smartphone with A17 Bionic chip and Titanium frame.",
        price: 1199,
        stock: 15,
        category: "Electronics",
        image: '/img/products/product-12.png',
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
        image: '/img/products/product-12.png',
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
        image: '/img/products/product-12.png',
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
        image: '/img/products/product-12.png',
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
        image: '/img/products/product-12.png',
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
        image: '/img/products/product-12.png',
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
        image: '/img/products/product-12.png',
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
        image: '/img/products/product-12.png',
        rating: 4.9,
        createdAt: "2025-07-02T14:10:00Z"
    },
];


const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === parseInt(id || ""));
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
            <NavBar></NavBar>
            <Container >
                <Row className="p-5">
                    <Col md={6}>
                        <img style={{
                            width: '100%',
                            height: '500px',
                            objectFit: 'cover',
                            borderTopLeftRadius: '0.5rem',
                            borderTopRightRadius: '0.5rem',
                            marginTop: 0,
                        }}
                            src={product?.image}>
                        </img>
                    </Col>
                    <Col md={6} className="text-start px-5">
                        <h3>{product?.name}</h3>
                        <p><strong>${product?.price}</strong></p>
                        <div className="d-flex align-items-center gap-3 mt-3">
                            <div>
                                <StartRender rating={product?.rating || 0} />
                            </div>
                            <p>|</p>
                            <p className="ms-2">5 Customer Review</p>
                        </div>
                        <p>{product?.description}</p>

                        {/* Nhóm số lượng và Add to Cart */}
                        <div className="d-flex align-items-center gap-3 mt-3">
                            {/* Số lượng */}
                            <div
                                className="d-flex align-items-center justify-content-center"
                                style={{
                                    border: '1px solid black',
                                    borderRadius: 8,
                                    width: 112,
                                    height: 40,
                                }}
                            >
                                <Button
                                    variant="white"
                                    onClick={() => setQuantity(prev => Math.max(0, prev - 1))}
                                    style={{ width: 32, height: 32, border: 'none', outline: 'none', padding: 0 }}
                                >
                                    <FaMinus />
                                </Button>
                                <input
                                    value={quantity}
                                    readOnly
                                    min={0}
                                    style={{
                                        width: 30,
                                        border: 'none',
                                        textAlign: 'center',
                                        outline: 'none',
                                        backgroundColor: 'transparent',
                                    }}
                                />
                                <Button
                                    variant="white"
                                    onClick={() => setQuantity(quantity + 1)}
                                    style={{ width: 32, height: 32, border: 'none', outline: 'none', padding: 0 }}
                                >
                                    <FaPlus />
                                </Button>
                            </div>

                            {/* Nút Add to cart */}
                            <Button variant="outline-dark">
                                Add to cart
                            </Button>
                        </div>
                        <div className="d-flex align-items-center gap-3 mt-3">
                            <p style={{ margin: 'auto 0' }}>Share: </p>
                            <FaFacebook />
                            <FaSquareInstagram />
                            <FaTwitter />
                        </div>
                    </Col>

                </Row>
                <CommentSection></CommentSection>
                <ProductList title="Related Product" ></ProductList>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default ProductDetail;