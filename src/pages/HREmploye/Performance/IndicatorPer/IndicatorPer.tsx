import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';

interface LayoutType {
  id: number;
  name: string;
}
const IndicatorPer = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <HREmployee /> : ''
      }
      <div className='mt-2 mb-4 p-3'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link to="/apps/hremploye/performance/Indicator/addnew" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="success" className="fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Add New Indiactor</span>
              </Button>
            </Link>
            {/* <Link to="/apps/admin/knowledge/groups" style={{ textDecoration: "none" }}> */}
            <Button type="submit" variant="danger" className="fw-bold align-items-center ms-2 border">
              <i className="fa-solid fa-trash"></i> <span className="fs-5 ms-1">Bulk Delete</span>
            </Button>
            {/* </Link> */}
          </div>
        </div>

        <div className="mt-4 bg-white">
          <Button variant="success" className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
            Performance Indicator Lists
          </Button>
          <div className="p-3">
            <div className="d-flex justify-content-between">
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
            <div className="table-responsive stafftable mt-2">
              <Table >
                <thead>
                  <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                    <th className="fw-bolder border-end text-muted">
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </th>
                    <th className="fw-bolder border-end text-muted">#</th>
                    <th className="fw-bolder border-end text-muted">Designation</th>
                    <th className="fw-bolder border-end text-muted">Deparment</th>
                    <th className="fw-bolder border-end text-muted">Company</th>
                    <th className="fw-bolder border-end text-muted">Added By</th>
                    <th className="fw-bolder border-end text-muted">Created At</th>
                    <th className="fw-bolder text-center text-muted">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </td>
                    <td>1</td>
                    <td>Andriod Developer</td>
                    <td>HR1</td>
                    <td className="text-center">Test</td>
                    <td>admin</td>
                    <td>29/9/23</td>
                    <td className="text-center">
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
    </>
  )
}

export default IndicatorPer   