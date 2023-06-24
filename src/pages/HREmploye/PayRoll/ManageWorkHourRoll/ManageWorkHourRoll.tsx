import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';
// import HREmployee from '../HREmployee';
// import './DesignationEmp.css';


interface LayoutType {
  id: number;
  name: string;
}
const ManageWorkHourRoll = () => {

  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 mb-4 p-3'>
        <div className="mt-4">
          <div className="bg-white">
            <Button variant="success" className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
              Employee Work Hour
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
                <Button type="submit" variant="success" className="fw-bold align-items-center" >
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
                        <th className="fw-bolder text-center text-secondary">Total Working Hour</th>
                        <th className="fw-bolder text-center text-secondary">Approve Hour</th>
                        <th className="fw-bolder text-center text-secondary">Approve Minutes</th>
                        <th className="fw-bolder text-center text-secondary">Status</th>
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
                        <td className='text-center'>
                          <Form.Group className=" w-100" controlId="formBasicPassword">
                            <Form.Control type="text" defaultValue={'00'} />
                          </Form.Group>
                        </td>
                        <td className='text-center'>
                          <Form.Group className=" w-100" controlId="formBasicPassword">
                            <Form.Control type="text" defaultValue={'00'} />
                          </Form.Group>
                        </td>
                        <td className='text-center'>
                          <Form.Group className=" w-100" controlId="formBasicPassword">
                            <Form.Control type="text" defaultValue={'00'} />
                          </Form.Group>
                        </td>
                        <td className='text-center'>
                          <Button variant="info" size="sm">pending</Button>
                        </td>
                        <td className="text-center d-flex">
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


        </div>
      </div>
    </>
  )
}

export default ManageWorkHourRoll
