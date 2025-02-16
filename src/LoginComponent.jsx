import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./store"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";

function LoginComponent() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginCheck = (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert("Please fill in both fields.");
            return;
        }

        if (username === "balaji" && password === "Balaji@123") {
            dispatch(login(username));
            alert("Login successful!");
            navigate("/Home");
        } else {
            alert("Your credentials are wrong. Please check again.");
        }
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100">
            <Row className="justify-content-center w-100">
                <Col xs={12} sm={10} md={6} lg={4} className="w-100 px-3">
                    <Card className="shadow-lg" style={{ maxWidth: "450px", margin: "0 auto" }}>
                        <Card.Body>
                            <h2 className="text-center mb-4">Login User</h2><hr />
                            <Form onSubmit={loginCheck}>
                                <Form.Group className="mb-3 d-flex align-items-center">
                                    <Form.Label className="mb-0 me-3" style={{ width: "150px" }}>User Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter username"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 d-flex align-items-center">
                                    <Form.Label className="mb-0 me-3" style={{ width: "150px" }}>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter password"
                                    />
                                </Form.Group>
                                <Button type="submit" variant="primary" className="w-100">Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginComponent;
