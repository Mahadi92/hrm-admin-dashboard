import React, { useState } from 'react'
import FeatherIcon from "feather-icons-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
// Form Editor

import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Employee from '../Employee';


interface LayoutType {
    id: number;
    name: string;
}


const EmpNewleaveReq = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEndDate, setIsEndDate] = useState(false)
    // console.log('isEndDate', isEndDate)

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    return (
        <>
            {
                layout === "opened" ? <Employee /> : ''
            }
            <Employee />
            <div className="mt-2 p-3 mb-4">
                <div className="d-flex justify-content-center align-items-center  flex-column">
                    <div className="w-100  bg-white">
                        <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                            Add Leave Request
                        </Button>
                        <div className="p-2">
                            <div className="d-flex justify-content-between align-items-center ">
                                <h4 className="fw-bold text-dark">Add Leave Request</h4>
                                <Link to="/apps/employee/leavereq" style={{ textDecoration: "none" }}>
                                    <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                        Go Back
                                    </Button>
                                </Link>
                            </div>

                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Leave Type
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>Medical(5days)</option>
                                                <option>Casual(2days)</option>
                                                <option>Manual( days)</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Company
                                        </Form.Label>
                                        <Form.Control type="text" defaultValue="Rubytech" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Department
                                        </Form.Label>
                                        <Form.Control type="text" defaultValue="Management" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Designation
                                        </Form.Label>
                                        <Form.Control type="text" defaultValue="Manager" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Employee
                                        </Form.Label>
                                        <Form.Control type="text" defaultValue="asif" />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Start Date
                                        </Form.Label>
                                        <Form.Control type="text" onClick={() => {
                                            setIsOpen(true)
                                        }} />
                                    </Form.Group>
                                    <DatePicker
                                        isOpen={isOpen}
                                        onClose={() => setIsOpen(false)}
                                        defaultValue={new Date(2022, 8, 8)}
                                        minDate={new Date(2022, 10, 10)}
                                        maxDate={new Date(2023, 0, 10)}
                                        headerFormat='DD, MM dd'
                                    />
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> End Date
                                        </Form.Label>
                                        <Form.Control type="text" onClick={() => { setIsEndDate(true) }} />
                                    </Form.Group>
                                    <DatePicker
                                        isOpen={isEndDate}
                                        onClose={() => setIsEndDate(false)}
                                        defaultValue={new Date(2022, 8, 8)}
                                        minDate={new Date(2022, 10, 10)}
                                        maxDate={new Date(2023, 0, 10)}
                                        headerFormat='DD, MM dd'
                                    />
                                </Col>
                            </Row>


                            <Col md={12}>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>
                                        Description
                                    </Form.Label>
                                    <Form.Control type="text" as="textarea" />
                                </Form.Group>
                            </Col>

                            <div className="mb-3 pt-2">
                                <div className="text-start">
                                    <Button type="submit" className='lgnbtn'>
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

export default EmpNewleaveReq       