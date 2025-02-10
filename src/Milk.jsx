import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Milk() {
    const dispatch = useDispatch();
    const milkItems = useSelector(state => state.products.milk);

    return (
        <Container>
            <h1 className="text-center text-purple my-4">Fresh Milk Products</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {milkItems.map(item => (
                    <Col key={item.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={item.image} alt={item.name} /> {/* Added image here */}
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-success">{item.name}</Card.Title>
                                <Card.Text className="fw-bold">₹{item.price}</Card.Text>
                                <Button
                                    onClick={() => dispatch(addToCart(item))}
                                    style={{ backgroundColor: "#ff6600", border: "none", width: "100%" }}
                                >
                                    Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Milk;
