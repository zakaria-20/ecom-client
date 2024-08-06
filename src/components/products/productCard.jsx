import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
//import Link from 'react-router-dom';
import { Link } from "react-router-dom";
import { ButtonGroup } from "react-bootstrap";
import { MyContext } from "../../context";
import {ShopContext} from "../../context/ShopContext";

function ProductCard() {
  const { p } = useContext(MyContext);
  const addToCart=useContext(ShopContext)
  return (
    <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="mt-2 mb-2">
      <Card key={p.id}>
        <Link to={`products/${p.id}`}></Link>
        <Card.Img variant="top" src={p.thumbnail} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text>{p.description} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={`products/${p.id}`}>Details</Link>
          <button onClick={()=>addToCart(p.id)}>Add to cart</button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;
