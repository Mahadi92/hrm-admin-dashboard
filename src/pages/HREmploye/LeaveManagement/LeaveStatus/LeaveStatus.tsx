import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';
import Modal from 'react-bootstrap/Modal';

interface LayoutType {
    id: number;
    name: string;
}
const LeaveStatus = () => {

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className='mt-2 mb-4 p-3'>
                <div className="d-flex">
                    <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleShow}>
                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Assign Leave</span>
                    </Button>
                </div>

                <div className="mt-4">
                    <div className="bg-white">
                        <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                            Leave Status
                        </Button>
                        <div className="mt-2 p-2 d-flex justify-content-center align-items-center w-100">
                            <Form.Group className="mb-2 w-50" controlId="formBasicPassword">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Employee Name
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold">
                                        <option>Nothing Selected</option>
                                        <option>Arif</option>
                                        <option>Shadik</option>
                                        <option>Bokel</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicPassword">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> From Date
                                </Form.Label>
                                <Form.Control type='date' />
                            </Form.Group>
                            <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date
                                </Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group className="mt-2 ms-2" controlId="formBasicEmail">
                                <Button type="submit" className="lgnbtn fw-bold align-items-center" >
                                    Filter
                                </Button>
                            </Form.Group>
                        </div>
                        <>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Assign leave</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                  Employee  Name
                                                </Form.Label>
                                                <Form.Control type="text" className="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Leave Type
                                                </Form.Label>
                                                <div className="d-flex">
                                                    <Form.Select className="fw-bold text-secondary">
                                                    <option>not selected</option>
                                                        <option>Paid</option>
                                                        <option>Casual</option>
                                                        <option>Sick</option>
                                                    </Form.Select>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Leave Duration
                                                </Form.Label>
                                                <div className="d-flex">
                                                    <Form.Select className="fw-bold text-secondary">
                                                        <option>not selected</option>
                                                        <option>Single Day</option>
                                                        <option>Multi Day</option>
                                                        <option>Half Day</option>
                                                        <option>Hours</option>
                                                    </Form.Select>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                   End Date
                                                </Form.Label>
                                                <Form.Control type='date' className="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Reason Note
                                                </Form.Label>
                                                <Form.Control as="textarea" className="" />
                                            </Form.Group>
                                        </Col>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button className="lgnbtn" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>

                        <div className="d-flex mb-3 p-2">
                            <Row className='gy-2 w-100'>
                                <Col md={3}>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-dark">0</span> <br />
                                        <span className="fw-bold text-secondary">Employees on leave</span>
                                    </Button>
                                </Col>
                                <Col md={3}>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-success" >0 </span> <br />
                                        <span className="fw-bold text-success">Total Leave Hours</span>
                                    </Button>
                                </Col>
                                <Col md={3}>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-warning">0</span>   <br />
                                        <span className="fw-bold text-warning">On Leave <strong>(Single Day)</strong> </span>
                                    </Button>
                                </Col>
                                <Col md={3}>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-secondary">0</span>   <br />
                                        <span className="fw-bold text-secondary">On Leave <strong>(Multi day)</strong></span>
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div className="p-2">
                            <div className="staffSelec d-flex justify-content-between">
                                <div className="staffLeft d-flex w-100 justify-content-start">
                                    <div className="staffSize d-flex justify-content-start align-items-center">
                                        <span className="fw-bold text-dark me-1">show</span>
                                        <Form.Select className="rounded fw-bold">
                                            <option>5</option>
                                            <option>10</option>
                                            <option>14</option>
                                        </Form.Select>
                                        <span className="fw-bold text-dark ms-1">entries</span>
                                    </div>
                                </div>

                                <div className="staffSearch d-flex justify-content-start w-100">
                                    <div className="ms-auto d-flex justify-content-start">
                                        <Button variant="light d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                                            <FeatherIcon icon="search" style={{ width: '12px' }} />
                                        </Button>
                                        <Form className="d-flex" style={{ height: "30px" }}>
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                // className="me-2"
                                                aria-label="Search"
                                            />
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <div className="stafftable mt-2">
                                <div className="table-responsive">
                                    <Table bordered>
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary">S/L</th>
                                                <th className="fw-bolder border-end text-secondary text-center">Profile</th>
                                                <th className="fw-bolder text-center text-secondary">Date & Time</th>
                                                <th className="fw-bolder text-center text-secondary">Leave Duration</th>
                                                <th className="fw-bolder text-center text-secondary">Leave Type</th>
                                                <th className="fw-bolder text-center text-secondary">Attachments</th>
                                                <th className="fw-bolder text-center text-secondary">Activity</th>
                                                <th className="fw-bolder text-center text-secondary">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className='text-center d-flex justify-content-center align-items-center '>

                                                    <img src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profole-pic"
                                                        style={{ width: "40px", height: "40px", borderRadius: "50px", objectFit: 'cover' }} />
                                                    <div className="d-flex flex-column text-start ms-2">
                                                        <span>Jhon Doe</span>
                                                        <span className="text-secondary">Main Department</span>
                                                    </div>

                                                </td>
                                                <td className='text-center'>13/02/23</td>
                                                <td className='text-center'>2</td>
                                                <td className='text-center'>Paid Casual</td>
                                                <td className='text-center'>N/A</td>
                                                <td className='text-center'>14/02/23</td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Button variant="success d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                                                            <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                                                        </Button>
                                                        <Button variant="danger d-flex justify-content-center align-items-center ms-2" style={{ height: '30px' }}>
                                                            <i className="fa-solid fa-trash me-1"></i>  Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default LeaveStatus
