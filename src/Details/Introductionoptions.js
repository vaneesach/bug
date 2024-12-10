import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Updated import

const Introduction = () => {
  const navigate = useNavigate();  // Updated hook

  // Navigate to the course outline page
  const handleViewDetails = () => {
    navigate('/course-details');  // Updated navigation to the new route
  };

  // Navigate to the ITCS page
  const handleStartCourse = () => {
    navigate('/itcs');  // Navigate to ITCS page when the button is clicked
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
            Course content
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
