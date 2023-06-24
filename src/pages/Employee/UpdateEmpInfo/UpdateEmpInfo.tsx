import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Employee from '../Employee';
// import './DesignationEmp.css';


interface LayoutType {
  id: number;
  name: string;
}
const UpdateEmpInfo = () => {

  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <Employee /> : ''
      }
      <Employee /> 
      <div className='mt-2 mb-4 p-3'>
        <div className="mt-4">
          <div className="bg-white">
            <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
              Update Your Information
            </Button>

            <div className="p-2">
              <div className="stafftable">
                <div className="d-flex justify-content-center align-items-center  flex-column">
                  <div className="w-100  bg-white">
                    <div className="p-2">
                      <Row>
                        <Col md={4}>
                          <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Name
                            </Form.Label>
                            <Form.Control type="text" defaultValue="arif" />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Email
                            </Form.Label>
                            <Form.Control type="text" defaultValue="arif@gmail.com" />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Password
                            </Form.Label>
                            <Form.Control type="text" defaultValue="arif123app$$$" />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Phone Number
                            </Form.Label>
                            <Form.Control type="text" defaultValue="01877777778" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Birthday 
                            </Form.Label>
                            <Form.Control type="Date" defaultValue="10/12/1993"/>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Col md={12}>
                          <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Present Address
                            </Form.Label>
                            <Form.Control type="text" as="textarea" defaultValue="Mirput 7-A B-block"/>
                          </Form.Group>
                        </Col>
                      <Col md={12}>
                          <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Permanent Address
                            </Form.Label>
                            <Form.Control type="text" as="textarea" defaultValue="Mirput 7-A B-block"/>
                          </Form.Group>
                        </Col>


                      <div className="mb-3 pt-2">
                        <div className="text-start">
                          <Button type="submit" className='fw-bold lgnbtn'>
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default UpdateEmpInfo
