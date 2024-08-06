import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      console.log("Login data:", data);
      const response = await fetch(
        "http://localhost:8001/api/v1/auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
       
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const userData = await response.json();
      setUser(userData);
      console.log("user:", userData);
      localStorage.setItem("user", JSON.stringify(userData));

     
      return { success: true, message: "Login successful" };
    } catch (error) {
     
      return { success: false, message: error.message || "Failed to login" };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({ email, password });

      // Check if response is defined
      if (response) {
        // Check if login was successful
        if (response.success) {
          // Navigate to the desired page or perform any other action
          //navigate("/");
          console.log("dakchi nadi")
        } else {
          // Set error message only if login was not successful
          setError(response.message || "Failed to login");
        }
      } else {
        // Handle case where response is undefined
        setError("Failed to get response from server");
      }
    } catch (error) {
      setError(error.message || "Failed to login");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      {/* <div>{user&&!user.success?user.message:''}</div> */}
      {<div className="text-danger"> {error}</div>}
      <Button variant="primary" onClick={handleSubmit}>
        Log in
      </Button>
    </Form>
  );
}

export default LoginForm;
