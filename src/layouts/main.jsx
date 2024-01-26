import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import NavigationBar from '../components/NavigationBar/navBar';

 function MainLayout({children}){
    return (
        <>

        <Container fluid>
            <Row className='m-0'>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <NavigationBar />
                </Col>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>

                {children}
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default MainLayout;