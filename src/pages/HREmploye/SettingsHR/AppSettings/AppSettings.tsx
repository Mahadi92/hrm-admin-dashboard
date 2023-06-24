import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HREmployee from '../../HREmployee';
import { Button, Col, Row, Table } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

interface LayoutType {
  id: number;
  name: string;
}

const AppSettings = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 p-3'>
        <h3 className='mb-2 fw-bold text-dark border-bottom'>App Setting</h3>
        <Tabs
          defaultActiveKey="general"
          id="uncontrolled-tab-example"
          className="mb-3 fw-bold"
        >

          <Tab eventKey="general" title="General" className='bg-white p-2 shadow-sm'>
            <div className="">
              <h4 className="fw-bold">General</h4>
              <hr />
              <Form>
                <Row>
                  <Col md={6} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={6} >
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>
                        Language
                      </Form.Label>
                      <Form.Select className="fw-bold">
                        <option>Not Selected</option>
                        <option>English</option>
                        <option>Bangla</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Company Logo</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>

                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Company Banner</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>

                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Company Icon</Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                  </Col>

                  <h4 className="fw-bold border-bottom">Address Details</h4>
                  <Col md={6} >
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                      <Form.Label>
                        Country
                      </Form.Label>
                      <Form.Select className="fw-bold">
                        <option>Not Selected</option>
                        <option>Bangladesh</option>
                        <option>India</option>
                        <option>Srilanka</option>
                        <option>Thailand</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Area</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="number" />
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>

                  <h4 className="fw-bold border-bottom">Date & Time Setting</h4>
                  <Col md={6} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" />
                    </Form.Group>
                  </Col>
                  <Col md={6} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Time</Form.Label>
                      <Form.Control type="time" />
                    </Form.Group>
                  </Col>
                  <h4 className="fw-bold border-bottom">Currency Setting</h4>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Currency symbol</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Decimal separator</Form.Label>
                      <Form.Select className="fw-bold">
                        <option>Not Selected</option>
                        <option>DOT(.)</option>
                        <option>COMMA(,)</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Thousand separator</Form.Label>
                      <Form.Select className="fw-bold">
                        <option>Not Selected</option>
                        <option>DOT(.)</option>
                        <option>COMMA(,)</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={4} >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Currency symbol</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button type="submit" className="lgnbtn fw-bold">
                  Save
                </Button>
              </Form>
            </div>
          </Tab>


          <Tab eventKey="modules" title="Modules">
            <div className="bg-white p-2">
              <h4 className="fw-bold">Modules</h4>
              <hr />
              <Row>
                <Col md={4}>
                  <h3 className="fw-bold">Module List</h3>
                  <p className="fw-bold text-secondary">Only selected items will be shown to the sidebar along with Dashboard and Settings</p>
                </Col>
                <Col md={8}>
                  <div className="p-2">
                    <Row>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Job Desk" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Employee Manage" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Leave Manage" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Attendance" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Payroll" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Administration" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Assets" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Projects" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Task" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                          <Form.Check type="checkbox" label="Admission" className='text-primary fw-bold' />
                        </Form.Group>
                      </Col>
                    </Row>











                  </div>
                </Col>
              </Row>
              <Button className="lgnbtn fw-bold">Save</Button>
            </div>
          </Tab>


          <Tab eventKey="cornjob" title="Corn Job">
            <div className="bg-white  p-2">
              <h4 className="fw-bold">Corn Job</h4>
              <hr />
            </div>
          </Tab>
          <Tab eventKey="email" title="Email Setup">

            <div className="bg-white p-2">
              <h4 className="fw-bold">Email Setup</h4>
              <hr />
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>
                      Provider
                    </Form.Label>
                    <Form.Select className="fw-bold">
                      <option>choose a provider</option>
                      <option>SMTP</option>
                      <option>Maligun</option>
                      <option>Amazon ses</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>
                      From name
                    </Form.Label>
                    <Form.Control type='text' />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>
                      From email
                    </Form.Label>
                    <Form.Control type='email' />
                  </Form.Group>
                </Col>
              </Row>
              <Button className="lgnbtn fw-bold mt-3">Save</Button>
            </div>
          </Tab>


          <Tab eventKey="notification" title="Notification">
            Tab content for Contact
          </Tab>
          <Tab eventKey="update" title="Update">
            Tab content for Contact
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default AppSettings