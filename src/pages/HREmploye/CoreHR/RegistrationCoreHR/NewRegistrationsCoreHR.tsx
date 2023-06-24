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


const NewRegistrationsCoreHR = () => {

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className="mt-2 p-3 mb-4">
                <div className="d-flex justify-content-center align-items-center  flex-column">
                    <div className="w-100  bg-white">
                        <Button variant="success" style={{ cursor: 'none' }} className="w-100 fs-4 fw-bold align-items-start rounded-0">
                            Add Registration
                        </Button>
                        <div className="p-2">
                            <div className="d-flex justify-content-between align-items-center ">
                                <h4 className="fw-bold text-dark">Add New Registration</h4>
                                <Link to="/apps/hremploye/corehr/Registration" style={{ textDecoration: "none" }}>
                                    <Button type="submit" variant="success" className="fw-bold align-items-center">
                                        Go Back
                                    </Button>
                                </Link>
                            </div>

                            <Row>
                                <Col md={3}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Comany Name
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>Daraz</option>
                                                <option>Evaly</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Employee Name
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>Arif</option>
                                                <option>Sahid</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Deparment
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>Chill</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={3}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Notice Date
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>

                                <Col md={3}>
                                    <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Registration Date
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Col md={12}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Description
                                    </Form.Label>
                                    <Form.Control type="text" as="textarea" />
                                </Form.Group>
                            </Col>

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

export default NewRegistrationsCoreHR      