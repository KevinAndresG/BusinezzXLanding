import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-3 footer ">
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h5 className="m-0 fw-bold">Contact Information:</h5>
            <p className="m-0">
              <span className="fw-bold">Email: </span>kevinandresgv@gmail.com
            </p>
            <p className="m-0">
              <span className="fw-bold">Phone: </span>+57 3117796748
            </p>
            <a
              className="m-0"
              href="https://kevinandresg.netlify.app/home"
              target="_blank"
            >
              https://kevinandresg.netlify.app/home
            </a>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h5 className="m-0 fw-bold">About this Delivery</h5>
            <p className="m-0">
              This project showcases a modern business landing page built using
              React and React-Bootstrap. The form includes validation and shows
              a modal upon successful submission, with a loader for feedback
              during form processing.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
