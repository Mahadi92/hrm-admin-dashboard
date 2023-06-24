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

const Summary = () => {
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
                <div className="d-flex">
                    {/* <Button type="submit" className="lgnbtn fw-bold align-items-center">
                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Assign Leave</span>
                    </Button> */}
                    <h3>Summary</h3>

                </div>
                <>
                    <Modal show={show} onHide={handleClose} size='lg' >
                        <Modal.Header closeButton>
                            <Modal.Title>Payslip</Modal.Title>
                        </Modal.Header>
                        <hr />
                        <Modal.Body>
                            <div className="d-flex w-100 h-100 justify-content-center align-items-center flex-column mb-3">
                                <img src={logo} alt="logo" className='img' style={{ width: '10rem', objectFit: 'contain' }} />
                                <h3>Payslip</h3>
                            </div>

                            <Row>
                                <Col md={3}>
                                    <div className="text-center d-flex justify-content-center align-items-center">
                                        <img src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profole-pic"
                                            style={{ width: "40px", height: "40px", borderRadius: "50px", objectFit: 'cover' }} />
                                        <div className="d-flex flex-column text-start ms-2">
                                            <span>Jhon Doe</span>
                                            <span className="text-secondary">Main Department</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <span>Payslip for : <strong className="text-primary">1 - 30 Apr 2023</strong></span>
                                    <br />
                                    <span>Created at : 29 May, 2023</span>
                                </Col>
                                <Col md={5}>
                                    <span>Designation : Chief Technology Officer (CTO)</span>
                                    <br />
                                    <span>Department : Development</span>
                                </Col>
                            </Row>
                            <div className="table-responsive mt-3 border-light">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold d-flex justify-content-between align-items-center">Basic Salary <span>$ 40000</span></td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold"><h4>Beneficiary</h4></td>
                                        </tr>
                                        <tr>
                                            <td className="text-secondary fw-bold">Allowances <span style={{ marginLeft: '15.5rem', fontWeight: 'bold' }}>Dedcution</span></td>
                                        </tr>
                                        <tr>
                                            <td className="text-secondary d-flex justify-content-between align-items-center">
                                                <small>Bonus(10%) <span style={{ marginLeft: '10.5rem', fontWeight: 'bold' }}>$ 4000</span></small>
                                                <small>Tax(10%) <span style={{ marginLeft: '19.88rem', fontWeight: 'bold' }}>$ 4000</span></small>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="text-secondary d-flex justify-content-between align-items-center">
                                                <span className="fw-bold fs-5">Total Allowance<span style={{ marginLeft: '7.5rem', fontWeight: 'bold' }}>$ 4000</span></span>
                                                <span className="fw-bold fs-5">Total Deduction(10%) <span style={{ marginLeft: '12.88rem', fontWeight: 'bold' }}>$ 4000</span></span>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="fw-bold d-flex justify-content-between align-items-center">Beneficiary Amount <span>$ 3200</span></td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold d-flex justify-content-between align-items-center">Net Payable Salary <span>$ 43200</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
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
                                        <th className="fw-bolder border-end text-secondary">S/L</th>
                                        <th className="fw-bolder border-end text-secondary text-center">Profile</th>
                                        <th className="fw-bolder text-center text-secondary">Payrun </th>
                                        <th className="fw-bolder text-center text-secondary w-100">Payrun period</th>
                                        <th className="fw-bolder text-center text-secondary">Payrun Type</th>
                                        <th className="fw-bolder text-center text-secondary">Status</th>
                                        <th className="fw-bolder text-center text-secondary">Salary</th>
                                        <th className="fw-bolder text-center text-secondary">Net Salary</th>
                                        <th className="fw-bolder text-center text-secondary">Details</th>
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
                                        <td className='text-center'>
                                            <span>1 - 30 Apr 2023 </span> <br />
                                            <small className="text-secondary">ID: MJJMNPC2</small>
                                        </td>
                                        <td className='text-center'>Monthly</td>
                                        <td className='text-center'>Default</td>
                                        <td className='text-center'>
                                            <Button variant="warning" size='sm' className='fw-bold'>
                                                Generated
                                            </Button>
                                        </td>
                                        <td className='text-center w-100'>$3000</td>
                                        <td className='text-center'>$2500</td>
                                        <td className='text-center'>
                                            <Button variant="secondary" size='sm' className='fw-bold' onClick={handleShow}>
                                                View
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

export default Summary 
