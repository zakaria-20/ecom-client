import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupForm() {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first and last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Create your password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Repeat your password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Create account
        </Button>
    </Form>
  );
}

export default SignupForm;

