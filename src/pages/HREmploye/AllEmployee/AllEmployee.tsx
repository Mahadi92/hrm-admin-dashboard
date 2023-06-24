import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';
import HREmployee from '../HREmployee';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';

interface LayoutType {
    id: number;
    name: string;
}
const AllEmployee = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className='mt-4 p-2'>
                <div className="d-flex justify-content-between align-items-center text-dark">
                    <h3>All Employees</h3>
                    <Link to="/apps/hremploye/manageemploye/addnew">
                        <Button type="submit" className="lgnbtn fw-bold align-items-center">
                            <FeatherIcon icon="plus" className="me-1" style={{ width: '22px', color: 'white' }} />
                            <span className="fs-5 text-white">Add Employee</span>
                        </Button>
                    </Link>

                </div>

                <div className="empcards mt-2">
                    <Row>
                        <Col md={3}>
                            <Card >
                                <div className="d-flex justify-content-center align-items-center w-100 h-100 mt-4">
                                    <Card.Img className="ms-4" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50px' }} src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

                                    <div className="border border-light rounded rounded-circle">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <i className="fa-solid fa-angle-down"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/singleview" className='text-decoration-none text-dark fw-bold'>
                                                        View details
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/allemployees/single/update" className='text-decoration-none text-dark fw-bold'>
                                                        Edit
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Terminate</Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Remove</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
                                    <Card.Title className='fw-bold'>John Doe</Card.Title>
                                    <small className="text-secondary">Technical lead engineer</small>
                                    <small className='text-secondary'>TrsiqGZdv4</small>
                                    <Button className='lgnbtn my-2' size='sm'>Probation</Button>
                                    <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                                        <span className="text-secondary">UI & UX</span>
                                        <span className="text-secondary">Regular work shift</span>
                                        <Link to="/apps/hremploye/singleview" className="mt-2 fw-bold">View details</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card >
                                <div className="d-flex justify-content-center align-items-center w-100 h-100 mt-4">
                                    <Card.Img className="ms-4" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50px' }} src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                    <div className="border border-light rounded rounded-circle">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <i className="fa-solid fa-angle-down"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/singleview" className='text-decoration-none text-dark fw-bold'>
                                                        View details
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/allemployees/single/update" className='text-decoration-none text-dark fw-bold'>
                                                        Edit
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Terminate</Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Remove</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
                                    <Card.Title className='fw-bold'>John Doe</Card.Title>
                                    <small className="text-secondary">Technical lead engineer</small>
                                    <small className='text-secondary'>TrsiqGZdv4</small>
                                    <Button className='lgnbtn my-2' size='sm'>Probation</Button>
                                    <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                                        <span className="text-secondary">UI & UX</span>
                                        <span className="text-secondary">Regular work shift</span>
                                        <Link to="/apps/hremploye/singleview" className="mt-2 fw-bold">View details</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card >
                                <div className="d-flex justify-content-center align-items-center w-100 h-100 mt-4">
                                    <Card.Img className="ms-4" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50px' }} src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                    <div className="border border-light rounded rounded-circle">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <i className="fa-solid fa-angle-down"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/singleview" className='text-decoration-none text-dark fw-bold'>
                                                        View details
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/allemployees/single/update" className='text-decoration-none text-dark fw-bold'>
                                                        Edit
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Terminate</Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Remove</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
                                    <Card.Title className='fw-bold'>John Doe</Card.Title>
                                    <small className="text-secondary">Technical lead engineer</small>
                                    <small className='text-secondary'>TrsiqGZdv4000</small>
                                    <Button className='lgnbtn my-2' size='sm'>Probation</Button>
                                    <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                                        <span className="text-secondary">UI & UX</span>
                                        <span className="text-secondary">Regular work shift</span>
                                        <Link to="/apps/hremploye/singleview" className="mt-2 fw-bold">View details</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card >
                                <div className="d-flex justify-content-center align-items-center w-100 h-100 mt-4">
                                    <Card.Img className="ms-4" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50px' }} src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                    <div className="border border-light rounded rounded-circle">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                <i className="fa-solid fa-angle-down"></i>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/singleview" className='text-decoration-none text-dark fw-bold'>
                                                        View details
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Link to="/apps/hremploye/allemployees/single/update" className='text-decoration-none text-dark fw-bold'>
                                                        Edit
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Terminate</Dropdown.Item>
                                                <Dropdown.Item className='text-decoration-none text-dark fw-bold'>Remove</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <Card.Body className='d-flex justify-content-center align-items-center flex-column text-center'>
                                    <Card.Title className='fw-bold'>John Doe</Card.Title>
                                    <small className="text-secondary">Technical lead engineer</small>
                                    <small className='text-secondary'>TrsiqGZdv4</small>
                                    <Button className='lgnbtn my-2' size='sm'>Probation</Button>
                                    <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                                        <span className="text-secondary">UI & UX</span>
                                        <span className="text-secondary">Regular work shift</span>
                                        <Link to="/" className="mt-2 fw-bold">View details</Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </div >
        </>
    )
}

export default AllEmployee