import React from 'react';
import { Card, Image, Button, ListGroup } from 'react-bootstrap';
import './FriendsList.css'; // Ensure this file is created

const friends = [
  { id: 1, name: 'chaima moalla', imgSrc: '../assets/' },
  { id: 2, name: 'chaima moalla', imgSrc: 'path_to_bob_image.jpg' },
  { id: 3, name: 'chaima moalla', imgSrc: 'path_to_carol_image.jpg' },
  // Add more friends as needed
];

const FriendsList = () => {
  return (
    <Card className="friends-list-card">
      <Card.Body>
        <Card.Title>Friends</Card.Title>
        <ListGroup variant="flush">
          {friends.map(friend => (
            <ListGroup.Item key={friend.id} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center flex-grow-1">
                <Image 
                  src={friend.imgSrc} 
                  roundedCircle 
                  className="friend-img"
                />
                <div className="ms-2">
                  <span className="friend-name ">{friend.name}</span>
                </div>
              </div>
              <div className="button-group">
                <Button variant="primary" size="sm">Message</Button>
                <Button variant="outline-danger" size="sm">Remove</Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default FriendsList;
