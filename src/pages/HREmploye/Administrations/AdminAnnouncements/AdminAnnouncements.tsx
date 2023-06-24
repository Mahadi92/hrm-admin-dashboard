import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';
import Modal from 'react-bootstrap/Modal'


interface LayoutType {
    id: number;
    name: string;
}
const AdminAnnouncements = () => {

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
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Add Announcement</h3>
                    <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleShow}>
                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Add Announcement</span>
                    </Button>

                </div>
                <div className="mt-4">
                    <div className="bg-white">
                        <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                            Announcement Lists
                        </Button>


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
                            <>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Announcement</Modal.Title>
                                    </Modal.Header>
                                    <hr />
                                    <Modal.Body>
                                        <Row>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Title
                                                </Form.Label>
                                                <Form.Control type="text" className="" />
                                            </Form.Group>
                                        </Col>
                                        
                                        <Col md={6}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Start Date
                                                </Form.Label>
                                                <Form.Control type="date" className="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    End Date
                                                </Form.Label>
                                                <Form.Control type="date" className="" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Department
                                                </Form.Label>
                                                <div className="d-flex">
                                                    <Form.Select className="fw-bold text-secondary">
                                                        <option>not selected</option>
                                                        <option>All</option>
                                                        <option>HR</option>
                                                        <option>Main Department</option>
                                                        <option>Management</option>
                                                        <option>Software</option>
                                                        <option>Development</option>
                                                    </Form.Select>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col md={12}>
                                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Descriptions
                                                </Form.Label>
                                                <Form.Control as="textarea" className="" />
                                            </Form.Group>
                                        </Col>
                                        </Row>
                                        
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
                            <div className="stafftable mt-2">
                                <div className="table-responsive">
                                    <Table bordered>
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary">S/L</th>
                                                <th className="fw-bolder border-end text-secondary text-center">Title</th>
                                                <th className="fw-bolder text-center text-secondary">Department</th>
                                                <th className="fw-bolder text-center text-secondary">Start Date</th>
                                                <th className="fw-bolder text-center text-secondary">End Date</th>
                                                <th className="fw-bolder text-center text-secondary">Descriptions</th>
                                                <th className="fw-bolder text-center text-secondary">Created By</th>
                                                <th className="fw-bolder text-center text-secondary">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td className='text-center'>Holidy picnic</td>
                                                <td className='text-center'>All</td>
                                                <td className='text-center'>12/05/23</td>
                                                <td className='text-center'>14/05/23</td>
                                                <td className='text-center'>
                                                    picnic is available
                                                </td>
                                                <td className='text-center'>Admin</td>
                                                <td>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <Button className='ms-2' variant="success" style={{ height: '30px' }}>
                                                            Edit
                                                        </Button>
                                                        <Button className='ms-2' variant="danger d-flex" style={{ height: '30px' }}>
                                                            Delete
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

export default AdminAnnouncements
