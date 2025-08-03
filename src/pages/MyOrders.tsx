import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button, Nav, Badge, Navbar, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/style/Order.scss'
import { toast } from 'react-toastify';
import { currentUser } from '../api/authApi';
import { fetchOrderByUser, type Order } from '../assets/data/orders';
import NavBar from '../components/NavBar';
const statusMap = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    SHIPPING: 'SHIPPING',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED',
} as const;

type OrderStatus = keyof typeof statusMap;
export default function Order() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [activeTab, setActiveTab] = useState<OrderStatus>('PENDING');

    useEffect(() => {
        const fetchOrders = async () => {
            const userData = await currentUser()
            const userId = userData.id
            console.log(userId)
            if (!userId) {
                toast.error("Không tìm thấy thông tin người dùng!");
                return;
            }
            const data = await fetchOrderByUser(userId);
            if (data) {
                setOrders(data)
            }

        };

        fetchOrders();
    }, []);

    // Lọc đơn hàng theo tab đang chọn
    const filteredOrders = orders.filter(order => order.status === statusMap[activeTab]);
    // Đếm số lượng đơn theo từng trạng thái
    const orderCounts = {
        'PENDING': orders.filter(o => o.status === 'PENDING').length,
        'SHIPPING': orders.filter(o => o.status === 'SHIPPING').length,
        'PAID': orders.filter(o => o.status === 'PAID').length,
        'CANCELLED': orders.filter(o => o.status === 'CANCELLED').length,
        'COMPLETED': orders.filter(o => o.status === 'COMPLETED').length,
    };

    return (
        <div>
            <NavBar />
            <Carousel controls={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'img/sliders/slider_1.png'}
                        alt="First slide"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                        }}

                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white' }}>My Orders</h3>
                        <p style={{ color: 'white' }}>Home/ Orders</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="my-4 orders-container">
                {/* Tabs theo trạng thái */}
                <Nav variant="tabs" activeKey={activeTab} onSelect={(k) => {
                    if (k !== null) setActiveTab(k as OrderStatus);
                }}>
                    {(Object.keys(orderCounts) as OrderStatus[]).map((key) => (
                        <Nav.Item key={key}>
                            <Nav.Link eventKey={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                                <Badge className="ms-1">{orderCounts[key]}</Badge>
                            </Nav.Link>
                        </Nav.Item>
                    ))}
                </Nav>

                {/* Danh sách đơn hàng */}
                <Row className="mt-4" xs={1} md={2}>
                    {filteredOrders.length === 0 ? (
                        <p className="mt-3">No Orders</p>
                    ) : (
                        filteredOrders.map(order => (
                            <Col key={order.id} className="mb-4">
                                <Card>
                                    <Card.Body>
                                        {/* Thông tin đơn hàng */}
                                        <div className="mb-2 order-id">
                                            <strong>Order ID #{order.id}</strong>
                                            <span className="text-primary ms-3 order-status">{order.status}</span>
                                        </div>
                                        <div className="mb-2"><strong>Order Date:</strong> {order.orderDate}</div>
                                        <div className="mb-2"><strong>Payment method:</strong> {order.paymentMethod}</div>
                                        {/* <div className="mb-2"><strong>Note:</strong> {order.note}</div> */}
                                        {/* <div className="mb-2"><strong>Shipping Fee:</strong> {formatPrice(order.shippingFee)}</div> */}

                                        {/* Danh sách sản phẩm */}
                                        {order.items && order.items.length > 0 ? (
                                            <div className="mb-3 list-product" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                                                <Row xs={1} md={2}>
                                                    {order.items.map(item => (
                                                        <Col key={item.id} className="mb-2 d-flex product-item">
                                                            <img
                                                                className="product-img"
                                                                src={item.image}
                                                                alt={item.productName}
                                                                style={{ width: 80, height: 80, marginRight: 10 }}
                                                            />
                                                            <div>
                                                                <div><strong>{item.productName}</strong></div>
                                                                <div className="product-price">
                                                                    {item.price}
                                                                </div>
                                                                <div>x{item.quantity}</div>

                                                            </div>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </div>
                                        ) : (
                                            <div className="mb-3 text-muted">Don't have products in this orders</div>
                                        )}
                                    </Card.Body>

                                    {/* Tổng tiền */}
                                    <div className="d-flex justify-content-between align-items-center order-total p-3">
                                        <div>
                                            <strong>Total: {order.price}</strong><br />
                                            <small>(Items: {order.quantity})</small>
                                        </div>
                                        <Link to={`/order/${order.id}`}>
                                            <Button variant="info">Details</Button>
                                        </Link>
                                    </div>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
            <Footer />
        </div>
    );
}
