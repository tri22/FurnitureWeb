import { Button, Card, Col, Container, Row } from "react-bootstrap";
import products from "../assets/data/product";
import { MdOutlineStar, MdShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
type ProductListProps = {
    title: string;
};

const ProductList = ({ title }: ProductListProps) => {
    const navigate = useNavigate()
    return (
        <Container>

            <Row className="p-5" style={{ borderTop: '1px black solid' }}>
                <h2 className="my-2">{title}</h2>
                {products.slice(0, 4).map((item) => (
                    <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="p-4" onClick={() => navigate(`/product/${item.id}`)}>
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
        </Container>
    )
}

export default ProductList;