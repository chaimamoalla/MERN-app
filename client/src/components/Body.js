import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Body() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Login');
  };
  return (
    <Container className="my-4" style={{ paddingTop:'100px' }}> {/* Adds padding-top to move content down */}
    <Row>
      <Col>
        <h1 className="text-center text-light mb-4"style={{ fontSize:'57px' }}>Social Online Platform</h1> {/* Adds margin-bottom to the heading */}
        <h3 className="text-secondary text-center mb-4">for Tunisian IT community</h3> {/* Adds margin-bottom to the subheading */}
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        <Button onClick={handleClick} variant="primary" className="d-block mx-auto"style={{ width: '150px', backgroundColor: '#f72d7a'}}>Join Us</Button>
      </Col>
    </Row>
  </Container>
  );
}

export default Body;