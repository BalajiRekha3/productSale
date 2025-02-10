import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function NonVegItems() {
    const dispatch = useDispatch();
    const nonVegItems = useSelector(state => state.products.nonVeg);

    return (
        <Container>
            <h1 className="text-center text-purple my-4">Fresh NonVegItems</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {nonVegItems.map(item => (
                    <Col key={item.id}>
                        <Card className="h-100">
                            <div className="image-container"> {/* Container for image styling */}
                                <Card.Img 
                                    variant="top" 
                                    src={item.image} 
                                    alt={item.name} 
                                    style={{ 
                                        objectFit: "cover", // Maintain aspect ratio and cover container
                                        width: "100%",      // Ensure image takes full width of container
                                        height: "100%"     // Ensure image takes full height of container
                                    }} 
                                />
                            </div>
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

export default NonVegItems;