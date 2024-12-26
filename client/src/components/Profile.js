import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Navbar, CardBody } from 'react-bootstrap';
import './Profile.css'; // Custom dark theme CSS
import Img from '../assets/chaima moalla1.jpg'
import cover from '../assets/1000_F_987272442_sgwuTD66EWDrdwJjutNUFWfwocOGFEwq.jpg';
import NavBar from './NavBar';
import Feed from './Feed';
const Profile = () => {
    return (
        <Container className="profile-page ">
            <NavBar/>
            {/* Header Section */}
            <Card className="mb-4 p-4 text-center header-card bg-dark text-white">
                <Card.Img
                    variant="top"
                    src={cover}
                    className="header-image"
                />
                <div className="profile-avatar-wrapper">
                    <img
                        src={Img}
                        alt="Profile"
                        className="profile-avatar"
                    />
                </div>
                <h2 className="mt-5">Chaima Moalla</h2>
                <p className="text-muted">Software Engineer | Web Developer</p>
            </Card>

            <Row>
                {/* Left Sidebar: Friends List */}
                <Col md={4}>
                    <Card className="mb-4 bg-secondary text-white">
                        <Card.Header as="h5" className="bg-dark">Friends List</Card.Header>
                        <ListGroup variant="flush">
                            {['Alice', 'Bob', 'Charlie', 'David'].map((friend, index) => (
                                <ListGroup.Item key={index} className="bg-dark text-white">
                                    {friend}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>

                {/* Main Content: Posts */}
                <Col md={8}>
                    <Card className="mb-4 text-white" style={{ backgroundColor: '#2C2C2C' }}>
                        <Card.Header as="h5" className="bg-dark">Posts</Card.Header>
                            <CardBody>
                            <Feed/>
                            <Feed/>
                            <Feed/>
                            </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
