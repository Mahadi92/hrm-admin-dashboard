import React, { useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FeatherIcon from "feather-icons-react";
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select'
import HREmployee from '../../HREmployee';
import Accordion from 'react-bootstrap/Accordion';

interface LayoutType {
  id: number;
  name: string;
}
const AttandanceSettings = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 p-3'>
        <h3 className='mb-2 fw-bold text-dark border-bottom'>Attendance Settings</h3>
        <Tabs
          defaultActiveKey="Preference"
          id="uncontrolled-tab-example"
          className="mb-3 fw-bold"
        >

          <Tab eventKey="Preference" title="Preference" className='bg-white p-2 shadow-sm'>
            <div className="">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold">Preference</h4>
              </div>
              <hr />
              <div className="p-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='fw-bold fs-4'>Auto approval</Form.Label>
                  <Form.Select className="fw-bold">
                    <option>not selected</option>
                    <option>yes</option>
                    <option>no</option>
                  </Form.Select>
                </Form.Group>
                <span className='fw-bold text-secondary'>In the enabled state, all the attendance request would be approved automatically without any reviews. As default, the app considers all employee for approval. Note that its possible to manage employees for auto approval.</span>
                <br />
                <Button className='fw-bold lgnbtn mt-3'>Save</Button>
              </div>
            </div>
          </Tab>


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

          <Tab eventKey="definations" title="Definations">
            <div className="bg-white p-2">
              <h4 className="fw-bold">Definations</h4>
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
                  <h4>Employees for allowance</h4>
                  <p>Add employment status to allow employee for auto allowance</p>

                </Row>
                <Button className="lgnbtn fw-bold mt-2">Save</Button>
              </div>
            </div>
          </Tab>

          <Tab eventKey="geolocations" title="Geolocations & IP">
            <div className="bg-white p-2">
              <h4 className="fw-bold">Geolocations</h4>
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

                </Row>
                <Button className="lgnbtn fw-bold mt-2">Save</Button>
              </div>
            </div>
          </Tab>


          <Tab eventKey="restriction" title="IP Restriction">
            <div className="bg-white p-2">
              <h4 className="fw-bold">IP Restriction</h4>
              <hr />
              <div className="p-2">
                <h4 className="fw-bold">IP validation</h4>
                <p className="fw-bold text-secondary">Restrict or Allow network IP for Punch In</p>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                    <span className='fw-bold'>Allow IP</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='Add the IP that you want to allow'/>
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className='fw-bold'>Restrict IP</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder='Add the IP that you want to restrict'/>
                      </Form.Group>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Button className="lgnbtn fw-bold mt-2">Save</Button>
              </div>
            </div>
          </Tab>

        </Tabs>
      </div>
    </>
  )
}

export default AttandanceSettings