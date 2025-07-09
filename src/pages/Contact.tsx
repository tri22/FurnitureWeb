import { Button, Carousel, Col, Container, Form, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const Contact = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'img/sliders/slider_3.png'}
                        alt="First slide"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                        }}

                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'black' }}>Contact</h3>
                        <p style={{ color: 'black' }}>Home/ Contact</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <div className="my-5">
                    <h2>Get In Touch With Us</h2>
                    <p className="mb-0">For More Information About Our Product & Services.</p>
                    <p>Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <Row>
                    <Col md={5} className="px-5">
                        <div className="d-flex align-items-start mb-3">
                            <MdPlace size={24} className="me-2 mt-1" />
                            <div>
                                <h5 className="mb-1 d-flex align-items-start">Address</h5>
                                <p className="mb-0">TP. HCM</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start mb-3">
                            <FaPhone size={24} className="me-2 mt-1" />
                            <div>
                                <h5 className="mb-1 d-flex align-items-start">Phone</h5>
                                <p className="mb-0">Mobile: +(84) 546-6789</p>
                                <p className="mb-0">Hotline: +(84) 456-6789</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-start">
                            <IoTime size={24} className="me-2 mt-1" />
                            <div>
                                <h5 className="mb-1 d-flex align-items-start">Working time</h5>
                                <p className="mb-0">Monday-Friday: 9:00 - 22:00</p>
                                <p className="mb-0">Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="px-5">
                        <Form className="px-5">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="d-flex justify-content-start">Your name</Form.Label>
                                <Form.Control type="text" placeholder="Your full name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="d-flex justify-content-start">Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="d-flex justify-content-start">Subject</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label className="d-flex justify-content-start">Message</Form.Label>
                                <Form.Control type="text" placeholder="name@example.com" />
                            </Form.Group>
                            <Button variant="outline-dark">Submit</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}
export default Contact;