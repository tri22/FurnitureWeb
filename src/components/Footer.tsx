import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <div className="w-100">
            <Container fluid className="my-4" style={{ height: '200px', borderTop: '1px solid #ccc' }}>
                <Row className="my-5">
                    <Col md={3}>
                        <h3>Livora</h3>
                        <p>Chuyên cung cấp nội thất chất lượng cao với thiết kế hiện đại, bền bỉ và thân thiện với môi trường.</p>
                    </Col>
                    <Col md={3}>
                        <h5 className="mb-3">Liên kết</h5>
                        <ul className="list-unstyled">
                            <li><a style={styles.textDecoNone} href="/about">Về chúng tôi</a></li>
                            <li><a style={styles.textDecoNone} href="/products">Sản phẩm</a></li>
                            <li><a style={styles.textDecoNone} href="/news">Tin tức</a></li>
                            <li><a style={styles.textDecoNone} href="/contact">Liên hệ</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="mb-3">Hỗ trợ</h5>
                        <ul className="list-unstyled">
                            <li><a style={styles.textDecoNone} href="/faq">Câu hỏi thường gặp</a></li>
                            <li><a style={styles.textDecoNone} href="/shipping">Chính sách giao hàng</a></li>
                            <li><a style={styles.textDecoNone} href="/return">Chính sách đổi trả</a></li>
                            <li><a style={styles.textDecoNone} href="/privacy">Chính sách bảo mật</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5 className="mb-3">Liên hệ</h5>
                        <ul className="list-unstyled">
                            <li style={styles.textDecoNone}>📍 123 Đường ABC, Quận 1, TP.HCM</li>
                            <li style={styles.textDecoNone}>📞 0123 456 789</li>
                            <li style={styles.textDecoNone}>✉️ support@livora.vn</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            <Container className="mb-4 text-center">
                <h5>© 2025 Livora. All rights reserved</h5>
                <p style={{height:'20px'}}></p>
            </Container>

        </div>
    )
}

const styles: any = {
    textDecoNone: {
        textDecoration: 'none',
        color: 'black'
    },
};


export default Footer;