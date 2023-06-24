import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './ActivityLog.css';
import Admin from '../../Admin';


interface LayoutType {
  id: number;
  name: string;
}
const ActivityLog = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <Admin/> : ''
      }
      <div className='mt-2 p-3 mb-4'>
        <div className="alfilterdate d-flex justify-content-between align-items-center">
          <div className="w-25">
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>
                Filter by date
              </Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </div>
          <div className="h-25">
            <Button type="submit" className="lgnbtn fw-bold align-items-center ms-2">
              Clear Log
            </Button>
          </div>

        </div>

        <div className="mt-4 bg-white">
        <Button style={{cursor:'none'}} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
            Activity Logs
          </Button>
          <div className="p-2 mt-2">
          <div className="staffSelec d-flex justify-content-between">
            <div className="staffLeft d-flex w-100 justify-content-start">
              <div className="staffSize">
                <Form.Select className="rounded fw-bold">
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                </Form.Select>
              </div>

              <div className="staffexport ms-2 d-flex justify-content-start flex-row">
                <Form.Select className="fw-bold">
                  <option>Export</option>
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>PDF</option>
                  <option>Print</option>
                </Form.Select>
                <Button variant="light" style={{ height: "30px" }} className="d-flex justify-content-center align-items-center border">
                  <FeatherIcon icon="refresh-ccw" className="me-1" style={{ width: '12px' }} />
                </Button>
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
            <Table >
              <thead>
                <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                  <th className="fw-bolder border-end text-dark">Descriptions</th>
                  <th className="fw-bolder border-end text-center text-dark">Date</th>
                  <th className="fw-bolder text-center text-dark">Staff</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>User Successfully Logged In [User Id: 1, Is Staff Member: Yes, IP: 103.177.168.219]</td>
                  <td className="text-center">2023-04-08 12:10:09</td>
                  <td className="text-center">Jhone Doe</td>
                </tr>
              </tbody>
            </Table>
          </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default ActivityLog  