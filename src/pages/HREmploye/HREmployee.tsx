import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FeatherIcon from "feather-icons-react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './HREmployee.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const HREmployee = () => {
  const getHREmployee = JSON.parse((localStorage.getItem('apps-hr-employe')) || '')
  console.log(getHREmployee?.children)

  
  // console.log(getHREmployee?.children.map((data: { label: any }) => data.label))

  // const [activeLink, setActiveLink] = useState('');
  // const activePage = window.location.pathname;
  // const navLinks = document.querySelectorAll('nav a Link').forEach(link => {
  //   if ((link as HTMLAnchorElement).href.includes(`${activePage}`)) { 
  //     console.log(`${activePage}`);
  //     link.classList.add("active");
  //   }
  // });

  const pathname = window.location.pathname
  // console.log('hremploye', pathname)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showemargency, setshowemargency] = useState(false);

  const handleCloseEmmargency = () => setshowemargency(false);
  const handleShowEmmargency = () => setshowemargency(true);

  return (
    <div>
      <div className="container">
        <div className="mt-2 d-flex ms-1 my-3 flex-wrap">
          {
             getHREmployee?.children.map((data: {
               icon: any; children: any; label: any
              }) => (
              <div className="d-flex flex-wrap border align-items-center justify-content-start bg-white me-2 mb-2">
              <Dropdown style={{backgroundColor:'none'}}>
                <FeatherIcon icon={data?.icon} className="ms-2" style={{ width: '17px', color: '#1f1d1dde' }} />
              <Dropdown.Toggle id="dropdown-basic">
                {data?.label}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{background:'#fff'}}>
              {data?.children.map((child: {
                          icon: any;
                          url: string | undefined;
                          label: any;
                        }) => (
                          <Dropdown.Item  className="dropdown-item">
                              <Link to={child?.url ? child.url : ''} className='dplink'>
                              <FeatherIcon icon={child?.icon} className="me-1 dplink text-secondary" style={{ width: '17px' }} />
                               {child?.label}
                              </Link>
                              </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
            <span className="arrow-down text-dark me-2"></span>
            </Dropdown>
        </div>

            ))
          }
     
        </div>
      </div>
      {
        pathname === '/apps/admin/hremployee' ?
          <>
            {/* <div className='mt-3 mb-3 p-3'>
              <div className="mt-4">
                <div className="bg-white">
                  <Button variant="success" style={{ cursor: 'none' }} className="w-100 fs-4 fw-bold align-items-start rounded-0">
                    Employee Attandance
                  </Button>
                  <div className="mt-2 p-2 d-flex justify-content-center align-items-center w-100">
                    <Form.Group className="mb-2 w-50" controlId="formBasicPassword">
                      <Form.Label>
                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Department
                      </Form.Label>
                      <div className="d-flex">
                        <Form.Select className="fw-bold">
                          <option>Nothing Selected</option>
                          <option>IT</option>
                          <option>Development</option>
                          <option>Garments</option>
                        </Form.Select>

                      </div>
                    </Form.Group>
                    <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicEmail">
                      <Form.Label>
                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date
                      </Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mt-2 ms-2" controlId="formBasicEmail">
                      <Button type="submit" variant="primary" className="fw-bold align-items-center" >
                        Filter
                      </Button>
                    </Form.Group>
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
                              <th className="fw-bolder border-end text-secondary text-center">Fingerprint No.</th>
                              <th className="fw-bolder text-center text-secondary">Employee Name</th>
                              <th className="fw-bolder text-center text-secondary">In Time</th>
                              <th className="fw-bolder text-center text-secondary">Out Time</th>
                              <th className="fw-bolder text-center text-secondary">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td className='text-center'>101</td>
                              <td className='text-center'>Arif</td>
                              <td className='text-center'>
                                <Form.Group className="mb-2 w-100" controlId="formBasicEmail">

                                  <Form.Control type="time" placeholder='12:10pm' />
                                </Form.Group>
                              </td>
                              <td className='text-center'>
                                <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                  <Form.Control type="time" placeholder='6:10pm' />
                                </Form.Group>
                              </td>
                              <td className="text-center d-flex justify-content-center align-items-center">
                                <div className="d-flex">
                                  <Button variant="primary" className='fw-bold'>
                                    save
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
            </div> */}
              <div className="mt-2 p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3>Job Desk</h3>
                    {/* <Link to="/apps/hremploye/allemployees">
                        <Button className="lgnbtn fw-bold">Go Back</Button>
                    </Link> */}
                </div>
                <div className="bg-white">
                    <Row className="border-bottom">
                        <Col md={4}>
                            <div className="border-end p-2 h-100 ">
                                <Row>
                                    <Col md={6}>
                                        <div className="d-flex justify-content-center align-items-center flex-column gap-1 my-3">
                                            <img src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user profile img" style={{ width: '6rem', height: '6rem', borderRadius: '50px', objectFit: 'cover' }} />
                                            <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicPassword">
                                                <Form.Control type='file' size="sm" />
                                            </Form.Group>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="d-flex justify-content-center align-items-start flex-column gap-1 px-2">
                                            <h3 className="fw-bold text-dark">Jhon Doe</h3>
                                            <Button className="lgnbtn fw-bold" size="sm">Permanent</Button>
                                            <span className="fw-bold text-secondary">Director</span>
                                            <span className="fw-bold text-secondary">EMP-1</span>
                                            <span className="fw-bold text-secondary">Admin</span>
                                            <div className="d-flex justify-content-between align-items-center w-100">
                                                <Link to="/"><i className="fa-brands fa-linkedin fs-3"></i></Link>
                                                <Link to="/"><i className="fa-brands fa-facebook fs-3"></i></Link>
                                                <Link to="/"><i className="fa-brands fa-square-instagram fs-3"></i></Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="border-end w-100 h-100 d-flex justify-content-center  align-items-center gap-2 flex-column">
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <i className="fa-solid fa-briefcase fs-3"></i>
                                    <div className="d-flex justify-content-center align-items-start flex-column">
                                        <span className="text-secondary">Department</span>
                                        <span className="text-dark fw-bold">Main Department</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center gap-2">
                                    <i className="fa-solid fa-clock fs-3"></i>
                                    <div className="d-flex justify-content-center align-items-start flex-column">
                                        <span className="text-secondary">Work Shift</span>
                                        <span className="text-dark fw-bold">Regular Work Shift</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="w-100 h-100 d-flex justify-content-center  align-items-center gap-2 flex-column">
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <i className="fa-solid fa-dollar-sign fs-3"></i>
                                    <div className="d-flex justify-content-center align-items-start flex-column">
                                        <span className="text-secondary">Salary</span>
                                        <span className="text-dark fw-bold">Not added yet</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-start align-items-center gap-2">
                                    <i className="fa-solid fa-calendar-days fs-3"></i>
                                    <div className="d-flex justify-content-center align-items-start flex-column">
                                        <span className="text-secondary">Joining Date</span>
                                        <span className="text-dark fw-bold">Not added yet</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>



                    <div className="mt-3 bg-white p-2">
                        <Tabs
                            defaultActiveKey="allowance"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="allowance" title="Leave Allowance">
                                <h3>Leave Allowance</h3>
                                <hr />
                                <p className="bg-light fw-bold p-2">
                                    Notice: <br />
                                    1. Leave will start from the month of January <br />
                                    2. Any type of change will be effective on the next day.
                                </p>
                                <div className="table-responsive">
                                    <Table bordered className="bg-white">
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary text-center">Paid Casual</th>
                                                <th className="fw-bolder text-center text-secondary">Paid Sick</th>
                                                <th className="fw-bolder text-center text-secondary">Unpaid Casual</th>
                                                <th className="fw-bolder text-center text-secondary">Unpaid Sick</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='text-center'>
                                                    <div className="table-responsive">
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Type</th>
                                                                    <th>Earning Rate</th>
                                                                    <th>Allowance</th>
                                                                    <th>Earned</th>
                                                                    <th>Taken</th>
                                                                    <th>Availability</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    <td>@mdo</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                                <td className='text-center'>
                                                    <div className="table-responsive">
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Type</th>
                                                                    <th>Earning Rate</th>
                                                                    <th>Allowance</th>
                                                                    <th>Earned</th>
                                                                    <th>Taken</th>
                                                                    <th>Availability</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    <td>@mdo</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                                <td className='text-center'>
                                                    <div className="table-responsive">
                                                        <Table striped bordered hover>
                                                            <thead>
                                                                <tr>
                                                                    <th>Type</th>
                                                                    <th>Earning Rate</th>
                                                                    <th>Allowance</th>
                                                                    <th>Earned</th>
                                                                    <th>Taken</th>
                                                                    <th>Availability</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>1</td>
                                                                    <td>Mark</td>
                                                                    <td>Otto</td>
                                                                    <td>@mdo</td>
                                                                    <td>@mdo</td>
                                                                    <td>@mdo</td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </td>
                                                <div className="table-responsive">
                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                                <th>Type</th>
                                                                <th>Earning Rate</th>
                                                                <th>Allowance</th>
                                                                <th>Earned</th>
                                                                <th>Taken</th>
                                                                <th>Availability</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                                <td>@mdo</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>

                            <Tab eventKey="attendance" title="Attendance">
                                <h3>Attendance</h3>
                                <hr />
                                <div className="table-responsive">
                                    <Table bordered className="bg-white">
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary text-center">Date</th>
                                                <th className="fw-bolder text-center text-secondary">Punched in</th>
                                                <th className="fw-bolder text-center text-secondary">In Geolocation</th>
                                                <th className="fw-bolder text-center text-secondary">Punched Out</th>
                                                <th className="fw-bolder text-center text-secondary">Out Geolocation</th>
                                                <th className="fw-bolder text-center text-secondary">Behavior</th>
                                                <th className="fw-bolder text-center text-secondary">Type</th>
                                                <th className="fw-bolder text-center text-secondary">Break time</th>
                                                <th className="fw-bolder text-center text-secondary">Total hours</th>
                                                <th className="fw-bolder text-center text-secondary">Entry</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>


                            <Tab eventKey="leave" title="Leave">
                                <h3>Leave</h3>
                                <hr />
                                <div className="table-responsive">
                                    <Table bordered className="bg-white">
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary text-center">Date & time</th>
                                                <th className="fw-bolder text-center text-secondary">Leave duration</th>
                                                <th className="fw-bolder text-center text-secondary">Leave Type	</th>
                                                <th className="fw-bolder text-center text-secondary">Attachments</th>
                                                <th className="fw-bolder text-center text-secondary">Activity</th>
                                                <th className="fw-bolder text-center text-secondary">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>


                            <>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Document</Modal.Title>
                                    </Modal.Header>
                                    <hr />
                                    <Modal.Body>
                                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                Name
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                Document
                                            </Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button className='lgnbtn' onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>

                            <Tab eventKey="documents" title="Documents">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Documents</h3>
                                    <Button className="lgnbtn fw-bold" size="sm" onClick={handleShow}>Add New</Button>

                                </div>
                                <hr />
                                <div className="table-responsive">
                                    <Table bordered className="bg-white">
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary text-center">Name</th>
                                                <th className="fw-bolder text-center text-secondary">Attachment</th>
                                                <th className="fw-bolder text-center text-secondary">Added by</th>
                                                <th className="fw-bolder text-center text-secondary">Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>


                            <Tab eventKey="assets" title="Assets">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Assets</h3>
                                </div>
                                <hr />
                                <div className="table-responsive">
                                    <Table bordered className="bg-white">
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary text-center"> Asset Name	</th>
                                                <th className="fw-bolder text-center text-secondary">Asset Code</th>
                                                <th className="fw-bolder text-center text-secondary">Serial No.</th>
                                                <th className="fw-bolder text-center text-secondary">Is Working</th>
                                                <th className="fw-bolder text-center text-secondary">Type</th>
                                                <th className="fw-bolder text-center text-secondary">Date</th>
                                                <th className="fw-bolder text-center text-secondary">Note</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>


                            <Tab eventKey="history" title="Job History">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Job History</h3>
                                </div>
                                <hr />
                                <div className="table-responsive">
                                    <Table bordered className="bg-white">
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary text-center">Department</th>
                                                <th className="fw-bolder text-center text-secondary">Work Shift</th>
                                                <th className="fw-bolder text-center text-secondary">Designation</th>
                                                <th className="fw-bolder text-center text-secondary">Employment Status</th>
                                                <th className="fw-bolder text-center text-secondary">Role</th>
                                                <th className="fw-bolder text-center text-secondary">Joining Date</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>



                            <Tab eventKey="overview" title="Salary Overview">
                                Salary Overview
                            </Tab>
                            <Tab eventKey="payrun" title="Payrun And Badge">
                                Payrun And Badge
                            </Tab>
                            <Tab eventKey="payslip" title="Payslip">
                                Payslip
                            </Tab>


                            <Tab eventKey="social" title="Social Links">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Social Links</h3>
                                </div>
                                <hr />
                                <div className="table-responsive">
                                    <Table bordered className="bg-white">
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary text-center">
                                                    <i className="fa-brands fa-facebook fs-4 me-1 text-primary"></i>Facebook</th>
                                                <th className="fw-bolder text-center text-secondary">
                                                    <i className="fa-brands fa-twitter fs-4 me-1 text-primary"></i>Twitter</th>
                                                <th className="fw-bolder text-center text-secondary">
                                                    <i className="fa-brands fa-linkedin fs-4 me-1 text-primary"></i>Linkedin</th>
                                                <th className="fw-bolder text-center text-secondary">
                                                    <i className="fa-brands fa-square-instagram fs-4 me-1 text-danger"></i>Instagram</th>
                                                <th className="fw-bolder text-center text-secondary">
                                                    <i className="fa-brands fa-square-behance fs-4 me-1 text-danger"></i>Behance</th>
                                                <th className="fw-bolder text-center text-secondary">
                                                    <i className="fa-brands fa-square-dribbble fs-4 me-1 text-primary"></i>Dribble</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                                <td>12/2/23</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>

                            <>
                                <Modal show={showemargency} onHide={handleCloseEmmargency}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add New Emmergency</Modal.Title>
                                    </Modal.Header>
                                    <hr />
                                    <Modal.Body>
                                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                Name
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                Relationship
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                Phone number
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                Email
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                Address
                                            </Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseEmmargency}>
                                            Close
                                        </Button>
                                        <Button className='lgnbtn' onClick={handleCloseEmmargency}>
                                            Add
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>

                            <Tab eventKey=" emergency" title=" Emergency Contacts">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Emmergency Contacts</h3>
                                    <Button className="lgnbtn fw-bold" size="sm" onClick={handleShowEmmargency}>Add New</Button>
                                </div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='fw-bold'><i className="fa-solid fa-user text-success me-1"></i>Michel Danis</Card.Title>
                                        <hr />
                                        <Card.Text className='fw-bold'>
                                            <span><i className="fa-solid fa-user text-success me-1"></i> Wife</span> <br />
                                            <span><i className="fa-solid fa-phone text-success me-1"></i> 0187777777</span> <br />
                                            <span><i className="fa-solid fa-envelope text-success me-1"></i> Wife@gmail.com</span> <br />
                                            <span><i className="fa-solid fa-location-dot text-success me-1"></i> Banani, Dhaka - Bangladesh</span> <br />

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab>


                            <Tab eventKey="Address" title="Address Details">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Address</h3>
                                </div>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='fw-bold'><i className="fa-solid fa-house me-2"></i>Permanent address:</Card.Title>
                                        <Card.Text>
                                            2883 Bradtke Valleys Apt. 988 Lake May, ME 28277
                                            North Juliannefurt BA, Colorado, 648, Guadeloupe
                                            <br />
                                            phone: 1-403-423-1412 x91508
                                        </Card.Text>
                                    </Card.Body>

                                </Card>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className='fw-bold'><i className="fa-solid fa-location-crosshairs me-2"></i>Present address:</Card.Title>
                                        <Card.Text>
                                            2883 Bradtke Valleys Apt. 988 Lake May, ME 28277
                                            North Juliannefurt BA, Colorado, 648, Guadeloupe
                                            <br />
                                            phone: 1-403-423-1412 x91508
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Tab>


                            <Tab eventKey="bank" title="Bank Details">
                                Bank Details
                            </Tab>
                        </Tabs>

                    </div>
                </div>
            </div>
          </>
          :
          ''
      }
    </div>
  )
}

export default HREmployee



// import React, { useState } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import FeatherIcon from "feather-icons-react";
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table';
// import { Link } from 'react-router-dom';
// import './HREmployee.css';


// const HREmployee = () => {
//   const getHREmployee = JSON.parse((localStorage.getItem('apps-hr-employe')) || '')
//   console.log(getHREmployee?.children)

  
//   // console.log(getHREmployee?.children.map((data: { label: any }) => data.label))

//   // const [activeLink, setActiveLink] = useState('');
//   // const activePage = window.location.pathname;
//   // const navLinks = document.querySelectorAll('nav a Link').forEach(link => {
//   //   if ((link as HTMLAnchorElement).href.includes(`${activePage}`)) { 
//   //     console.log(`${activePage}`);
//   //     link.classList.add("active");
//   //   }
//   // });

//   const pathname = window.location.pathname
//   // console.log('hremploye', pathname)
//   return (
//     <div>
//       <Navbar expand="lg">
//         <>
//           {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               {
//                 getHREmployee?.children.map((data: {
//                   icon: any; children: any; label: any
//                 }) => (
//                   <div className="d-flex border align-items-center  justify-content-start bg-white me-1">
//                     <FeatherIcon icon={data?.icon} className="ms-1" style={{ width: '17px', color: '#1f1d1dde' }} />
//                     <div className="d-flex mx-2 ms-auto text-white align-items-center justify-content-start">
//                       <NavDropdown title={data?.label} id="basic-nav-dropdown" style={{color:'#1f1d1dde'}}>
//                         {data?.children.map((child: {
//                           icon: any;
//                           url: string | undefined;
//                           label: any;
//                         }) => (
//                           <NavDropdown.Item  >
//                             <FeatherIcon icon={child?.icon} className="me-1 text-secondary" style={{ width: '17px' }} />
//                             <Link to={child?.url ? child.url : ''} style={{ color: 'white !important' }}>
//                               <span className='fw-bold text-secondary'>
//                                 {child?.label}
//                               </span>
//                             </Link>
//                           </NavDropdown.Item>

//                         ))}
//                       </NavDropdown>
//                       <span className="arrow-down text-dark"></span>
//                     </div>
//                   </div>
//                 ))
//               }
//             </Nav>
//           </Navbar.Collapse>
//         </>
//       </Navbar>
//       {
//         pathname === '/apps/admin/hremployee' ?
//           <>
//             <div className='mt-3 mb-3 p-3'>
//               <div className="mt-4">
//                 <div className="bg-white">
//                   <Button variant="success" style={{ cursor: 'none' }} className="w-100 fs-4 fw-bold align-items-start rounded-0">
//                     Employee Attandance
//                   </Button>
//                   <div className="mt-2 p-2 d-flex justify-content-center align-items-center w-100">
//                     <Form.Group className="mb-2 w-50" controlId="formBasicPassword">
//                       <Form.Label>
//                         <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Department
//                       </Form.Label>
//                       <div className="d-flex">
//                         <Form.Select className="fw-bold">
//                           <option>Nothing Selected</option>
//                           <option>IT</option>
//                           <option>Development</option>
//                           <option>Garments</option>
//                         </Form.Select>

//                       </div>
//                     </Form.Group>
//                     <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicEmail">
//                       <Form.Label>
//                         <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date
//                       </Form.Label>
//                       <Form.Control type="date" />
//                     </Form.Group>
//                     <Form.Group className="mt-2 ms-2" controlId="formBasicEmail">
//                       <Button type="submit" variant="primary" className="fw-bold align-items-center" >
//                         Filter
//                       </Button>
//                     </Form.Group>
//                   </div>
//                   <div className="p-2">
//                     <div className="staffSelec d-flex justify-content-between">
//                       <div className="staffLeft d-flex w-100 justify-content-start">
//                         <div className="staffSize d-flex justify-content-start align-items-center">
//                           <span className="fw-bold text-dark me-1">show</span>
//                           <Form.Select className="rounded fw-bold">
//                             <option>5</option>
//                             <option>10</option>
//                             <option>14</option>
//                           </Form.Select>
//                           <span className="fw-bold text-dark ms-1">entries</span>
//                         </div>
//                       </div>

//                       <div className="staffSearch d-flex justify-content-start w-100">
//                         <div className="ms-auto d-flex justify-content-start">
//                           <Button variant="light d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
//                             <FeatherIcon icon="search" style={{ width: '12px' }} />
//                           </Button>
//                           <Form className="d-flex" style={{ height: "30px" }}>
//                             <Form.Control
//                               type="search"
//                               placeholder="Search"
//                               // className="me-2"
//                               aria-label="Search"
//                             />
//                           </Form>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="stafftable mt-2">
//                       <div className="table-responsive">
//                         <Table bordered>
//                           <thead>
//                             <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
//                               <th className="fw-bolder border-end text-secondary">S/L</th>
//                               <th className="fw-bolder border-end text-secondary text-center">Fingerprint No.</th>
//                               <th className="fw-bolder text-center text-secondary">Employee Name</th>
//                               <th className="fw-bolder text-center text-secondary">In Time</th>
//                               <th className="fw-bolder text-center text-secondary">Out Time</th>
//                               <th className="fw-bolder text-center text-secondary">Actions</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             <tr>
//                               <td>1</td>
//                               <td className='text-center'>101</td>
//                               <td className='text-center'>Arif</td>
//                               <td className='text-center'>
//                                 <Form.Group className="mb-2 w-100" controlId="formBasicEmail">

//                                   <Form.Control type="time" placeholder='12:10pm' />
//                                 </Form.Group>
//                               </td>
//                               <td className='text-center'>
//                                 <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
//                                   <Form.Control type="time" placeholder='6:10pm' />
//                                 </Form.Group>
//                               </td>
//                               <td className="text-center d-flex justify-content-center align-items-center">
//                                 <div className="d-flex">
//                                   <Button variant="primary" className='fw-bold'>
//                                     save
//                                   </Button>
//                                   {/* <Button variant="danger d-flex justify-content-center align-items-center ms-2" style={{ height: '30px' }}>
//                                     <i className="fa-solid fa-trash me-1"></i>  Delete
//                                   </Button> */}
//                                 </div>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </Table>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//           :
//           ''
//       }
//     </div>
//   )
// }

// export default HREmployee