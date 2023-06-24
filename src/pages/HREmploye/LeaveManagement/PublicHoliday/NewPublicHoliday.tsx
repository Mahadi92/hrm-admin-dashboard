import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';


interface LayoutType {
  id: number;
  name: string;
}


const NewPublicHoliday = () => {

  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }

      <div className="mt-2 p-3 mb-4">
        <div className="w-100">
          <div className="d-flex justify-content-end align-items-end mb-2">
            <Link to="/apps/hremploye/Publick_management" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="success" className="fw-bold align-items-center">
                Go Back
              </Button>
            </Link>
          </div>
          <div className="bg-white">
            <Button variant="success" style={{ cursor: 'none' }} className="w-100 fs-4 fw-bold align-items-start rounded-0">
              Add Public Holidy
            </Button>
            <div className="p-2">
              <div className="">
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                      <Form.Label>
                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Holiday Name
                      </Form.Label>
                      <div className="d-flex">
                        <Form.Select className="fw-bold">
                          <option>Nothing Selected</option>
                          <option>Ediul Fitr</option>
                          <option>Pohela Boishak</option>
                          <option>Independence Day</option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                      <Form.Label className='fw-bold'>
                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> From Date
                      </Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                      <Form.Label className='fw-bold'>
                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> To Date
                      </Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>

                </Row>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label className='fw-bold'>
                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Comment
                  </Form.Label>
                  <Form.Control type="text" as="textarea" />
                </Form.Group>
                <Button type="submit" variant="success mt-2" className="fw-bold align-items-center">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPublicHoliday  