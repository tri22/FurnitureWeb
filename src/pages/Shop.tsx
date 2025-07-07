import { Button, Card, Carousel, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { MdOutlineStar, MdShoppingCart } from "react-icons/md";
import PaginationCom from "../components/PaginationCom";
import { useState } from "react";
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        description: "Apple smartphone with A17 Bionic chip and Titanium frame.",
        price: 1199,
        stock: 15,
        category: "Electronics",
        image: 'img/products/product-1.png',
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
        image: 'img/products/product-1.png',
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
        image: 'img/products/product-1.png',
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
        image: 'img/products/product-1.png',
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
        image: 'img/products/product-1.png',
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
        image: 'img/products/product-1.png',
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
        image: 'img/products/product-1.png',
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
        image: 'img/products/product-1.png',
        rating: 4.9,
        createdAt: "2025-07-02T14:10:00Z"
    },
];

export default function Shop() {
    const [itemPerPage, setItemPerPage] = useState(6);
    const totalPages = Math.ceil(products.length / itemPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);


    const onPageChange = (page: number) => {
        setCurrentPage(page)
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <NavBar></NavBar>
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'img/sliders/slider_4.png'}
                        alt="First slide"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                        }}

                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>Shop</h3>
                        <p style={{ color: 'black' }}>Home/ Shop</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row
                style={{
                    backgroundColor: '#EFEFEF',
                    height: '100px',
                    alignItems: 'center',
                }}
                className="d-flex justify-content-between px-5"
            >
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <InputGroup className="w-75">
                        <Form.Control placeholder="Search" />
                        <Button variant="outline-dark">Search</Button>
                    </InputGroup>
                </Col>
                <Col
                    md={6}
                    className="d-flex justify-content-end align-items-center gap-3 px-5"
                >
                    <p className="mb-0">Show</p>
                    <input
                        type="number"
                        value={itemPerPage}
                        style={{ width: 60, textAlign: 'center' }}
                        onChange={(e) => setItemPerPage(Number(e.target.value))}
                    />
                    <p className="mb-0">Sort by</p>
                    <select style={{ width: 120 }}>
                        <option value="Price">Price</option>
                        <option value="Name">Name</option>
                    </select>
                </Col>
            </Row>

            <Container>
                <Row className="px-5">
                    {currentItems.map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="p-4">
                            <Card style={{ padding: 0, height: '400px', width: '250px' }}>
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    style={{
                                        width: '100%',
                                        height: '250px',
                                        objectFit: 'cover',
                                        borderTopLeftRadius: '0.5rem',
                                        borderTopRightRadius: '0.5rem',
                                        marginTop: 0,
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1rem' }}>{item.name}</Card.Title>
                                    <div className="d-flex justify-content-around align-items-center mb-3">
                                        <strong>${item.price}</strong>
                                        <div className="d-flex align-items-center">
                                            <span>{item.rating}</span>
                                            <MdOutlineStar style={{ marginLeft: 4 }} />
                                        </div>
                                    </div>

                                    <Button className="mt-2 mx-2" variant="outline-dark">Add <MdShoppingCart /></Button>
                                    <Button className="mt-2 mx-2" variant="outline-dark">Buy now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <PaginationCom totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange}></PaginationCom>
            </Container>
            <Footer></Footer>
        </div>
    )
}