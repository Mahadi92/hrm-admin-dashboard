import React, { useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import HREmployee from '../../HREmployee';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import logo from '../../../../assets/images/publicitix.png';

interface LayoutType {
    id: number;
    name: string;
}

const BeneficiaryBadge = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className="mt-2 mb-4  p-3">
                <div className="d-flex justify-content-between">
                    <h3>Beneficiary badge</h3>
                    <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleShow} size="sm">
                        <FeatherIcon icon="plus" className="me-1"  /> <span className="fs-5">Add badge</span>
                    </Button>
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
                                        Status
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold text-secondary">
                                            <option>not selected</option>
                                            <option>Active</option>
                                            <option>Inactive</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Beneficiary type
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold text-secondary">
                                            <option>not selected</option>
                                            <option>Allowance</option>
                                            <option>Deduction</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </Col>


                            <Col md={12}>
                                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Description
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
                <div className="mt-4 bg-white p-2">
                    <div className=" mt-2">
                        <div className="table-responsive">
                            <Table bordered>
                                <thead>
                                    <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                        <th className="fw-bolder border-end text-secondary">S/N</th>
                                        <th className="fw-bolder border-end text-secondary text-center">Employee Name</th>
                                        <th className="fw-bolder text-center text-secondary">Description</th>
                                        <th className="fw-bolder text-center text-secondary w-100">Type</th>
                                        <th className="fw-bolder text-center text-secondary">Status</th>
                                        <th className="fw-bolder text-center text-secondary">Created at</th>
                                        <th className="fw-bolder text-center text-secondary">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jhon Doe</td>
                                        <td className='text-center w-100'>N/A</td>
                                        <td className='text-center'>
                                            <Button variant="warning" size='sm' className='fw-bold'>
                                                Generated
                                            </Button>
                                        </td>

                                        <td className='text-center'>-</td>
                                        <td className='text-center'>-</td>
                                        <td className='text-center d-flex justify-content-between align-items-center'>
                                            <Button variant="warning" size='sm' className='fw-bold'>
                                                Edit
                                            </Button>
                                            <Button variant="danger" size='sm' className='fw-bold ms-2'>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BeneficiaryBadge
