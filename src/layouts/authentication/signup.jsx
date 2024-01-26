import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SignupFormLayout({children}){
    return (
        <>
            <Row className="justify-content-center mt-5">
                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
                    <h1>Create new account</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} >
                    {children}
                </Col>
            </Row>
        </>
    )
}