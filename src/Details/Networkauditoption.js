import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Updated import

const NetworkAudit = () => {
  const navigate = useNavigate();  // Updated hook

  // Navigate to the course outline page
  const handleViewOutline = () => {
    navigate('/course-outline');  // Updated navigation
  };

  // Navigate to the NSF content page
  const handleTestKnowledge = () => {
    navigate('/nsf');  // Navigate to the NSF page
  };

  return (
    <Container className="text-center mt-5">
      <Row className="mt-4">
        <Col>
          <Button variant="primary" size="lg" onClick={handleViewOutline}>
            View Outline
          </Button>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Button variant="success" size="lg" onClick={handleTestKnowledge}>
            Course content
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NetworkAudit;
