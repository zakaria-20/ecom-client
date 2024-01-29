import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
export default function ProductDetails(props) {
  return (
    <>
      <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="mt-2 mb-2">
        <Card key={props.id}>
          <Card.Img variant="top" src="/assets/product.svg" />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description} </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </>
  );
}
