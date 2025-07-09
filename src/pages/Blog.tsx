import { Button, Carousel, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { IoPerson, IoSearchOutline } from "react-icons/io5";
import blogs from "../assets/data/blogs";
import { FaCalendarDays, FaTag } from "react-icons/fa6";
import PaginationCom from "../components/PaginationCom";
import { useState } from "react";
const Categories = [
    { name: 'Sofa', quantity: 1 },
    { name: 'Table', quantity: 2 },
    { name: 'Chair', quantity: 4 }
];

const Blogs = () => {

    const itemPerPage = 2
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blogs.length / itemPerPage)
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;

    const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem)
    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }
    return (
        <div>
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
                        <h3 style={{ color: 'black' }}>Blogs</h3>
                        <p style={{ color: 'black' }}>Home/ Blogs</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="py-5 mt-5">
                <Row>
                    <Col md={9} className="px-5">
                        <div className="px-4">
                            {currentItems.map((item) => (
                                <div className="mb-4">
                                    <img className="w-100 mb-4" style={{ borderRadius: 10 }} src={item.image}></img>
                                    <div className="d-flex justify-content-start">
                                        <p className="me-5"><IoPerson /> {item.user}</p>
                                        <p className="me-5"><FaCalendarDays /> {item.date}</p>
                                        <p className="me-5"><FaTag /> {item.Category}</p>
                                    </div>
                                    <h4 className="d-flex justify-content-start">{item.title}</h4>
                                    <p className="d-flex justify-content-start">{item.content.length > 100 ? item.content.slice(0, 100) + "..." : item.content}</p>
                                    <a
                                        className="d-inline d-flex justify-content-start"
                                        style={{ textDecoration: 'underline', color: 'black', }}
                                        href=""
                                    >
                                        Read more
                                    </a>

                                </div>
                            ))}
                        </div>
                        <PaginationCom totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}></PaginationCom>
                    </Col>
                    <Col md={3}>
                        <InputGroup className="mb-3">
                            <Form.Control />
                            <Button variant="outline-dark"><IoSearchOutline /></Button>
                        </InputGroup>
                        <h3>Categories</h3>
                        <div className="px-4">
                            {Categories.map((item) => (
                                <div className="d-flex justify-content-between">
                                    <p>{item.name}</p>
                                    <p>{item.quantity}</p>
                                </div>
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}
export default Blogs;