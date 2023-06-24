import React, { useState, useEffect } from 'react'
import FeatherIcon from "feather-icons-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Form Editor

import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import HREmployee from '../../HREmployee';

interface LayoutType {
    id: number;
    name: string;
}


const NewPromotion = () => {

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");



    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }

            <div className="mt-2 p-3 mb-4">

                <div className="d-flex justify-content-center align-items-center  flex-column">
                    <div className="w-100  bg-white">
                        <Button variant="success" className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                            Add New Promotion
                        </Button>
                        <div className="p-2">


                            <div className="d-flex justify-content-between align-items-center ">
                                <h4 className="fw-bold text-dark">Add New Termination</h4>
                                <Link to="/apps/hremploye/Promotions" style={{ textDecoration: "none" }}>
                                    <Button type="submit" variant="success" className="fw-bold align-items-center">
                                        Go Back
                                    </Button>
                                </Link>
                            </div>

                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Employee Name
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>Arif</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Department
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>Development</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Designation
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>Development</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Pay Grade
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Salary
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> promotion.promoted_pay_grade
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> promotion.new_salary
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> promotion.new_salary
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Promoted Designation
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Promotion Date
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Description
                                        </Form.Label>
                                        <Form.Control as="textarea" type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="mb-3 pt-2">
                                <div className="text-start">
                                    <Button type="submit" variant="success">
                                        <span className='fw-bold'>Save</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default NewPromotion   