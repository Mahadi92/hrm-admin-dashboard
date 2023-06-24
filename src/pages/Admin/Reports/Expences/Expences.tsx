import React from 'react'
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './Expences.css';
import { Link } from 'react-router-dom';
import Admin from '../../Admin';

interface LayoutType {
  id: number;
  name: string;
}
const Expences = () => {

  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <Admin/> : ''
      }
      <div className='mt-2 p-3 mb-4'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Button type="submit" variant="warning" className="fw-bold align-items-center">
              {/* <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> */}
              <i className="fa-solid fa-file-pdf"></i>
            </Button>

            <Button type="submit" variant="info" className="fw-bold align-items-center ms-2">
              {/* <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} /> */}
              <i className="fa-solid fa-file-excel"></i>
            </Button>
          </div>

          <div className="d-flex">
            <Link to="/apps/admin/reports/expences/detailed">
              <Button type="submit" variant="success" className="fw-bold align-items-center ms-2">
                <span>Detailed Report</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="staff_container">
          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Exclude Billable Expenses" />
          </Form.Group>
          {/* <div className="staffSelec d-flex justify-content-between">
            <div className="staffLeft d-flex w-100 justify-content-start">
              <div className="staffSize">
                <Form.Select  className="rounded fw-bold">
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                </Form.Select>
              </div>

              <div className="staffexport ms-2 d-flex justify-content-start flex-row">
                <Form.Select  className="fw-bold">
                  <option>Export</option>
                  <option>CSV</option>
                  <option>Excel</option>
                  <option>PDF</option>
                  <option>Print</option>
                </Form.Select>
                <Button variant="light" style={{ height: "30px" }} className="d-flex justify-content-center align-items-center border">
                  <FeatherIcon icon="refresh-ccw" className="me-1" style={{ width: '$0.00px' }} />
                </Button>
              </div>
            </div>

            <div className="staffSearch d-flex justify-content-start w-100">
              <div className="ms-auto d-flex justify-content-start">
                <Button variant="light d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                  <FeatherIcon icon="search" style={{ width: '$0.00px' }} />
                </Button>
                <Form className="d-flex" style={{ height: "30px" }}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Form>
              </div>
            </div>
          </div> */}

          <div className="stafftable mt-2 px-0 w-100">
            <div className="table-responsive">


              <Table striped bordered hover>
                <thead>
                  <tr style={{ fontWeight: 'bold' }}>
                    <th className="fw-bolder border-end">Category</th>
                    <th className="fw-bolder border-end">January</th>
                    <th className="fw-bolder text-center">February</th>
                    <th className="fw-bolder text-center">March</th>
                    <th className="fw-bolder text-center">April</th>
                    <th className="fw-bolder text-center">May</th>
                    <th className="fw-bolder text-center">June</th>
                    <th className="fw-bolder text-center">July</th>
                    <th className="fw-bolder text-center">Auguest</th>
                    <th className="fw-bolder text-center">September</th>
                    <th className="fw-bolder text-center">Octobor</th>
                    <th className="fw-bolder text-center">November</th>
                    <th className="fw-bolder text-center">December</th>
                    <th className="fw-bolder text-center">Year <br /> (2023)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-bolder text-dark">Net Amount (Subtotal)</td>
                    <td>$0.00</td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                    <td className="text-center"></td>
                  </tr>
                  <tr>
                    <td className="fw-bolder text-dark">Total Tax</td>
                    <td>css styles</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                  </tr>
                  <tr>
                    <td className="fw-bolder text-dark">Total</td>
                    <td>$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                    <td className="text-center">$0.00</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Expences