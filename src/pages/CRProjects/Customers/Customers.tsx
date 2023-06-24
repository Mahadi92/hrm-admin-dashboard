import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './Customers.css';
import CRProjects from '../CRProjects';

interface LayoutType {
    id: number;
    name: string;
}
const Customers = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
    return (
        <>
            {
                layout === "opened" ? <CRProjects /> : ''
            }
            <div className='mt-2 mb-4 p-3'>
                <div className="kbbtnbox d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <Link to="/apps/admin/knowledge/newarticle" style={{ textDecoration: "none" }}>
                            <Button type="submit" variant="success" className="fw-bold align-items-center">
                                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Lead</span>
                            </Button>
                        </Link>
                        {/* <Link to="/apps/admin/knowledge/groups" style={{ textDecoration: "none" }}> */}
                        <Button type="submit" variant="success" className="fw-bold align-items-center ms-2">
                            {/* <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} /> */}
                            <i className="fa-solid fa-cloud-arrow-up"></i> <span className="fs-5 ms-2">Import Lead</span>
                        </Button>
                        {/* </Link> */}
                        <Button type="submit" variant="success" className="fw-bold align-items-center ms-2">
                            <i className="fa-solid fa-arrow-up-short-wide"></i>
                        </Button>
                    </div>

                    <div className="d-flex">
                        <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                            <FeatherIcon icon="filter" className="me-1" style={{ width: '22px' }} />
                        </Button>
                    </div>
                </div>

                <div className="staff_container">

                    <h6 className="fw-bold text-dark mb-2">Filter by</h6>
                    <div className="d-flex mb-3">
                        <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                            <span className="fw-bold text-dark">0</span>  <span className="fw-bold text-dark">Total Customers</span>
                        </Button>
                        <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                            <span className="fw-bold text-success">0</span>  <span className="fw-bold text-success">Active Customers</span>
                        </Button>
                        <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                            <span className="fw-bold text-warning">0</span>  <span className="fw-bold text-warning">Inactive Customers</span>
                        </Button>
                        <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                            <span className="fw-bold text-secondary">0</span>  <span className="fw-bold text-secondary">Active Contacts</span>
                        </Button>
                        <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                            <span className="fw-bold text-success">0</span>  <span className="fw-bold text-success">Inactive Contacts</span>
                        </Button>
                        <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                            <span className="fw-bold text-success">0</span>  <span className="fw-bold text-success">Contacts Logged in Today</span>
                        </Button>
                    </div>
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
                                    <th className="fw-bolder border-end text-muted">#</th>
                                    <th className="fw-bolder border-end text-muted">Project Name</th>
                                    <th className="fw-bolder border-end text-muted">Customer</th>
                                    <th className="fw-bolder text-center text-muted">Tags</th>
                                    <th className="fw-bolder text-center text-muted">Start Date</th>
                                    <th className="fw-bolder text-center text-muted">Deadline</th>
                                    <th className="fw-bolder text-center text-muted">Members</th>
                                    <th className="fw-bolder text-center text-muted">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>css styles</td>
                                    <td>css styles</td>
                                    <td className="text-center">12/3/2023</td>
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
        </>
    )
}

export default Customers  