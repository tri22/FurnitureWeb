import { Button, Col, Container, Form, InputGroup, Row, Tab, Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import type { Address, PasswordUpdate, User, UserUpdate } from "../assets/data/users";
import { currentUser } from '../api/authApi'
import { toast } from "react-toastify";
import userApi, { handleUploadAvatar } from "../api/userApi";
import { API_BASE_URL } from "../api/ipConstant";
import addressApi from "../api/addressApi";

const MyProfile = () => {
    const [selectedAddress, setSelectedAddress] = useState<Address>();
    const [user, setUser] = useState<User>();
    const avatar = API_BASE_URL + "/" + user?.avatarUrl
    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });
    const [passwordForm, setPasswordForm] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const loadUserInfo = async () => {
        const data = await currentUser();
        console.log("DATA:", data);
        if (data) {
            setUser(data);
            if (data.addresses?.length > 0) {
                setSelectedAddress(data.addresses[0]); // default to first address
            }
        } else {
            toast.error("Không thể tải thông tin người dùng.");
        }
    };


    useEffect(() => {
        loadUserInfo();
    }, []);

    const handleUpdateProfile = async (e: any) => {
        e.preventDefault();
        const data: UserUpdate = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            phoneNumber: e.target.phoneNumber.value,
            dateOfBirth: e.target.dateOfBirth.value,
        };

        try {
            if (user) {
                await userApi.updateUser(user?.id, data);
                toast.success("Cập nhật thông tin thành công!");
                await loadUserInfo(); // reload để thấy thay đổi
            }

        } catch (error) {
            toast.error("Failed to update product: " + error);
        }
    };

    const handleUpdateAddres = async (e: any) => {
        e.preventDefault();
        const data: Address = {
            id: selectedAddress?.id,
            street: e.target.street.value,
            city: e.target.city.value,
            district: e.target.district.value,
            ward: e.target.ward.value,

        };

        try {
            if (selectedAddress?.id) {
                await addressApi.updateAddress(selectedAddress?.id, data)
                await loadUserInfo();
                toast.success("Cập nhật thông tin thành công!");

            }

        } catch (error) {
            toast.error("Failed to update product: " + error);
        }
    };


    const handleUpdatePassword = async (e: any) => {
        e.preventDefault();

       const data: PasswordUpdate = {
            oldPassword: e.target.oldpasswd.value,
            newPassword: e.target.newpasswd.value,
            confirmPassword: e.target.confirm.value,
           
        };
        try {
            if (user?.id) {
                await userApi.upadtePassword(user.id,data);
                toast.success("Cập nhật mật khẩu thành công!");
                setPasswordForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
            }
        } catch (error: any) {
            toast.error("Thất bại: " + (error.response?.data?.message || error.message));
        }
    };




    return (
        <div>
            <NavBar></NavBar>
            <Container className="mt-5 p-5">
                <div className="d-flex justify-content-center px-5 my-5">
                    <div
                        className="position-relative"
                        style={{ width: 150, height: 150 }}
                    >
                        <img
                            src={avatar}
                            alt="avatar"
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                        />
                        <label
                            htmlFor="avatar-upload"
                            className="position-absolute d-flex justify-content-center align-items-center"
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                backgroundColor: "rgba(128, 128, 128, 0.6)",
                                top: "90%",
                                right: 30,
                                transform: "translateY(-50%) translateX(50%)", // Đẩy ra sát mép ngoài
                                fontSize: 12,
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            📷
                        </label>

                        <input
                            id="avatar-upload"
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (file && user?.id) {
                                    await handleUploadAvatar(file, user?.id)
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center px-5">
                    <h3 >{user?.fullName}</h3>
                </div>
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="m-5"
                    >
                        <Tab eventKey="profile" title="Profile">
                            <Form className="px-5 mb-5 pb-5 mx-5" onSubmit={handleUpdateProfile}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="d-flex justify-content-start">Fullname</Form.Label>
                                            <Form.Control name="fullName" type="text" value={user?.fullName} onChange={(e) =>
                                                setUser((prev) => prev ? { ...prev, fullName: e.target.value } : prev)
                                            } />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex justify-content-start">Date Of Birth</Form.Label>
                                            <Form.Control name="dateOfBirth" type="date" value={user?.dateOfBirth} onChange={(e) =>
                                                setUser((prev) => prev ? { ...prev, dateOfBirth: e.target.value } : prev)
                                            } />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex justify-content-start">Email address</Form.Label>
                                            <Form.Control name="email" type="email" value={user?.email} onChange={(e) =>
                                                setUser((prev) => prev ? { ...prev, email: e.target.value } : prev)
                                            } />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex justify-content-start">Phone number</Form.Label>
                                            <Form.Control name="phoneNumber" type="tel" value={user?.phoneNumber} onChange={(e) =>
                                                setUser((prev) => prev ? { ...prev, phoneNumber: e.target.value } : prev)
                                            } />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button variant="outline-dark" type="submit">Submit change</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="address" title="Address">
                            <Form className="px-5 mb-5 pb-5 mx-5" onSubmit={handleUpdateAddres}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="d-flex justify-content-start">Chọn địa chỉ</Form.Label>
                                    <Form.Select
                                        value={selectedAddress?.id}
                                        onChange={(e) => {
                                            const id = parseInt(e.target.value);
                                            const found = user?.addresses.find(addr => addr.id === id);
                                            if (found) setSelectedAddress(found);
                                        }}
                                    >
                                        {user?.addresses.map((addr) => (
                                            <option key={addr.id} value={addr.id}>
                                                {addr.street}, {addr.ward}, {addr.district}, {addr.city}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>


                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex justify-content-start">Street</Form.Label>
                                            <Form.Control
                                                name="street"
                                                type="text"
                                                value={selectedAddress?.street || ""}
                                                onChange={(e) =>
                                                    setSelectedAddress((prev) =>
                                                        prev ? { ...prev, street: e.target.value } : prev
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex justify-content-start">District</Form.Label>
                                            <Form.Control
                                                name="district"
                                                type="text"
                                                value={selectedAddress?.district || ""}
                                                onChange={(e) =>
                                                    setSelectedAddress((prev) =>
                                                        prev ? { ...prev, district: e.target.value } : prev
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex justify-content-start">City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="city"
                                                value={selectedAddress?.city || ""}
                                                onChange={(e) =>
                                                    setSelectedAddress((prev) =>
                                                        prev ? { ...prev, city: e.target.value } : prev
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="d-flex justify-content-start">Ward</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="ward"
                                                value={selectedAddress?.ward || ""}
                                                onChange={(e) =>
                                                    setSelectedAddress((prev) =>
                                                        prev ? { ...prev, ward: e.target.value } : prev
                                                    )
                                                }
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Button variant="outline-dark" type="submit">Submit change</Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="password" title="Password" >
                            <Form className="px-5 mb-5 pb-5 mx-5" onSubmit={handleUpdatePassword}>

                                <Form.Group className="mb-3">
                                    <Form.Label className="d-flex justify-content-start">Old Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            name="oldpasswd"
                                            type={showPassword.old ? "text" : "password"}
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() =>
                                                setShowPassword((prev) => ({ ...prev, old: !prev.old }))
                                            }
                                        >
                                            {showPassword.old ? "🙈" : "👁️"}
                                        </Button>
                                    </InputGroup>
                                </Form.Group>



                                <Form.Group className="mb-3">
                                    <Form.Label className="d-flex justify-content-start">New Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            name="newpasswd"
                                            type={showPassword.new ? "text" : "password"}
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() =>
                                                setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                                            }
                                        >
                                            {showPassword.new ? "🙈" : "👁️"}
                                        </Button>
                                    </InputGroup>
                                </Form.Group>



                                <Form.Group className="mb-3">
                                    <Form.Label className="d-flex justify-content-start">Confirm New Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            name="confirm"
                                            type={showPassword.confirm ? "text" : "password"}
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            onClick={() =>
                                                setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))
                                            }
                                        >
                                            {showPassword.confirm ? "🙈" : "👁️"}
                                        </Button>
                                    </InputGroup>
                                </Form.Group>

                                <Button variant="outline-dark" type="submit">Submit change</Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default MyProfile;