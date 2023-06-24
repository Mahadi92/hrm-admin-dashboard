import React, { useState } from 'react';
import { Button, Col } from 'react-bootstrap';
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

const EmpHRstatus = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className='mt-2 p-3 mb-4'>
                <div className="d-flex justify-content-between align-items-center">
                    <h4>Employment Status</h4>
                    <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleShow}>
                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Add Employment Status</span>
                    </Button>

                </div>

                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Employment Status</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col md={12}>
                                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Name
                                    </Form.Label>
                                    <Form.Control type="text" className="" />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Color Value
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold text-secondary">
                                            <option>success</option>
                                            <option>secondary</option>
                                            <option>warning</option>
                                            <option>danger</option>
                                            <option>priamry</option>
                                            <option>lgnbtn</option>
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
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="warning" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>

                <div className="mt-4 bg-white">
                    <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                        Employment Status
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
                        <div className="stafftable mt-2">
                            <div className="table-responsive">
                                <Table >
                                    <thead>
                                        <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                            <th className="fw-bolder border-end text-secondary">S/L</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Name</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Preview</th>
                                            <th className="fw-bolder text-center text-secondary">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td className='text-center'>Terminated</td>
                                            <td className='text-center'>
                                                <Button variant="danger" style={{ height: '30px' }}>
                                                    <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                                                </Button>
                                            </td>
                                            <td className="text-center d-flex justify-content-center align-items-center">
                                                <div className="d-flex">
                                                    <Button variant="success d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                                                        <i className="fa-solid fa-pen-to-square me-1"></i> 
                                                    </Button>
                                                    {/* <Button variant="danger d-flex justify-content-center align-items-center ms-2" style={{ height: '30px' }}>
                                                        <i className="fa-solid fa-trash me-1"></i>  Delete
                                                    </Button> */}
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
        </>
    )
}

export default EmpHRstatus