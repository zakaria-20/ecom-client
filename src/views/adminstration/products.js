import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { ShopContext } from "../../context/ShopContext";
import Addproducts from "../../components/productmodel/AddProduct";

function ListProduct() {
  const [show, setShow] = useState(false);
  const { data } = useContext(ShopContext);
  const { createProduct } = useContext(ShopContext);
  console.log("dataaaaaa", data);
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      //   id: Math.floor(Math.random() * 1000),
      id: data.length + 1,
      name,
      description,
      price: parseFloat(price),
    };
    createProduct(newProduct);
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <>
      <Row className="me-0 ms-0 mt-5">
        <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={11} className="p-0">
          <h3>List of Products</h3>
          <hr />
        </Col>
      </Row>
      <Row className="me-0 ms-0 mt-2">
        <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={11} className="p-0">
          {/* <a href="/addproduct"><Button variant="primary">Add Product</Button></a>  */}
          <Button variant="primary" onClick={() => setShow(true)}>
            Add Product
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>image</th>
                <th>Stock</th>
                <th>Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, id) => (
                <tr key={id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                    <Row>
                     
                        <Button variant="danger">
                          <a class="edit" title="Edit" data-toggle="tooltip">
                            <i class="material-icons">&#xE254;</i>
                          </a>
                        </Button>
                     
                     
                        <Button variant="danger" className="mt-3">
                          <i className="material-icons">&#xE872;</i>
                        </Button>
                     
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Addproducts
        show={show}
        handleClose={() => setShow(false)}
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        price={price}
        setPrice={setPrice}
        description={description}
        setDescription={setDescription}
      />
    </>
  );
}
export default ListProduct;
