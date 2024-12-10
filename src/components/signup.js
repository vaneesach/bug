import React from "react";
import { Form, Button, Container } from "react-bootstrap";

export const SignupPage = () => {
  return (
    <Container className="auth-container">
      <div className="auth-box animate-slide">
        <h2 className="auth-title">Sign Up</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-4 auth-button">
            Sign Up
          </Button>
        </Form>
      </div>
    </Container>
  );
};
