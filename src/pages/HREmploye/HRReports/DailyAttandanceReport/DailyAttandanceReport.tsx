import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';
import { DatePicker } from 'react-responsive-datepicker'
import 'react-responsive-datepicker/dist/index.css'

interface LayoutType {
  id: number;
  name: string;
}
const DailyAttandanceReport = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 mb-4 p-3'>
        <div className="d-flex justify-content-center align-items-center bg-white w-100">
          <div className="w-50 h-25 mb-3 d-flex justify-content-center align-items-center ">
            <Form.Group className="mb-2 w-100  mt-3" controlId="formBasicEmail">
              <Form.Label className='fw-bold text-secondary'>
                Select Date
              </Form.Label>
              <Form.Control type="text" className="bg-light" placeholder="Select Date" onClick={() => {
                setIsOpen(true)
              }} />
            </Form.Group>
            <Button type="submit" variant="success" className="fw-bold  h-25 mt-4  d-flex justify-content-center align-items-center ">
              <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '10px' }}></i>
              <span className='ms-1 fw-bold' style={{ fontSize: '14px' }}> search</span>
            </Button>
            <DatePicker
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              defaultValue={new Date(2022, 8, 8)}
              minDate={new Date(2022, 10, 10)}
              maxDate={new Date(2023, 0, 10)}
              headerFormat='DD, MM dd'
            />
          </div>
        </div>

        <div className="mt-4 bg-white">
          <Button variant="success"  className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{cursor:'none'}}>
            Daily Attandance List
          </Button>
          <div className="p-2 mt-2 d-flex justify-content-between">

            <div className="staffLeft d-flex w-100 justify-content-start">
              <div className="staffSize" style={{ height: '30px' }}>
                <Form.Select className="rounded fw-bold" >
                  <option>10</option>
                  <option>26</option>
                  <option>27</option>
                </Form.Select>
              </div>
              <h6 className='ms-1 fw-bold'>records per page</h6>

            </div>

            <div className="staffSearch d-flex justify-content-start w-100">
              <div className="ms-auto d-flex justify-content-start">
                <Button variant="light d-flex justify-content-center align-items-center" >
                  <FeatherIcon icon="search" style={{ width: '12px' }} />
                </Button>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    // className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <Button type="submit" variant="danger" className="fw-bold align-items-center ms-2 border">
                  <i className="fa-solid fa-file-pdf"></i>
                </Button>
                <Button type="submit" variant="warning" className="fw-bold align-items-center ms-1 border">
                  <i className="fa-solid fa-file-csv"></i>
                </Button>
                <Button type="submit" variant="success" className="fw-bold align-items-center ms-1 border">
                  <i className="fa-sharp fa-solid fa-print"></i>
                </Button>
                <Button type="submit" variant="info" className="fw-bold align-items-center ms-1 border">
                  <i className="fa-solid fa-eye-slash"></i>
                </Button>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-2">
            <Table >
              <thead>
                <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                  <th className="fw-bolder border-end text-muted">
                    S/L
                  </th>
                  <th className="fw-bolder border-end text-muted">Employee</th>
                  <th className="fw-bolder text-center text-muted">Company</th>
                  <th className="fw-bolder border-end text-center text-muted">Date</th>
                  <th className="fw-bolder text-center text-muted">Status</th>
                  <th className="fw-bolder text-center text-muted">Clock In</th>
                  <th className="fw-bolder text-center text-muted">Clock Out</th>
                  <th className="fw-bolder text-center text-muted">Late</th>
                  <th className="fw-bolder text-center text-muted">Early Leaving</th>
                  <th className="fw-bolder text-center text-muted">Overtime</th>
                  <th className="fw-bolder text-center text-muted">Total Work</th>
                  <th className="fw-bolder text-center text-muted">Total Rest</th>
                  <th className="fw-bolder text-center text-muted">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Asif</td>
                  <td>Daraaz</td>
                  <td>30/3/2023</td>
                  <td className="text-center">present</td>
                  <td className="text-center">10:30</td>
                  <td className="text-center">6:20</td>
                  <td className="text-center">N/A</td>
                  <td className="text-center">N/A</td>
                  <td className="text-center">00:00</td>
                  <td className="text-center">00:00</td>
                  <td className="text-center">N/A</td>
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
    </>
  )
}

export default DailyAttandanceReport    