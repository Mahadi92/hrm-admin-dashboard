import React from 'react';
import FeatherIcon from "feather-icons-react"
import { Button, Col, Row, Table } from 'react-bootstrap';
import './SalesCR.css';
import Form from 'react-bootstrap/Form';
import CRProjects from '../CRProjects';

interface LayoutType {
  id: number;
  name: string;
}

const SalesCR = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <CRProjects /> : ''
      }
      <div className="mt-2 p-3 mb-4">
        <Row>
          <Col className="w-100 h-100">
            <div className="border-end">
              <h3 className='fw-bold text-dark'><FeatherIcon icon="file" className="me-1" style={{ width: '22px' }} />Sales Report</h3>
              <div className="mt-2 flex-column d-flex justify-content-start align-items-start">
                <Button type="submit" className="fw-bold align-items-center ms-2 salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Items Received Report</span>
                </Button>
                <Button type="submit" className="fw-bold align-items-center ms-2 my-1 nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Payment Received</span>
                </Button>
                <Button type="submit" className="fw-bold align-items-center ms-2 my-1  nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Credit Notes Report</span>
                </Button>
                <Button type="submit" className="fw-bold align-items-center ms-2 my-1  nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Personal Report</span>
                </Button>
                <Button type="submit" className="fw-bold align-items-center ms-2 my-1  nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Estimate Report</span>
                </Button>
                <Button type="submit" className="fw-bold align-items-center ms-2 my-1  nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Customer Reports</span>
                </Button>
              </div>
            </div>

          </Col>
          <Col >
            <div className="border-end">
              <h3 className='fw-bold text-dark'><FeatherIcon icon="bar-chart" className="me-1" style={{ width: '22px' }} />Charts Based Report</h3>
              <div className="mt-2 flex-column d-flex justify-content-start align-items-start">
                <Button type="submit" className="fw-bold align-items-center ms-2 nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Total Income</span>
                </Button>
                <Button type="submit" className="fw-bold align-items-center ms-2 my-1  nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Payment Modes (Transaction)</span>
                </Button>
                <Button type="submit" className="fw-bold align-items-center ms-2 my-1  nrmlbtn salesbtn">
                  <FeatherIcon icon="chevron-down" className="me-2" style={{ width: '22px' }} /> <span className="fs-5">Total Value by Customer Groups</span>
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className="staffSize d-flex justify-content-end">
              <div className="w-50">
                <Form.Label className='fw-bold text-dark'>
                  Period
                </Form.Label>
                <Form.Select className="rounded fw-bold">
                  <option>All Time</option>
                  <option>This Month</option>
                  <option>Last Month</option>
                </Form.Select>
              </div>
            </div>
          </Col>

          <div className="staff_container mt-3">
            <h3 className='text-dark fw-bold mb-2'>Generated Report</h3>
            <p className="text-primary mb-3">Items report is generated only from paid invoices before discounts and taxes.</p>
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
              <Table>
                <thead>
                  <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                    <th className="fw-bolder border-end">Item</th>
                    <th className="fw-bolder border-end text-center">Quantity Sold</th>
                    <th className="fw-bolder text-center border-end">Total Amount</th>
                    <th className="fw-bolder text-center">Average Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4</td>
                    <td className="text-center">2</td>
                    <td className="text-center">10500</td>
                    <td className="text-center">9500</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Row>

      </div>
    </>
  )
}

export default SalesCR 