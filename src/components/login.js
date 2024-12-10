import React, { useState } from "react";
import { Form, Button, Container, Modal } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { SignupPage } from "./signup";

export const LoginPage = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleSignupModalOpen = () => setShowSignupModal(true);
  const handleSignupModalClose = () => setShowSignupModal(false);

  return (
    <Container className="auth-container">
      <div className="auth-box animate-slide">
        <h2 className="auth-title">Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4 auth-button">
            Login
          </Button>
        </Form>
        <div className="text-end mt-3">
          <Link to="#" onClick={handleSignupModalOpen} className="signup-link">
            Don’t have an account? Sign Up
          </Link>
        </div>
      </div>

      {/* Signup Modal */}
      <Modal show={showSignupModal} onHide={handleSignupModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupPage />
        </Modal.Body>
      </Modal>
    </Container>
  );
};
