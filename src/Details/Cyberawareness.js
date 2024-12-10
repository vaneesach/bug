import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CyberAwareness = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/cyber-awareness-details');  // Navigate to the Cyber Awareness Outline
  };

  const handleStartCourse = () => {
    navigate('/cafb');  // Navigate to the CAFB component for course content
  };

  return (
    <Container className="text-center mt-5">
      <Row className="mt-4">
        <Col>
          <Button variant="primary" size="lg" onClick={handleViewDetails}>
            View Outline
          </Button>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Button variant="success" size="lg" onClick={handleStartCourse}>
            Course Content
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CyberAwareness;
