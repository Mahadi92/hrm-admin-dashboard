import React, { useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FeatherIcon from "feather-icons-react";
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'
import HREmployee from '../../HREmployee';

interface LayoutType {
  id: number;
  name: string;
}

const LeaveSettings = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const options = [
    { value: 'Permanent', label: 'Permanent' },
    { value: 'Terminated', label: 'Terminated' },
    { value: 'Provation', label: 'Provation' }
  ]

  const optionsByRole = [
    { value: 'App Admin', label: 'App Admin' },
    { value: 'Manager', label: 'Manager' },
    { value: 'Employee', label: 'Employee' }
  ]
  const optionsByUser = [
    { value: 'seteve', label: 'seteve' },
    { value: 'mansy', label: 'mansy' },
    { value: 'sabana', label: 'sabana' }
  ]
  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 p-3'>
        <h3 className='mb-2 fw-bold text-dark border-bottom'>Leave Setting</h3>
        <Tabs
          defaultActiveKey="leavetype"
          id="uncontrolled-tab-example"
          className="mb-3 fw-bold"
        >

          <Tab eventKey="leavetype" title="Leave Type" className='bg-white p-2 shadow-sm'>
            <div className="">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold">Leave Type</h4>
                <Button size='sm' className='fw-bold lgnbtn' onClick={handleShow}>Add leave Type</Button>
              </div>
              <hr />
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
                <>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Leave Type</Modal.Title>
                    </Modal.Header>
                    <hr />
                    <Modal.Body>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Select className="fw-bold">
                          <option>Not Selected</option>
                          <option>English</option>
                          <option>Bangla</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enabled</Form.Label>
                        <Form.Select className="fw-bold">
                          <option>Not Selected</option>
                          <option>yes</option>
                          <option>no</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Allow Monthly Earning</Form.Label>
                        <Form.Select className="fw-bold">
                          <option>Not Selected</option>
                          <option>yes</option>
                          <option>no</option>
                        </Form.Select>
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button className='lgnbtn'>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>

                <>
                  <Modal show={showEdit} onHide={handleCloseEdit}>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Leave Type</Modal.Title>
                    </Modal.Header>
                    <hr />
                    <Modal.Body>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Type</Form.Label>
                        <Form.Select className="fw-bold">
                          <option>Not Selected</option>
                          <option>English</option>
                          <option>Bangla</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enabled</Form.Label>
                        <Form.Select className="fw-bold">
                          <option>Not Selected</option>
                          <option>yes</option>
                          <option>no</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Allow Monthly Earning</Form.Label>
                        <Form.Select className="fw-bold">
                          <option>Not Selected</option>
                          <option>yes</option>
                          <option>no</option>
                        </Form.Select>
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseEdit}>
                        Close
                      </Button>
                      <Button className='lgnbtn'>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>

                <div className="stafftable mt-2">
                  <div className="table-responsive">
                    <Table bordered>
                      <thead>
                        <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                          <th className="fw-bolder border-end text-secondary">S/L</th>
                          <th className="fw-bolder border-end text-secondary text-center">Leave Type</th>
                          <th className="fw-bolder text-center text-secondary">Amount</th>
                          <th className="fw-bolder text-center text-secondary">Enabled</th>
                          <th className="fw-bolder text-center text-secondary">Allow monthly earning</th>
                          <th className="fw-bolder text-center text-secondary">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className='text-center'>Casual</td>
                          <td className='text-center'>13/02/23</td>
                          <td className='text-center'>yes</td>
                          <td className='text-center'>HR</td>
                          <td className='text-center'>
                            <Button variant='warning' size='sm' className='fw-bold' onClick={handleShowEdit}>Edit</Button>
                            <Button variant='danger' size='sm' className='ms-2 fw-bold'>Delete</Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </Tab>


          <Tab eventKey="allowance" title="Allowance Policy">
            <div className="bg-white p-2">
              <h4 className="fw-bold">Allowance Policy</h4>
              <hr />
              <div className="p-2">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className='fw-bold '>Leave will start from the month of</Form.Label>
                      <Form.Select className="fw-bold">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <h4><i className="fa-solid fa-book-open" style={{color:'#ee7e22'}}></i> Employees for allowance</h4>
                  <p>Add employment status to allow employee for auto allowance</p>
                  <Col md={6}>
                    <Form.Label>For paid leave</Form.Label>
                    <Select options={options} isMulti />
                  </Col>
                  <Col md={6}>
                    <Form.Label>For unpaid leave</Form.Label>
                    <Select options={options} isMulti />
                  </Col>
                </Row>
                <Button className="lgnbtn fw-bold mt-2">Save</Button>
              </div>
            </div>
          </Tab>

          <Tab eventKey="approval" title="Approval">
            <div className="bg-white p-2">
              <h4 className="fw-bold">Approval</h4>
              <hr />
              <div className="p-2">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className='fw-bold '>Request approval type</Form.Label>
                      <Form.Select className="fw-bold">
                        <option>not selected</option>
                        <option>Single level</option>
                        <option>Multi level</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <h4>Special audience</h4>
                  <p>Add role/user to whom you don't want review leave request.</p>
                  <Col md={6}>
                    <Form.Label>
                      By role
                    </Form.Label>
                    <Select options={optionsByRole} isMulti />
                  </Col>
                  <Col md={6}>
                    <Form.Label>By User</Form.Label>
                    <Select options={optionsByUser} isMulti />
                  </Col>
                </Row>
                <Button className="lgnbtn fw-bold mt-2">Save</Button>
              </div>
            </div>
          </Tab>

        </Tabs>
      </div>
    </>
  )
}

export default LeaveSettings