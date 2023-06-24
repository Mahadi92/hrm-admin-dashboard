import React, { useState, useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css';

interface LayoutType {
  id: number;
  name: string;
}



const SetupPayRoll = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  
  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 mb-4 p-3'>
        <div className=" bg-white w-100 p-2">
          <div className="w-100 mb-3 ">
            <Row>
              <Col md={4}>
                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                  <Form.Label>
                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> All Companies
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Select className="fw-bold text-secondary">
                      <option>Nothing Selected</option>
                      <option>HR1</option>
                      <option>HR2</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                  <Form.Label>
                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />All Department
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Select className="fw-bold text-secondary">
                      <option>Nothing Selected</option>
                      <option>Allf</option>
                      <option>Management</option>
                      <option>Marketing</option>
                      <option>Front line</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                  <Form.Label>
                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date or Month
                  </Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
              </Col>

            </Row>
          </div>
          <div className="mb-2 d-flex justify-content-center align-items-center">
            <Button type="submit" variant="primary" className="fw-bold  h-25 d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '10px' }}></i>
              <span className='ms-1 fw-bold' style={{ fontSize: '14px' }}> search</span>
            </Button>
            <Button type="submit" variant="success" className="fw-bold ms-2 h-25 d-flex justify-content-center align-items-center ">
              <i className="fa-sharp fa-solid fa-square-check" style={{ fontSize: '10px' }}></i>
              <span className='ms-1 fw-bold' style={{ fontSize: '14px' }}> Bulk Payment</span>
            </Button>
          </div>
        </div>

        <div className="mt-4 bg-white">
          <Button variant="success" className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
            Payment Info List Of April-2023 
          </Button>
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
            <Table >
              <thead>
                <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                  <th className="fw-bolder border-end text-muted">S/L</th>
                  <th className="fw-bolder border-end text-muted">Name</th>
                  <th className="fw-bolder text-center text-muted">PaySlip Type</th>
                  <th className="fw-bolder border-end text-center text-muted">Basic Salary</th>
                  <th className="fw-bolder text-center text-muted">Net Salary</th>
                  <th className="fw-bolder text-center text-muted">Status</th>
                  <th className="fw-bolder text-center text-muted">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Asif</td>
                  <td className="text-center">Monthly</td>
                  <td className="text-center">$ 500</td>
                  <td className="text-center">$ 455</td>
                  <td className="text-center">
                    <Button variant="danger" size="sm">unpaid</Button>
                  </td>
                  <td className="text-center">
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
    </>
  )
}

export default SetupPayRoll      