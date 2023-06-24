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
const EmpCheckCompleteTask = () => {
  return (
    <>
      <Employee/> 
      <div className='mt-2 p-3 mb-4'>
        <div className="mt-4 bg-white">
          <Button style={{cursor:'none'}}  className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
            All Completed Tasks list
          </Button>
          <div className="p-2">
       
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
                <Form.Select className="fw-bold text-secondary">
                  <option>Export</option>
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>PDF</option>
                  <option>Print</option>
                </Form.Select>
                <Form.Select className="fw-bold text-secondary">
                  <option>Bult Actions</option>
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>PDF</option>
                  <option>Print</option>
                </Form.Select>
                <Button variant="light"  className="d-flex justify-content-center align-items-center border">
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
          <div className="table-responsive mt-2">
            <Table >
              <thead>
                <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                  <th className="fw-bolder border-end text-muted">
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" />
                    </Form.Group>
                  </th>
                  <th className="fw-bolder border-end text-muted">#</th>
                  <th className="fw-bolder border-end text-muted">Name</th>
                  <th className="fw-bolder border-end text-muted">Status</th>
                  <th className="fw-bolder text-center text-muted">Start Date</th>
                  <th className="fw-bolder text-center text-muted">Due Date</th>
                  <th className="fw-bolder text-center text-muted">Assigned to</th>
                  <th className="fw-bolder text-center text-muted">Tags</th>
                  <th className="fw-bolder text-center text-muted">Deadline</th>
                  <th className="fw-bolder text-center text-muted">Prioroty</th>
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
                  <td>css styles</td>
                  <td>css styles</td>
                  <td className="text-center">12/3/2023</td>
                  <td className="text-center">30/3/2023</td>
                  <td className="text-center">Jhony</td>
                  <td className="text-center">frontend</td>
                  <td className="text-center">20/4/2023</td>
                  <td className="text-center">High</td>
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

export default EmpCheckCompleteTask   