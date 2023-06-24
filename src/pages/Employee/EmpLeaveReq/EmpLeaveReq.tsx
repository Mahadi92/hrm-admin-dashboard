import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Employee from '../Employee';


interface LayoutType {
  id: number;
  name: string;
}

const EmpLeaveReq = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <Employee /> : ''
      }
      <Employee />
      <div className='mt-2 mb-4 p-3'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link to="/apps/employee/leave/addnew" style={{ textDecoration: "none" }}>
              <Button type="submit" className="lgnbtn fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Apply For Leave</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-4 bg-white">
          <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
            My Application List
          </Button>
          <div className="p-2">
            <div className="staffSelec d-flex justify-content-between">
              <div className="staffLeft d-flex w-100 justify-content-start">
                <div className="staffSize d-flex">
                  <h5 className="fw-bold text-dark me-1">show</h5>
                  <Form.Select className="rounded fw-bold">
                    <option>5</option>
                    <option>10</option>
                    <option>12</option>
                  </Form.Select>
                  <h5 className="fw-bold text-dark ms-1">entries</h5>
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
                      <th className="fw-bolder border-end">S/L</th>
                      <th className="fw-bolder border-end">Employee Name</th>
                      <th className="fw-bolder border-end">Leave Type</th>
                      <th className="fw-bolder border-end">Request Durations</th>
                      <th className="fw-bolder border-end">Number of Days</th>
                      <th className="fw-bolder border-end">Approve Status</th>
                      <th className="fw-bolder border-end">Reject Status</th>
                      <th className="fw-bolder border-end">Status</th>
                      <th className="fw-bolder text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Eidul Hasan</td>
                      <td>Eid</td>
                      <td>primary</td>
                      <td>2</td>
                      <td>Approved</td>
                      <td>Not Rejected</td>
                      <td>Active</td>
                      <td className="text-center d-flex justify-content-center align-items-center">
                        <div className="d-flex">
                          <Button variant="success d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
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

export default EmpLeaveReq    