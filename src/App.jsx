import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import VegItems from "./VegItems";
import NonVeg from "./NonVeg";
import Milk from "./Milk";
import Cart from "./Cart";
import Orders from "./Orders";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import LoginComponent from "./LoginComponent";
import store, { logout } from "./store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import PageNotFound from "./PageNotFound";


function App() {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {/* Fixed Full-Width Navbar */}
          <Navbar className="bg-success w-100 fixed-top" expand="lg" variant="dark" style={{ zIndex: 1000 }}>
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 d-flex justify-content-between">
                  <Nav.Link as={Link} to="/Home" className="text-light"><i class="fa-solid fa-house"></i> Home</Nav.Link>
                  <Nav.Link as={Link} to="/Veg" className="text-light"><i class="fa-solid fa-carrot"></i> Veg</Nav.Link>
                  <Nav.Link as={Link} to="/nonVeg" className="text-light"><i class="fa-solid fa-drumstick-bite"></i> Nonveg</Nav.Link>
                  <Nav.Link as={Link} to="/milk" className="text-light"><i class="fa-solid fa-cow"></i> Milk</Nav.Link>
                  <Nav.Link as={Link} to="/cart" className="text-light"><i class="fa-solid fa-cart-shopping"></i>
                     Cart ({totalItems})
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orders" className="text-light"><i class="fa-solid fa-bars"></i> Orders</Nav.Link>
                  <Nav.Link as={Link} to="/aboutUs" className="text-light"><i class="fa-solid fa-address-card"></i> About</Nav.Link>
                  <Nav.Link as={Link} to="/contactUs" className="text-light"><i class="fa-regular fa-address-book"></i> Contact</Nav.Link>
                  {isAuthenticated ? (
                    <>
                      <Nav.Item className="me-2">
                        <span style={{ color: 'white' }}>Welcome, {user}!</span>
                      </Nav.Item>
                      <Nav.Item>
                        <Button style={{ backgroundColor: 'white', color: 'green' }} 
                          variant="outline-light" onClick={() => dispatch(logout())}> <i class="fa-solid fa-right-from-bracket"></i> Logout
                        </Button>
                      </Nav.Item>
                    </>
                  ) : (
                    <Nav.Link as={Link} to="/login" className="text-light"><i class="fa-solid fa-right-to-bracket"></i> Login</Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Add margin to avoid content going under navbar */}
          <Container fluid className="vh-100" style={{ marginTop: '60px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Veg" element={<VegItems />} />
              <Route path="/nonVeg" element={<NonVeg />} />
              <Route path="/milk" element={<Milk />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
