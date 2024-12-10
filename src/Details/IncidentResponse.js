import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook

const IncidentResponse = () => {
  const navigate = useNavigate();  // Updated hook for navigation

  // Navigate to the Incident Response materials
  const handleViewDetails = () => {
    navigate('/incident-response-details');  // Navigate to the new Incident Response outline page
  };

  // Navigate to the next training module or quiz
  const handleStartCourse = () => {
    navigate('/start-incident-response');  // Navigate to start the training or quiz
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
          Course content          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default IncidentResponse;
