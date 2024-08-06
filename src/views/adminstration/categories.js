import React, { useState, useEffect, useContext } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { CategoryContext } from "../../context/CategoryContext";

function AdminCategoriesView() {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editCategory, setEditCategory] = useState(null);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const { categories, fetchCategories, addCategory, editCategory: editCategoryContext, removeCategory } = useContext(CategoryContext);

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setEditCategory(null);
    setFormData({ name: "", description: "" });
  };

  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      editCategoryContext(editCategory._id, formData);
    } else {
      addCategory(formData);
    }
    handleClose();
  };

  const handleEdit = (category) => {
    setEditCategory(category);
    setEditMode(true);
    setFormData({ name: category.name, description: category.description });
    handleShow();
  };

  const handleDelete = (category) => {
    removeCategory(category._id);
  };

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  
  console.log("categoryyyyyy",categories)
  return (
    <>
      <Row className="me-0 ms-0 mt-5">
        <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={11} className="p-0">
          <h3>List of Category</h3>
          <hr />
        </Col>
      </Row>
      <Row className="me-0 ms-0 mt-2">
        <Col xxl={11} xl={11} lg={11} md={11} sm={11} xs={11} className="p-0">
          <Button variant="primary" onClick={handleShow}>
            Add Category
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Description</th>
               <th>price</th>
               <th></th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((c, _id) => (
                <tr key={_id}>
                  <td>{c._id}</td>
                  <td>{c.name}</td>
                  <td>{c.description}</td>
                  
                  <td>
                    <Button onClick={() => handleEdit(c)} variant="primary">
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(c)}
                      className="ml-2"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editMode ? "Edit Category" : "Add Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {/* {editMode ? 'Edit' : 'Add'} */}
              {editMode ? "Edit" : "Add"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminCategoriesView;
