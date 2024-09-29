import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import SubmitModal from "./Components/SubmitModal/SubmitModal";
import { IForm } from "./Core/Models/Form";

function App() {
  const [formData, setFormData] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<IForm>({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const formErrors: IForm = { name: "", email: "", message: "" };
    let valid = true;

    if (!formData.name) {
      formErrors.name = "Name is required.";
      valid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid.";
      valid = false;
    }

    if (!formData.message) {
      formErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* NavBar */}
      <NavBar />

      {/* Home Section */}
      <Container fluid className="flex-grow-1">
        <Row className="min-vh-100">
          <Col
            md={6}
            className="bg-welcome-section position-relative text-white d-flex flex-column pt-welcome-section"
          >
            <div className="data">
              <div className="mb-4">
                <span className="text-welcome text-white px-3 py-2 rounded-pill">
                  Welcome to Businezz X
                </span>
              </div>
              <h1 className="display-4 fw-bold pb-title lh-title letter-sp-1">
                Join us in growing your{" "}
                <span className="border-welcome">business.</span>
              </h1>
              <p className="mb-5 mt-4 font-welcome-desc">
                Elevate your business with Businezz X, a <br />
                professional Webflow template.
              </p>
              <div>
                <Button className="rounded-pill welcome-contact fw-bold">
                  Contact us →
                </Button>
              </div>
            </div>
            <div className="light-shadow"></div>
          </Col>
          <Col
            md={6}
            className="d-flex min-vh-100 justify-content-center form-container"
          >
            <div className="px-4 bg-white rounded-1 form">
              <Button className="rounded-pill fw-bold form-top-btn">
                Book your free consultation
              </Button>
              <h2 className="mb-4 fs-3 lh-title form-title fw-bold">
                Get a free consultation
              </h2>
              <Form className="w-100" onSubmit={handleSubmit}>
                <Row className="form-rows">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-2 form-input fw-bold"
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="contact@email.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-2 form-input fw-bold"
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Please type your message here..."
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-input fw-bold"
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 form-submit-btn fw-bold"
                >
                  Get in Touch
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer */}

      <Footer />

      {/* Modal */}
      <SubmitModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        loading={loading}
        formData={formData}
      />
    </div>
  );
}

export default App;
