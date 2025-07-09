import { Button, Carousel, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import cartItems from "../assets/data/cartItems";
const Checkout = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal; // hoặc cộng thêm thuế, phí ship nếu có

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
                        <h3 style={{ color: 'black' }}>Checkout</h3>
                        <p style={{ color: 'black' }}>Home/ Checkout</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <Row className="my-5 py-5">
                    <Col md={8} className="px-5">
                        <div className="d-flex justify-content-start px-5">
                            <h3 className="mb-5">Billing details</h3>
                        </div>
                        <Form className="px-5">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="d-flex justify-content-start">Full name</Form.Label>
                                <Form.Control type="text" placeholder="Your full name" />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-flex justify-content-start">Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-flex justify-content-start">Phone number</Form.Label>
                                        <Form.Control type="tel" placeholder="e.g. 0901234567" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-flex justify-content-start">City</Form.Label>
                                        <Form.Select aria-label="Select city">
                                            <option>City</option>
                                            <option value="1">Hà Nội</option>
                                            <option value="2">Hồ Chí Minh</option>
                                            <option value="3">Đà Nẵng</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="d-flex justify-content-start">Ward</Form.Label>
                                        <Form.Select aria-label="Select ward">
                                            <option>Ward</option>
                                            <option value="1">Ward 1</option>
                                            <option value="2">Ward 2</option>
                                            <option value="3">Ward 3</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="my-3">
                                <Form.Label className="d-flex justify-content-start">Payment Method</Form.Label>
                                <Form.Select aria-label="Select ward">
                                    <option>Payment Method</option>
                                    <option value="1">COD</option>
                                    <option value="2">VNPay</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={4} className="px-5">
                        <div className="d-flex justify-content-between">
                            <h4>Product</h4>
                            <h4>Subtotal</h4>
                        </div>
                        <div className="my-3 pb-3 border-bottom">
                            {cartItems.map((item, index) => (
                                <div className="d-flex justify-content-between mb-2" key={index}>
                                    <span>{item.name} <strong>x</strong> {item.quantity}</span>
                                    <span>${item.price * item.quantity}</span>
                                </div>
                            ))}
                        </div>

                        <div className="d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between mb-4">
                            <strong>Total</strong>
                            <strong>${total}</strong>
                        </div>

                        <Form.Label>Coupon Code</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control placeholder="Enter coupon" />
                            <Button variant="outline-dark">Apply</Button>
                        </InputGroup>


                        <Button variant="outline-dark">Place order</Button>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}
export default Checkout;