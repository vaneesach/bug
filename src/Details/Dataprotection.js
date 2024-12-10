import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate hook

const DataProtection = () => {
  const navigate = useNavigate();  // Updated hook for navigation

  // Navigate to the Data Protection materials
  const handleViewDetails = () => {
    navigate('/data-protection-details');  // Navigate to a new page with details
  };

  // Navigate to the next training module or quiz
  const handleStartCourse = () => {
    navigate('/start-data-protection');  // Navigate to start the training or quiz
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

export default DataProtection;
