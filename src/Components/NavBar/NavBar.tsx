import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-3 w-100 nav">
      <div className="mx-navbar d-flex align-items-center position-relative justify-content-between w-100">
        <img width="26" height="30" className="nav-logo" src={logo} alt="" />
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="position-absolute end-0 top-0"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items">
            <Nav.Link className="nav-item fw-bold" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav-item fw-bold" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="nav-item fw-bold" href="#pages">
              Pages ▾
            </Nav.Link>
            <Nav.Link className="nav-item fw-bold" href="#packages">
              Packages
            </Nav.Link>
            <Nav.Link className="nav-item fw-bold" href="#contact">
              Contact
            </Nav.Link>
            <Nav.Link className="nav-item fw-bold" href="#cart">
              Cart [0]
            </Nav.Link>
          </Nav>
          <Button className="rounded-pill ms-auto nav-btn fw-bold">
            Free Consultation →
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
