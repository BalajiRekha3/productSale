import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useState } from "react";

function VegItems() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.veg);

    const [search, setSearch] = useState("");
    const [priceFilter, setPriceFilter] = useState(null);

    // Filtering logic
    const filteredItems = vegItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());

        let matchesPrice = true;
        if (priceFilter === "below100") matchesPrice = item.price < 100;
        if (priceFilter === "above200") matchesPrice = item.price > 100;

        return matchesSearch && matchesPrice;
    });

    // Ensure only one checkbox is selected at a time
    const handleCheckboxChange = (filter) => {
        setPriceFilter(priceFilter === filter ? null : filter);
    };

    return (
        <Container>
            <h1 className="text-center  my-4" style={{color:'maroon'}}>Fresh Vegetables</h1>

            {/* Search Bar & Filters */}
            <div className="d-flex justify-content-center align-items-center mb-3 gap-3">
                <Form.Control
                    type="text"
                    placeholder="Search here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-25"
                />
            </div>

            <div className="d-flex justify-content-center text-dark mb-3 gap-3">
                <Form.Check 
                    type="checkbox"
                    label="Show items below ₹100"
                    checked={priceFilter === "below100"}
                    onChange={() => handleCheckboxChange("below100")}
                />
                <Form.Check 
                    type="checkbox"
                    label="Show items above ₹100"
                    checked={priceFilter === "above200"}
                    onChange={() => handleCheckboxChange("above200")}
                />
            </div>

            {/* Products Grid */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {filteredItems.map(item => (
                    <Col key={item.id}>
                        <Card className="h-100 shadow">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                alt={item.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "placeholder_image.jpg";
                                }}
                            />
                            <Card.Body className="text-center">
                                <Card.Title className="text-success">{item.name}</Card.Title>
                                <Card.Text className="fw-bold">₹{item.price}</Card.Text>
                                <Button
                                    style={{ backgroundColor: "#ff6600", border: "none", width: "100%" }}
                                    onClick={() => dispatch(addToCart(item))}
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

export default VegItems;
