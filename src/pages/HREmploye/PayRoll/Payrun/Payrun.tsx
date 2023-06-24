import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import HREmployee from '../../HREmployee';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

interface LayoutType {
    id: number;
    name: string;
}
const Payrun = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Payrun (Default)</Modal.Title>
                    </Modal.Header>
                    <hr />
                    <Modal.Body>
                        <strong className="text-danger">All good, Just have a quick read!</strong>
                        <p className="text-dark">
                            You are going to add default payrun based on the settings or employee preference.
                            Please have a look on payrun generating for last month.
                        </p>
                        <div className="d-flex flex-column">

                            <p>
                                <span className="text-primary fw-bold">
                                    <i className="fa-solid fa-calendar-days text-secondary"></i> 01- 31 Mar, 23
                                </span>
                                <small className="text-secondary ms-2">Includes 3 employees</small>
                            </p>

                            <p>Monthly - None based | <span>
                                <strong className="text-primary">Manual</strong> - Followed by Customized</span>
                            </p>
                        </div>
                        <div className="table-responsive">
                            <Table hover>
                                <tbody>
                                    <tr>
                                        <td className="border-end d-flex justify-content-between">Earning <span>10%</span></td>
                                        <td className="border-end d-flex justify-content-between">Bonus <span>10%</span></td>
                                    </tr>
                                    <tr>
                                        <td className="border-end d-flex justify-content-between">Deduction -<span>10%</span></td>
                                        <td className="border-end d-flex justify-content-between">Tax -<span>10%</span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        {/* <Col md={12}>
                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Employee  Name
                                </Form.Label>
                                <Form.Control type="text" className="" />
                            </Form.Group>
                        </Col>
                         */}
                        <Col md={12}>
                            <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Payslip note (optional)
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
            <div className="'mt-2 mb-4 p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Payrun</h3>
                    <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleShow}>
                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Default Payrun</span>
                    </Button>
                </div>
                <div className="mt-4 ">
                    <Row className="bg-white">
                        <Col md={6}>
                            <div className="box shadow-sm w-100 h-100 p-3">
                                <div className="">
                                    <p>
                                        <span className="text-primary fw-bold">01- 31 Mar, 23 </span>
                                        <small className="text-secondary ms-2">Includes 3 employees</small>
                                    </p>
                                    <p>Monthly - None based | <span> <strong className="text-primary">Manual</strong> - Followed by Customized</span> </p>
                                    <p className="text-secondary fw-bold">ID: PROIITVI</p>
                                    <Button variant="outline-primary" className="fw-bold" size="sm">
                                        View Payslips
                                    </Button>
                                    <Button variant="outline-success" className="fw-bold mx-2" size="sm">
                                        <i className="fa-solid fa-download"></i> Export
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="shadow-sm w-100 h-100 p-3 ">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Button variant="secondary" className="fw-bold" size="sm">
                                        Generated
                                    </Button>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/apps/hremploye/payroll/payrun/update">
                                            <Button className="fw-bold" size="sm">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </Button>
                                        </Link>
                                        <Button className="fw-bold" size="sm">
                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                        </Button>
                                        <Button variant="success" className="fw-bold" size="sm">
                                            Send Payslip
                                        </Button>
                                    </div>
                                </div>
                                <div className="d-flex mt-2 align-items-center">
                                    <i className="fa-solid fa-calendar-days text-secondary"></i>
                                    <span className="ms-2 fw-bold text-secondary">Created At</span>
                                    <strong className="ms-2 text-primary">Today</strong>
                                </div>
                                <div className="d-flex mt-2 align-items-center">
                                    <i className="fa-sharp fa-solid fa-user-check text-secondary"></i>
                                    <span className="ms-2 fw-bold text-secondary">Not yet sent</span>
                                </div>
                                <div className="d-flex mt-2 align-items-center text-warning">
                                    <i className="fa-sharp fa-solid fa-flag text-warning"></i>
                                    <span className="ms-2 fw-bold text-warning">Payslip of 2 employees are conflicting</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default Payrun