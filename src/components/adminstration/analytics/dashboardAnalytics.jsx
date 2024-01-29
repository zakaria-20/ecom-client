import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import StyleDashboardAnalytics from './dashboardAnalytics.module.css'
export default function DashboardAnalytics(){
    return (
        <>
            
                <Row className="m-0">
                    <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12} className={StyleDashboardAnalytics.ResultsContainer}>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <h4>Total income</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12} className={StyleDashboardAnalytics.ResultsContainer}>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <h4>Today's income</h4>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={12} xs={12} className={StyleDashboardAnalytics.ResultsContainer}>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <h4>Total income</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            
        
        </>
    )
}