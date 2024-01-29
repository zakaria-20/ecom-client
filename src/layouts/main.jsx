import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar/navBar';

 function MainLayout({children}){
    return (
        <>

        <Container fluid className='p-0'>
            <Row className='m-0'>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='p-0'>
                    <NavigationBar />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12} className='p-0'>
                    {children}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default MainLayout;