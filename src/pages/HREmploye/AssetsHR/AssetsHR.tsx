import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import HREmployee from '../HREmployee';

interface LayoutType {
    id: number;
    name: string;
    // add more properties as needed
}


const AssetsHR = () => {

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const  handleShowEditClose = () => setShowEdit(false);
    const handleShowEditOpen = () => setShowEdit(true);
    return (
        <>
            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className='mt-2 p-3'>
                <div className="kbbtnbox d-flex justify-content-between align-items-center">
                    <h3>Assets</h3>
                    <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleShow}>
                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Add Asset</span>
                    </Button>
                </div>

                <>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Add Asset</Modal.Title>
                        </Modal.Header>
                        <hr />
                        <Modal.Body>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Asset Name
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            Asset Code
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            Asset Serial Number
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Asset Type
                                        </Form.Label>
                                        <Form.Select className="fw-bold">
                                            <option>Not Selected</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Is Working
                                        </Form.Label>
                                        <Form.Select className="fw-bold">
                                            <option>Not Selected</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                            <option>Maintenance</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            Date
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Assigned Employee
                                        </Form.Label>
                                        <Form.Select className="fw-bold">
                                            <option>Not Selected</option>
                                            <option>Jhony Bairstow</option>
                                            <option>Brandon </option>
                                            <option>Taylors</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Note
                                        </Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button className='lgnbtn'>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </>


                <>
                    <Modal
                        show={showEdit}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Asset</Modal.Title>
                        </Modal.Header>
                        <hr />
                        <Modal.Body>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Asset Name
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            Asset Code
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            Asset Serial Number
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Asset Type
                                        </Form.Label>
                                        <Form.Select className="fw-bold">
                                            <option>Not Selected</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Is Working
                                        </Form.Label>
                                        <Form.Select className="fw-bold">
                                            <option>Not Selected</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                            <option>Maintenance</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label className='fw-bold'>
                                            Date
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Assigned Employee
                                        </Form.Label>
                                        <Form.Select className="fw-bold">
                                            <option>Not Selected</option>
                                            <option>Jhony Bairstow</option>
                                            <option>Brandon </option>
                                            <option>Taylors</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Note
                                        </Form.Label>
                                        <Form.Control as="textarea" />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleShowEditClose}>
                                Close
                            </Button>
                            <Button className='lgnbtn'>Save</Button>
                        </Modal.Footer>
                    </Modal>
                </>
                <div className="mt-4 bg-white">
                    <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                        Assets List
                    </Button>
                    <div className="p-2">
                        <div className="stafftable mt-2">
                            <div className="table-responsive">
                                <Table >
                                    <thead>
                                        <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                            <th className="fw-bolder border-end text-secondary">S/L</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Asset Name</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Asset Type</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Asset Serial Number</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Asset Code</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Employee</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Date</th>
                                            <th className="fw-bolder border-end text-secondary text-center">Note</th>
                                            <th className="fw-bolder text-center text-secondary">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0</td>
                                            <td className='text-center'>HR</td>
                                            <td className='text-center'>HR</td>
                                            <td className='text-center'>HR</td>
                                            <td className='text-center'>HR</td>
                                            <td className='text-center'>HR</td>
                                            <td className='text-center'>HR</td>
                                            <td className='text-center'>HR</td>
                                            <td className="text-center d-flex justify-content-center align-items-center">
                                                <div className="d-flex">
                                                    <Button onClick={handleShowEditOpen} variant="info" size="sm">
                                                        <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                                                    </Button>
                                                    <Button variant="danger" className='ms-2' size="sm">
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
        </>
    )
}

export default AssetsHR
