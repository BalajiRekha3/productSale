import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decrement, increment, remove } from "./store";
import "./App.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, Button, Form, Image, Card } from 'react-bootstrap';

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [couponCode, setCouponCode] = useState('');
    const [couponCodeDiscountPercentage, setCouponCodeDiscountPercentage] = useState(0);
    
    const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    const discountAmount = (totalPrice * discountPercentage) / 100;
    const finalAmount = totalPrice - discountAmount;
    const couponDiscountAmount = (finalAmount * couponCodeDiscountPercentage) / 100;
    const netAmount = finalAmount - couponDiscountAmount;

    const handleCouponPercentage = () => {
        let discount = 0;
        switch (couponCode.toUpperCase()) {
            case 'BALAJI10':
                discount = 10;
                break;
            case 'BALAJI20':
                discount = 20;
                break;
            case 'BALAJI30':
                discount = 30;
                break;
            default:
                alert('Invalid coupon code');
                discount = 0;
        }
        setCouponCodeDiscountPercentage(discount);
    };

    const handleCompletePurchase = () => {
        if (!isLoggedIn) {
            alert("Please login to complete your purchase.");
            return;
        }
        
        const purchaseDate = new Date().toLocaleDateString();
        const purchaseDetails = {
            date: purchaseDate,
            items: [...cartItems],
            totalPrice: netAmount,
        };
        dispatch(addPurchaseDetails(purchaseDetails));
        dispatch(clearCart());
        alert("Purchase completed successfully!");
    };

    return (
        <Container className="d-flex justify-content-center">
            <Card className="p-4 shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
                {cartItems.length > 0 ? (
                    <div>
                        <h1 className="text-center my-4">Welcome To Cart Page...</h1>
                        <ListGroup>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item.id} className="border rounded p-2">
                                    <Row className="align-items-center text-center">
                                        <Col xs={3} className="d-flex justify-content-center">
                                            <Image src={item.image} thumbnail fluid style={{ maxWidth: "80px" }} />
                                        </Col>
                                        <Col xs={3}>{item.name} - ₹{item.price.toFixed(2)}</Col>
                                        <Col xs={3} className="d-flex justify-content-center align-items-center gap-2">
                                            <Button variant="warning" size="sm" onClick={() => dispatch(decrement(item))}>-</Button>
                                            <span>{item.quantity}</span>
                                            <Button variant="success" size="sm" onClick={() => dispatch(increment(item))}>+</Button>
                                        </Col>
                                        <Col xs={3} className="d-flex justify-content-center">
                                            <Button variant="danger" size="sm" onClick={() => dispatch(remove(item))}>Remove</Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <p className="mt-3 text-primary">Your Total Price: ₹{totalPrice.toFixed(2)}</p>
                        {discountPercentage > 0 && (
                        <>
                            <p className="text-success">Your Discount Percentage: {discountPercentage}%</p>
                            <p className="text-info">Your Discount Amount: ₹{discountAmount.toFixed(2)}</p>
                        </>
                        )}
                        <p className="text-danger fw-bold">Your Final Amount to Pay: ₹{finalAmount.toFixed(2)}</p>
                        <div className="mb-3 text-center">
                            {[10, 20, 30].map((discount) => (
                                <Button key={discount} variant="primary" size="sm" className="m-2" onClick={() => setDiscountPercentage(discount)}>
                                    Apply {discount}% discount
                                </Button>
                            ))}
                        </div>
                        <Form.Group className="mb-3 text-center">
                            <Form.Control
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter Coupon Code"
                                className="text-center"
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button variant="success" size="sm" className="m-3" onClick={handleCouponPercentage}>Apply Coupon Code</Button>
                        </div>
                        {couponCodeDiscountPercentage > 0 && (
                        <>
                            <p className="text-warning">Your Coupon Code Discount: ₹{couponDiscountAmount.toFixed(2)}</p>
                            <p className="text-danger fw-bold">Net Amount to Pay: ₹{netAmount.toFixed(2)}</p>
                        </>
                        )}
                        <div className="text-center">
                            <Button variant="success" onClick={handleCompletePurchase}>Complete Purchase</Button>
                        </div>
                    </div>
                ) : (
                    <p className="text-center" style={{color:'maroon', fontSize:50}}>
                        {isLoggedIn ? "Oops! Cart is empty!..." : "Please login to view your cart."}
                    </p>
                )}
            </Card>
        </Container>
    );
}

export default Cart;
