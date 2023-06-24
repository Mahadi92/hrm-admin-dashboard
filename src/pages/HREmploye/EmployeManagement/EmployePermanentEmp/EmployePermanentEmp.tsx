import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css';
import avatar from '../../../../assets/images/avatar.jpg';

interface LayoutType {
  id: number;
  name: string;
}
const EmployePermanentEmp = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");


  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 mb-4 p-3'>
        <div className=" bg-white w-100  mt-3">
          <div className="w-100 mb-3">
            <Button variant="success" className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
              Employee Permanent
            </Button>
            <div className="p-2">
              <Row>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      Name
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      Department
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold text-secondary">
                        <option>Nothing Selected</option>
                        <option>Daraaz</option>
                        <option>10 mintue school</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      Designation
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold text-secondary">
                        <option>Nothing Selected</option>
                        <option>Sr. Software Engineer</option>
                        <option>Junior Developer</option>
                        <option>React Developer</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      Role
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold text-secondary">
                        <option>Nothing Selected</option>
                        <option>Super Admin</option>
                        <option>Employee</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>

          </div>
          <div className="mb-2 d-flex justify-content-center align-items-center">
            <Button type="submit" variant="success" className="fw-bold  h-25 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '10px' }}></i>
              <span className='ms-1 fw-bold' style={{ fontSize: '14px' }}> Search</span>
            </Button>
          </div>
          <div className="mt-4 bg-white">
            <div className="p-2 mt-2 d-flex justify-content-between">
              <div className="staffLeft d-flex w-100 justify-content-start">
                <div className="staffSize" style={{ height: '30px' }}>
                  <Form.Select className="rounded fw-bold" >
                    <option>10</option>
                    <option>26</option>
                    <option>27</option>
                  </Form.Select>
                </div>
                <h6 className='ms-1 fw-bold'>records per page</h6>

              </div>

              <div className="staffSearch d-flex justify-content-start w-100">
                <div className="ms-auto d-flex justify-content-start">
                  <Button variant="light d-flex justify-content-center align-items-center" >
                    <FeatherIcon icon="search" style={{ width: '12px' }} />
                  </Button>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      // className="me-2"
                      aria-label="Search"
                    />
                  </Form>
                  <Button type="submit" variant="danger" className="fw-bold align-items-center ms-2 border">
                    <i className="fa-solid fa-file-pdf"></i>
                  </Button>
                  <Button type="submit" variant="warning" className="fw-bold align-items-center ms-1 border">
                    <i className="fa-solid fa-file-csv"></i>
                  </Button>
                  <Button type="submit" variant="primary" className="fw-bold align-items-center ms-1 border">
                    <i className="fa-sharp fa-solid fa-print"></i>
                  </Button>
                  <Button type="submit" variant="info" className="fw-bold align-items-center ms-1 border">
                    <i className="fa-solid fa-eye-slash"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div className="table-responsive mt-2">
              <Table bordered>
                <thead>
                  <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                    <th className="fw-bolder text-center text-muted">#</th>
                    <th className="fw-bolder border-end text-muted">Photo</th>
                    <th className="fw-bolder text-center text-muted">Name</th>
                    <th className="fw-bolder border-end text-muted">Department</th>
                    <th className="fw-bolder border-end text-center text-muted">Phone</th>
                    <th className="fw-bolder text-center text-muted">Fingerprint No.</th>
                    <th className="fw-bolder text-center text-muted">Pay Grade Name</th>
                    <th className="fw-bolder text-center text-muted">Date of Joining</th>
                    <th className="fw-bolder text-center text-muted">Status</th>
                    <th className="fw-bolder text-center text-muted">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img src={avatar} alt="user-img" style={{ width: '40px', borderRadius: "50px", objectFit: 'cover' }} />
                    </td>
                    <td className="text-center">Abdul Samad</td>
                    <td>
                   <span className='fw-bold'>IT</span> <br />
                   <span className='text-muted'>Designation : Sr Software Engineer</span>

                    </td>
                    <td className="text-center">0180000000 </td>
                    <td className="text-center">12</td>
                    <td className="text-center">A(Monthly)</td>
                    <td className="text-center">26/04/23</td>
                    <td className="text-center">
                      <Button variant="success" size='sm' className="fw-bold align-items-center ms-1 border">
                        active
                      </Button>
                    </td>
                    <td className="h-100">
                      <Button type="submit" variant="warning" className="fw-bold align-items-center ms-1 border">
                        <i className="fa-solid fa-pen"></i>
                      </Button>
                      <Button type="submit" variant="info" className="fw-bold align-items-center ms-1 border">
                        <i className="fa-solid fa-eye"></i>
                      </Button>
                      <Button type="submit" variant="danger" className="fw-bold align-items-center ms-1 border">
                        <i className="fa-solid fa-trash"></i>
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

export default EmployePermanentEmp          