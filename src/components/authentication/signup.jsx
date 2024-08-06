import React, { useState,useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import UserContext from '../../context/UserContext';
import { useNavigate } from "react-router-dom";

function SignupForm() {
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const { setUser, user } = useContext(UserContext)

    // const {signup}=useContext(UserContext)
    const navigate = useNavigate();
    const Register=async(data)=>{
        try {
                const response = await fetch(
                  "http://localhost:8001/api/v1/auth/sign-up",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  }
                );
          
                if (!response.ok) {
                  
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const userData = await response.json();
                setUser(userData);
                localStorage.setItem("user", JSON.stringify(userData));
                console.log("Sign-up successful:", userData);
              } catch (error) {
                
                console.error("Error =======:", error.message);
              }
    }

    const handsubmit =async(e)=>{
        e.preventDefault()
        await Register({username,email,password})
        navigate("/login")

    }

  return (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full name</Form.Label>
            <Form.Control type="text" placeholder="Enter your first and last name" value={username} onChange={(e)=>setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email address"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Create your password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
       
        <Button variant="primary" href='/dashboard' onClick={handsubmit}>
            Create account
        </Button>
    </Form>
  );
}

export default SignupForm;

