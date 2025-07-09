import { Card, Button, Col, Container, Figure, Row } from "react-bootstrap";
import NavComponent from "../components/NavBar";
import SliderComponent from "../components/Slider";
import livingRoom from '../assets/img/products/product-1.png'
import diningRoom from '../assets/img/products/product-2.png'
import bedRoom from '../assets/img/products/product-3.png'
import Footer from "../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineStar, MdShoppingCart } from "react-icons/md";
import '../assets/style/home.scss'
import { useNavigate } from "react-router-dom";

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

const blogs = [
    {
        id: 1,
        title: "Top 10 iOS Tips",
        excerpt: "Discover the most useful iOS productivity hacks you didn’t know.",
        thumbnail: 'img/products/product-1.png',
        author: "John Doe",
        createdAt: "2025-07-01"
    },
    {
        id: 2,
        title: "Design Trends 2025",
        excerpt: "Stay ahead of the curve with these modern UI/UX patterns.",
        thumbnail: 'img/products/product-1.png',
        author: "Jane Smith",
        createdAt: "2025-06-28"
    },
    {
        id: 3,
        title: "Design Trends 2025",
        excerpt: "Stay ahead of the curve with these modern UI/UX patterns.",
        thumbnail: 'img/products/product-1.png',
        author: "Jane Smith",
        createdAt: "2025-06-28"
    },
];


const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="w-100">
            <NavComponent></NavComponent>
            <SliderComponent></SliderComponent>
            <Container>
                <h1 className="my-5">Browse Spaces</h1>
                <p className="text-muted mb-4" style={{ maxWidth: "600px" ,margin:'auto'}}>
                    Discover curated furniture and decor ideas for every room. Make your space feel like home.
                </p>
                <Row className="mb-5">
                    <Col md={4}>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                src={livingRoom}
                            />
                            <Figure.Caption>
                                <h3>Living</h3>
                            </Figure.Caption>
                        </Figure>
                    </Col>

                    <Col md={4}>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                src={diningRoom}
                            />
                            <Figure.Caption>
                                <h3>Dining</h3>
                            </Figure.Caption>
                        </Figure>
                    </Col>

                    <Col md={4}>
                        <Figure>
                            <Figure.Image
                                width={300}
                                height={300}
                                src={bedRoom}
                            />
                            <Figure.Caption>
                                <h3>Bedroom</h3>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <h1 className="my-2">Our Products</h1>
                <Row className="px-5">
                    {products.map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="p-4"onClick={() => navigate(`/product/${item.id}`)}>
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
                <Container>
                    <Button className="my-5 mx-2" variant="outline-dark">Show more <IoIosArrowForward /></Button>
                </Container>
            </Container>
            <div style={{
                backgroundColor: '#EFEFEF', height: '150px', display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <h3 >Order now for an express delivery in 24h! <Button variant="outline-dark" >View more <IoIosArrowForward /></Button></h3>
            </div>
            <Container className="my-5 py-5">
                <Row className="justify-content-center">
                    {blogs.slice(0, 3).map((item) => (
                        <Col key={item.id} xs={12} sm={6} md={4} className="d-flex justify-content-center mb-4">
                            <Card className="p-0" style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={item.thumbnail}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: "1rem" }}>{item.title}</Card.Title>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>{item.author}</span>
                                        <span>{item.createdAt}</span>
                                    </div>
                                    <Button variant="outline-dark" size="sm">
                                        Read more
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


            <Footer></Footer>
        </div>
    );
};


export default Home;
