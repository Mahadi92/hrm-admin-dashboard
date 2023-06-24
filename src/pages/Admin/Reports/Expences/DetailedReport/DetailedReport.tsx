import React from 'react'
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './DetailedReport.css';
import { Link } from 'react-router-dom';

const DetailedReport = () => {
    return (
        <div className='mt-4 mb-4'>
            <div className="kbbtnbox d-flex justify-content-between align-items-center">

                <div className="d-flex">
                    <h4 className="fw-bold text-dark">Expenses Report</h4>
                </div>

                <div className="d-flex">
                    <Link to="/apps/admin/reports/expences">
                        <Button type="submit" variant="light" className="fw-bold align-items-center border">
                            Go Back
                        </Button>
                    </Link>
                    <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                        <FeatherIcon icon="filter" className="me-1" style={{ width: '20px' }} />
                    </Button>
                </div>
            </div>

            <div className="staff_container">
                <div className="d-flex w-100">
                    <Form.Group className="mb-2 w-50" controlId="formBasicEmail">
                        <Form.Label>
                            From Date
                        </Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-2 ms-2 w-50" controlId="formBasicEmail">
                        <Form.Label>
                            To Date
                        </Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                </div>

                <div className="stafftable mt-2 px-0 w-100">
                    <div className="staffSelec d-flex justify-content-between mb-2">
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
                    <div className="table-responsive">
                        <Table striped bordered hover>
                            <thead>
                                <tr style={{ fontWeight: 'bold' }}>
                                    <th className="fw-bolder border-end text-muted">Category</th>
                                    <th className="fw-bold border-end text-muted ">Amount</th>
                                    <th className="fw-bold text-center text-muted ">Name</th>
                                    <th className="fw-bold text-center text-muted ">Tax1</th>
                                    <th className="fw-bold text-center text-muted ">Tax2</th>
                                    <th className="fw-bold text-center text-muted ">Total Tax</th>
                                    <th className="fw-bold text-center text-muted ">Amount With Tax</th>
                                    <th className="fw-bold text-center text-muted ">Billable</th>
                                    <th className="fw-bold text-center text-muted ">Date</th>
                                    <th className="fw-bold text-center text-muted ">Customer</th>
                                    <th className="fw-bold text-center text-muted ">Invoice</th>
                                    <th className="fw-bold text-center text-muted ">Reference</th>
                                    <th className="fw-bold text-center text-muted ">Payment Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="fw-bolder text-dark">Item1</td>
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
                                </tr>
                               
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailedReport