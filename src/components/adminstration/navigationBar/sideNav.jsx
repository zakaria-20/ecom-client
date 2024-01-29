import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import StyleSideNav from './sideNav.module.css'

export default function AdminSideNav(){
    return (
        <>
            <Row className='m-0'>
                <Col xxl={10} xl={10} lg={10} md={12} sm={12} xs={12} className={StyleSideNav.col}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/dashboard/categories">Categories</Nav.Link>
                        <Nav.Link href="/dashboard/products">Products</Nav.Link>
                        <Nav.Link href="/dashboard/orders">Orders</Nav.Link>
                        <Nav.Link href="/dashboard/users">Users & Permissions</Nav.Link>
                        <Nav.Link href="/dashboard/shipping">Shipping & Markets</Nav.Link>
                        <Nav.Link href="/dashboard/invoices">Payments & Invoices</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </>
    )
}