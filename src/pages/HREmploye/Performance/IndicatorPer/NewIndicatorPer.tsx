import React, { useState, useEffect } from 'react'
import FeatherIcon from "feather-icons-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'
// Form Editor

import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import HREmployee from '../../HREmployee';


interface LayoutType {
  id: number;
  name: string;
}


const NewIndicatorPer = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <HREmployee/> : ''
      }
      <div className="mt-2 p-3 mb-4">
        <div className="d-flex justify-content-center align-items-center  flex-column">
          <div className="w-100  bg-white">
            <Button variant="success" className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
              Set New Indicator
            </Button>
            <div className="p-2">


              <div className="d-flex justify-content-between align-items-center ">
                <h4 className="fw-bold text-dark">Set New Indicator</h4>
                <Link to="/apps/hremploye/performance/goaltracking" style={{ textDecoration: "none" }}>
                  <Button type="submit" variant="success" className="fw-bold align-items-center">
                    Go Back
                  </Button>
                </Link>
              </div>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Company
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>Nothing Selected</option>
                        <option>Daraaz</option>
                        <option>HR1</option>
                        <option>HR4</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Designation
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>Nothing Selected</option>
                        <option>Event Goal</option>
                        <option>Success Goal</option>
                        <option>Complete</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <h4 className="mt-2 text-dark fw-bold">Technical Competencies</h4>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Customer Experience
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Marketing
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Administration
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <h4 className="mt-2 text-dark fw-bold">Organizational  Competencies</h4>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Professionalism
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Integrity
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Attendance
                    </Form.Label>
                    <div className="d-flex">
                      <Form.Select className="fw-bold">
                        <option>None</option>
                        <option>Beginner</option>
                        <option>Advanced</option>
                        <option>Intermediate</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              {/* <Col md={12}>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>
                  <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Description
                </Form.Label>
                <Form.Control as="textarea" type="text" />
              </Form.Group>
            </Col> */}

              <div className="mb-3 pt-2">
                <div className="text-start">
                  <Button type="submit" variant="success">
                    <span className='fw-bold'>Save</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewIndicatorPer     