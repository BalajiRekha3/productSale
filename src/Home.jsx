import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
            {/* Flex container for centering */}
            <Container className="d-flex flex-grow-1 align-items-center justify-content-center">
                <Row>
                    {/* Welcome Text */}
                    <h1 style={{ color: "purple" }}>Welcome To Home Page</h1>
                    <Col xs={12} className="text-center w-100">
                        {/* Image Section */}
                        <Image 
                            src="home.jpg" // Replace with your actual image URL
                            alt="Home Image" 
                            fluid 
                            className="mb-4"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
