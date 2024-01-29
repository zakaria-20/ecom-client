import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import AdminSideNav from '../../components/adminstration/navigationBar/sideNav';
import AdminNavigationBar from '../../components/adminstration/navigationBar/navigationBar';
import BreadCrumb from '../../components/adminstration/navigationBar/breadCrumb';
 function MainAdminLayout({children}){
    return (
        <>

        <Container fluid className='p-0'>
            <Row className='m-0'>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='p-0'>
                    <AdminNavigationBar />
                </Col>
            </Row>
            <Row className='m-0'>
                <Col xxl={3} xl={3} lg={3} md={12} sm={12} xs={12} className='p-0'>
                    <AdminSideNav />
                </Col>
                <Col xxl={9} xl={9} lg={9} md={12} sm={12} xs={12} className='p-0'>
                    <Row className='ms-0 me-0 mt-4'>
                        <BreadCrumb />
                    </Row>
                    {children}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default MainAdminLayout;