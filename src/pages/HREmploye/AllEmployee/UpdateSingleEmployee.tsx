import React, { useState, useEffect } from 'react'
import FeatherIcon from "feather-icons-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Form Editor

import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';




const UpdateSingleEmployee = () => {
    const [openOne, setOpenOne] = useState(false)
    const [openEdu, setOpenEdu] = useState(false)


    return (
        <div className="mt-4 mb-4">
            <div className="d-flex justify-content-center align-items-center  flex-column">
                <div className="w-100  bg-white">
                    <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                        Update Employee
                    </Button>
                    <div className="p-2">
                        <div className="d-flex justify-content-between align-items-center ">
                            <h4 className="fw-bold text-dark">Update Employee</h4>
                            <Link to="/apps/hremploye/allemployees" style={{ textDecoration: "none" }}>
                                <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                    Go Back
                                </Button>
                            </Link>
                        </div>

                        <Row>
                            <h4 className='fw-bold text-dark mt-4'>
                                <i className="fa-solid fa-plus" style={{ color: '#ee7e22 ' }} >
                                </i> Update <strong>Jhon Doe</strong> account.</h4>
                            <hr />
                            <Col md={3}>
                                <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Role
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold">
                                            <option>Nothing Selected</option>
                                            <option>Daraz</option>
                                            <option>Evaly</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Username
                                    </Form.Label>
                                    <div className="d-flex">
                                        <div className="icn w-25 border-start bg-light border-top border-bottom 
                                        rounded d-flex justify-content-center align-items-center">
                                            <i className="fa-solid fa-user fs-3 text-secondary "></i>
                                        </div>
                                        <Form.Control type="text" className="" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Image
                                    </Form.Label>
                                    <div className="d-flex">
                                        <img style={{ width: '35px', height: '35px', objectFit: 'cover', borderRadius: '50px' }} src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user-img" />
                                        <Form.Control type="file" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Password
                                    </Form.Label>
                                    <div className="d-flex">
                                        <div className="icn w-25 border-start bg-light border-top border-bottom rounde
                                         d-flex justify-content-center align-items-center">
                                            <i className="fa-solid fa-lock fs-3 text-secondary "></i>
                                        </div>
                                        <Form.Control type="text" className="" />
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                {
                                    openOne === true ?
                                        <Button variant='danger' className="text-white fw-bold mt-3" onClick={() => setOpenOne(false)}>
                                            Hide Personal Information
                                        </Button>
                                        :
                                        <Button variant="success" className="text-white fw-bold mt-3" onClick={() => setOpenOne(true)}>
                                            Update Personal Information
                                        </Button>
                                }
                            </Col>


                            <hr />
                            {
                                openOne &&
                                <>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Department Name
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>IT</option>
                                                    <option>Product</option>
                                                    <option>Management</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Designation Name
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Sr. Software Engineer</option>
                                                    <option>HR</option>
                                                    <option>Andriod Developer</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Branch Name
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Dhaka</option>
                                                    <option>Bandarban</option>
                                                    <option>Chattogram</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> WorkShift Name
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Day</option>
                                                    <option>Night</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Monthly Pay Grade
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Hourly Pay Grade
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>H-A</option>
                                                    <option>B-A</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Email
                                            </Form.Label>
                                            <div className="d-flex">
                                                <div className="icn w-25 border-start bg-light border-top border-bottom rounde
                                         d-flex justify-content-center align-items-center">
                                                    <i className="fa-solid fa-envelope fs-3 text-secondary "></i>
                                                </div>
                                                <Form.Control type="text" className="" />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Phone
                                            </Form.Label>
                                            <div className="d-flex">
                                                <div className="icn w-25 border-start bg-light border-top border-bottom rounde
                                         d-flex justify-content-center align-items-center">
                                                    <i className="fa-solid fa-phone fs-3 text-secondary"></i>
                                                </div>
                                                <Form.Control type="text" className="" />
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Gender
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Religion
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Islam</option>
                                                    <option>Hindu</option>
                                                    <option>Buddist</option>
                                                    <option>Christain</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date Of Birth
                                            </Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date Of Joining
                                            </Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Date Of Leaving
                                            </Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Marital Status
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Married</option>
                                                    <option>Unmarried</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Employment Status
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Probation</option>
                                                    <option>Permanent</option>
                                                    <option>Terminated</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Current Address
                                            </Form.Label>
                                            <Form.Control type="text" as="textarea" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Permanent Address
                                            </Form.Label>
                                            <Form.Control type="text" as="textarea" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Emergency Contact & details
                                            </Form.Label>
                                            <Form.Control type="text" as="textarea" />
                                        </Form.Group>
                                    </Col>
                                </>
                            }

                            <Col md={12}>
                                {
                                    openEdu === false ?
                                        <Button variant='success' className="text-white fw-bold mt-3" onClick={() => setOpenEdu(true)}>
                                            Update Educational Information
                                        </Button>
                                        :
                                        <Button className="lgnbtn text-white fw-bold mt-3" onClick={() => setOpenEdu(false)}>
                                            Hide Educational Information
                                        </Button>
                                }
                            </Col>
<hr />

                            {
                                openEdu &&
                                <>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Institute
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Board</option>
                                                    <option>University</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Institute
                                            </Form.Label>
                                            <div className="d-flex">
                                                <Form.Select className="fw-bold">
                                                    <option>Nothing Selected</option>
                                                    <option>Board</option>
                                                    <option>University</option>
                                                </Form.Select>
                                            </div>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Board / University
                                            </Form.Label>
                                            <Form.Control type='text' />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Degree
                                            </Form.Label>
                                            <Form.Control type='text' />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Passing Year
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Result
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                GPA / CGPA
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>

                                    <h4 className="text-dark fw-bold mt-3">Professional Information</h4>

                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Organization
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Designation
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                From Date
                                            </Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                To Date
                                            </Form.Label>
                                            <Form.Control type="date" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Responsibility
                                            </Form.Label>
                                            <Form.Control type="text" as="textarea" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group className="mb-2 mt-1 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                Skill
                                            </Form.Label>
                                            <Form.Control type="text" as="textarea" />
                                        </Form.Group>
                                    </Col>
                                </>
                            }
                        </Row>

                        <Col md={12}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    About Employe
                                </Form.Label>
                                <Form.Control type="text" as="textarea" />
                            </Form.Group>
                        </Col>

                        <div className="mb-3 pt-2">
                            <div className="text-start d-flex justify-content-center align-items-center">
                                <Button type="submit" className='lgnbtn text-white' >
                                    <span className='fw-bold'>Update</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateSingleEmployee       