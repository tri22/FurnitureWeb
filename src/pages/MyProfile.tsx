import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useState } from "react";
const profileData = {
    avatar: '/img/avatar/avatar.jpg',
    fullName: "Trần Văn A",
    email: "tranvana@example.com",
    phone: "0901234567",
    address: '123',
    city: "Hồ Chí Minh",
    ward: "Ward 3"
};

const MyProfile = () => {
    const [profile, setProfile] = useState(profileData);
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <div className="d-flex justify-content-center px-5 my-5">
                    <img style={{width:100,height:100,borderRadius:50}} src={profile.avatar}></img>
                </div>
                <div className="d-flex justify-content-center px-5">
                    <h3 className="mb-5">{profile.fullName}</h3>
                </div>
                <Form className="px-5 mb-5 pb-5">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="d-flex justify-content-start">Fullname</Form.Label>
                        <Form.Control type="text" value={profile.fullName} />
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label className="d-flex justify-content-start">Email address</Form.Label>
                                <Form.Control type="email" value={profile.email} />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label className="d-flex justify-content-start">Phone number</Form.Label>
                                <Form.Control type="tel" value={profile.phone}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label className="d-flex justify-content-start">Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="address" // 👈 cần có name
                            value={profile.address}

                            placeholder="Your address"
                        />
                    </Form.Group>

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
                    <Button variant="outline-dark">Submit change</Button>
                </Form>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default MyProfile;