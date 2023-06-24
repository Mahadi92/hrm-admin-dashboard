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
const SummaryReportHoliday = () => {

  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 mb-4 p-3'>
        <div className="mt-4">
          <div className="bg-white">
            <Button style={{cursor:'none'}} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
            Leave Summary Report
            </Button>
            <div className="mt-2 p-2 d-flex justify-content-center align-items-center w-100">
              <Form.Group className="mb-2 w-50" controlId="formBasicPassword">
                <Form.Label>
                  <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Employee Name
                </Form.Label>
                <div className="d-flex">
                  <Form.Select className="fw-bold">
                    <option>Nothing Selected</option>
                    <option>Arif</option>
                    <option>Shadik</option>
                    <option>Bokel</option>
                  </Form.Select>
                </div>
              </Form.Group>
              <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicPassword">
                <Form.Label>
                  <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> From Date
                </Form.Label>
                <Form.Control type='date' />
              </Form.Group>
              <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicEmail">
                <Form.Label>
                  <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mt-2 ms-2" controlId="formBasicEmail">
                <Button type="submit" className="lgnbtn fw-bold align-items-center" >
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
                        <th className="fw-bolder border-end text-secondary text-center">Leave Type</th>
                        <th className="fw-bolder text-center text-secondary">Applied Date</th>
                        <th className="fw-bolder text-center text-secondary">Request Duration</th>
                        <th className="fw-bolder text-center text-secondary">Approve By</th>
                        <th className="fw-bolder text-center text-secondary">Approve Date</th>
                        <th className="fw-bolder text-center text-secondary">Purpose</th>
                        <th className="fw-bolder text-center text-secondary">Number of Day</th>
                        {/* <th className="fw-bolder text-center text-secondary">Actions</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className='text-center'>Casual</td>
                        <td className='text-center'>13/02/23</td>
                        <td className='text-center'>2</td>
                        <td className='text-center'>HR</td>
                        <td className='text-center'>14/02/23</td>
                        <td className='text-center'>N/A</td>
                        <td className='text-center'>2</td>
                        {/* <td className='text-center'>Arif</td> */}
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

export default SummaryReportHoliday
 