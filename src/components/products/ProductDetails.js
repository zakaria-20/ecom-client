import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import styles from "./Product.module.css";
export default function ProductDetails(props) {
  return (
    <>
      {/* <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className="mt-2 mb-2">
        <Card key={props.data.id}>
          <Card.Img variant="top" src={props.data.thumbnail} />
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>{props.data.description} </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.data.price}</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col> */}
      <div className={styles.mainwrapper}>
        <div className={styles.container}>
          <div className={styles.productdiv}>
            <div className={styles.productdivleft}>
              <div className={styles.imgcontainer}>
                <img src={props.data.thumbnail} alt="watch" />
              </div>
            </div>
            <div className={styles.productdivright}>
              <span className={styles.productname}>{props.data.title}</span>
              <span className={styles.productprice}>{props.data.price}</span>
              <div className={styles.productrating}>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star-half-alt" />
                </span>
                <span>(350 ratings)</span>
              </div>
              <p className={styles.productdescription}>
                {props.data.description}
              </p>
              <div className={styles.btngroups}>
                <button type="button" className={styles.addcartbtn}>
                  <i className="fas fa-shopping-cart" />
                  add to cart
                </button>
                <button type="button" className={styles.buynowbtn}>
                  <i className="fas fa-wallet" />
                  buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
