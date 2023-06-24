import React from 'react';
import './Department.css';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';

interface LayoutType {
    id: number;
    name: string;
}
const NewDepartment = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
    return (
        <>

            {
                layout === "opened" ? <HREmployee /> : ''
            }

            <div className="mt-2 mb-4 p-3">
                <div className="w-100">
                    <div className="d-flex justify-content-end align-items-end mb-2">
                        <Link to="/apps/hremploye/departmen" style={{ textDecoration: "none" }}>
                            <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                Go Back
                            </Button>
                        </Link>
                    </div>
                    <div className="bg-white">
                        <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                            Add New Department
                        </Button>
                        <div className="p-2">
                            <div className="">
                                <Row>
                                    <Col md={4}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label className='fw-bold'>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Name
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label className='fw-bold'>
                                                Location
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group className="mb-2" controlId="formBasicPassword">
                                            <Form.Label>
                                                Choose Manager
                                            </Form.Label>
                                            <Form.Select className="fw-bold">
                                                <option>Not Selected</option>
                                                <option>Employee</option>
                                                <option>Manager</option>
                                                <option>Admin</option>
                                                <option>Accountant</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formBasicPassword">
                                            <Form.Label>
                                                Parent Department
                                            </Form.Label>
                                            <Form.Select className="fw-bold">
                                                <option>Not Selected</option>
                                                <option>Employee</option>
                                                <option>Manager</option>
                                                <option>Admin</option>
                                                <option>Accountant</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formBasicPassword">
                                            <Form.Label>
                                                Work Shift
                                            </Form.Label>
                                            <Form.Select className="fw-bold">
                                                <option>Not Selected</option>
                                                <option>Employee</option>
                                                <option>Manager</option>
                                                <option>Admin</option>
                                                <option>Accountant</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group className="mb-2" controlId="formBasicPassword">
                                            <Form.Label>
                                                Choose Manager
                                            </Form.Label>
                                            <Form.Control as="textarea" />
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewDepartment