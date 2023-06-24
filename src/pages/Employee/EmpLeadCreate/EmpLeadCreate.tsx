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

const EmpLeadCreate = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  return (
    <>
      {
        layout === "opened" ? <Employee /> : ''
      }
      <Employee /> 
      <div className='mt-2 p-3 mb-4'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link to="/apps/employee/newleads" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="success" className="fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Customer</span>
              </Button>
            </Link>
            {/* <Link to="/apps/admin/knowledge/groups" style={{ textDecoration: "none" }}> */}
            <Button  variant="success" className="fw-bold align-items-center ms-2">
              <i className="fa-solid fa-cloud-arrow-up"></i> <span className="fs-5 ms-2">Import Customers</span>
            </Button>
            {/* </Link> */}
          </div>

          <div className="d-flex">
            <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
              <FeatherIcon icon="filter" className="me-1" style={{ width: '22px' }} />
            </Button>
          </div>
        </div>

        <div className="mt-4 bg-white">
          <Button variant="success" style={{cursor:'none'}} className="w-100 fs-4 fw-bold align-items-start rounded-0">
            My All Leads list
          </Button>
          <div className="p-2">
          <h4 className="fw-bold text-dark mb-2"><FeatherIcon icon="clipboard" style={{ width: '22px' }} /> Filter by</h4>
          <div className="d-flex mb-3">
            <Form.Select className="fw-bold text-secondary">
              <option className="text-muted">Assigned</option>
              <option>CSV company</option>
              <option>Excel ltd.</option>
              <option>PDF multimedia</option>
              <option>Printer salim</option>
            </Form.Select>
            <Form.Select className="fw-bold ms-1 text-secondary">
              <option>All</option>
              <option>CSV</option>
              <option>Excel</option>
              <option>PDF</option>
              <option>Print</option>
            </Form.Select>
            <Form.Select className="fw-bold ms-1 text-secondary">
              <option>Source</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Instagram</option>
              <option>Twitter</option>
            </Form.Select>
            <Form.Select className="fw-bold ms-1 text-secondary">
              <option>Additional Filters</option>
              <option>Lost</option>
              <option>Public</option>
              <option>Junk</option>
              <option>Contacted Today</option>
              <option>Created Today</option>
            </Form.Select>
          </div>
          <div className="staffSelec d-flex justify-content-between">
            <div className="staffLeft d-flex w-100 justify-content-start">
              <div className="staffSize">
                <Form.Select className="rounded fw-bold text-secondary">
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                </Form.Select>
              </div>

              <div className="staffexport ms-2 d-flex justify-content-start flex-row text-secondary">
                <Form.Select className="fw-bold">
                  <option>Export</option>
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>PDF</option>
                  <option>Print</option>
                </Form.Select>
                <Form.Select className="fw-bold">
                  <option>Bulk actions</option>
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
            <div className="table-responsive">
              <Table >
                <thead>
                  <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                    <th className="fw-bolder border-end text-muted">
                      <Form.Group className="" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </th>
                    <th className="fw-bolder border-end text-muted">#</th>
                    <th className="fw-bolder border-end text-muted">Name</th>
                    <th className="fw-bolder border-end text-muted">Company</th>
                    <th className="fw-bolder text-center text-muted">Email</th>
                    <th className="fw-bolder text-center text-muted">Phone</th>
                    <th className="fw-bolder text-center text-muted">Value</th>
                    <th className="fw-bolder text-center text-muted">Tags</th>
                    <th className="fw-bolder text-center text-muted">Assigned</th>
                    <th className="fw-bolder text-center text-muted">Status</th>
                    <th className="fw-bolder text-center text-muted">Source</th>
                    <th className="fw-bolder text-center text-muted">Last Contact</th>
                    <th className="fw-bolder text-center text-muted">Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Group className="mb-2" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                      </Form.Group>
                    </td>
                    <td>1</td>
                    <td>test</td>
                    <td>GM Technology</td>
                    <td className="text-center">test@gmail.com</td>
                    <td className="text-center">0185*****</td>
                    <td className="text-center">css styles</td>
                    <td className="text-center">css styles</td>
                    <td className="text-center">css styles</td>
                    <td className="text-center">css styles</td>
                    <td className="text-center">css styles</td>
                    <td className="text-center">css styles</td>
                    <td className="text-center">css styles</td>
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

export default EmpLeadCreate    