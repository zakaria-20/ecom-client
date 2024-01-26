import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function HomeCategoriesLayout({children}){
    return (
        <>
            <Row className='me-0 ms-0 mt-4'>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='text-center'>
                    <h1>Browse Categories</h1>
                    <hr />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Row className='justify-content-center'>
                        {children}
                    </Row>
                </Col>
            </Row>
        </>
    )
}