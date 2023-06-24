import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './Department.css';
import HREmployee from '../../HREmployee';
import Modal from 'react-bootstrap/Modal';

interface LayoutType {
  id: number;
  name: string;
  // add more properties as needed
}


const DepartmentEmp = () => {
  // const isOpened: string | null = JSON.parse(localStorage.getItem("layout"))
  // console.log('isOpened', isOpened)

  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  console.log('layout', layout)

  // const localStorageItem = localStorage.getItem("layout")
  // if (localStorageItem !== null) {
  //   const isOpened = JSON.parse(localStorageItem)
  //   console.log('isOpened', isOpened)
  //   return isOpened
  // }


  // console.log(isOpened === "opened" ? "it's opened" : null)

  // let isOpen: string | null = isOpened;
  // if (isOpen === "opened") {
  //   console.log("opened");
  // } else {
  //   console.log(null);
  // }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-4 p-3'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link to="/hremploye/departmen/addnew" style={{ textDecoration: "none" }}>
              <Button type="submit" className="lgnbtn fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Add Department</span>
              </Button>
            </Link>
            {/* <Link to="/apps/admin/knowledge/groups" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Groups</span>
              </Button>
            </Link> */}
          </div>
        </div>

        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Department</Modal.Title>
            </Modal.Header>
            <hr />
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>
                      <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Name
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>
                      Location
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>
                      Choose Manager
                    </Form.Label>
                    <Form.Select className="fw-bold">
                      <option>Not Selected</option>
                      <option>Employee</option>
                      <option>Manager</option>
                      <option>Admin</option>
                      <option>Accountant</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>
                      Parent Department
                    </Form.Label>
                    <Form.Select className="fw-bold">
                      <option>Not Selected</option>
                      <option>Employee</option>
                      <option>Manager</option>
                      <option>Admin</option>
                      <option>Accountant</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>
                      Work Shift
                    </Form.Label>
                    <Form.Select className="fw-bold">
                      <option>Not Selected</option>
                      <option>Employee</option>
                      <option>Manager</option>
                      <option>Admin</option>
                      <option>Accountant</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>
                      Choose Manager
                    </Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button className='lgnbtn'>Update</Button>
            </Modal.Footer>
          </Modal>
        </>
        <div className="mt-4 bg-white">
          <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
            Department List
          </Button>
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
                <Table >
                  <thead>
                    <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                      <th className="fw-bolder border-end text-secondary">S/L</th>
                      <th className="fw-bolder border-end text-secondary text-center">Name</th>
                      <th className="fw-bolder border-end text-secondary text-center">Manager</th>
                      <th className="fw-bolder border-end text-secondary text-center">Descriptions</th>
                      <th className="fw-bolder border-end text-secondary text-center">Status</th>
                      <th className="fw-bolder border-end text-secondary text-center">Name</th>
                      <th className="fw-bolder text-center text-secondary">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td className='text-center'>HR</td>
                      <td className='text-center'>HR</td>
                      <td className='text-center'>HR</td>
                      <td className='text-center'>HR</td>
                      <td className='text-center'>HR</td>
                      <td className="text-center d-flex justify-content-center align-items-center">
                        <div className="d-flex">
                          <Button variant="info d-flex justify-content-center align-items-center" style={{ height: '30px' }} onClick={handleShow}>
                            <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                          </Button>
                          <Button variant="danger d-flex justify-content-center align-items-center ms-2" style={{ height: '30px' }}>
                            <i className="fa-solid fa-trash me-1"></i>  Delete
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
    </>
  )
}

export default DepartmentEmp
