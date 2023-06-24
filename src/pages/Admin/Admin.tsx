import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FeatherIcon from "feather-icons-react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const Admin = () => {
    const getHREmployee = JSON.parse((localStorage.getItem('apps-admin-setup')) || '')
    console.log(getHREmployee?.children)


    // console.log(getHREmployee?.children.map((data: { label: any }) => data.label))

    // const [activeLink, setActiveLink] = useState('');
    // const activePage = window.location.pathname;
    // const navLinks = document.querySelectorAll('nav a Link').forEach(link => {
    //   if ((link as HTMLAnchorElement).href.includes(`${activePage}`)) { 
    //     console.log(`${activePage}`);
    //     link.classList.add("active");
    //   }
    // });

    const pathname = window.location.pathname
    // console.log('hremploye', pathname)
    return (
        <div>
            <Navbar expand="lg">
                <>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                getHREmployee?.children.map((data: {
                                    icon: any; children: any; label: any
                                }) => (
                                    <div className="d-flex border align-items-center  justify-content-start bg-white me-1">
                                        <FeatherIcon icon={data?.icon} className="ms-1" style={{ width: '17px', color: '#1f1d1dde' }} />
                                        <div className="d-flex mx-2 ms-auto text-white align-items-center justify-content-start">
                                            <NavDropdown title={data?.label} id="basic-nav-dropdown" style={{ color: '#1f1d1dde' }}>
                                                {data?.children.map((child: {
                                                    icon: any;
                                                    url: string | undefined;
                                                    label: any;
                                                }) => (
                                                    <NavDropdown.Item  >
                                                        <FeatherIcon icon={child?.icon} className="me-1 text-secondary" style={{ width: '17px' }} />
                                                        <Link to={child?.url ? child.url : ''} style={{ color: 'white !important' }}>
                                                            <span className='fw-bold text-secondary'>
                                                                {child?.label}
                                                            </span>
                                                        </Link>
                                                    </NavDropdown.Item>

                                                ))}
                                            </NavDropdown>
                                            <span className="arrow-down text-dark"></span>
                                        </div>
                                    </div>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </>
            </Navbar>
            {
                pathname === '/apps/admin/admins' ?
                    <>
                        <div className='mt-2 mb-3 p-3'>
                            <div className='mt-2'>
                                <Link to="/apps/admin/setup/addstaff" style={{ textDecoration: "none" }}>
                                    <Button type="submit" variant="success" className="fw-bold align-items-center">
                                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Staff Member</span>
                                    </Button>
                                </Link>
                                <div className="staff_container">
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
                                                    <th className="fw-bolder">Full Name</th>
                                                    <th className="fw-bolder">Email</th>
                                                    <th className="fw-bolder">Role</th>
                                                    <th className="fw-bolder">Last login</th>
                                                    <th className="fw-bolder">Active</th>
                                                    <th className="fw-bolder d-flex justify-content-center align-items-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>test123@gmail.com</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>
                                                        <Form>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                            />
                                                        </Form>
                                                    </td>
                                                    <td className="d-flex justify-content-center align-items-center">
                                                        <Link to="/apps/admin/setup/viewStaff">
                                                            <Button variant="success" className="fw-bold">View</Button>
                                                        </Link>
                                                        <Button variant="danger" className="ms-2 fw-bold">Delete</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>test123@gmail.com</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>
                                                        <Form>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                            />
                                                        </Form>
                                                    </td>
                                                    <td className="d-flex justify-content-center align-items-center">
                                                        <Link to="/apps/admin/setup/viewStaff">
                                                            <Button variant="success" className="fw-bold">View</Button>
                                                        </Link>
                                                        <Button variant="danger" className="ms-2 fw-bold">Delete</Button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>test123@gmail.com</td>
                                                    <td>@mdo</td>
                                                    <td>@mdo</td>
                                                    <td>
                                                        <Form>
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                            />
                                                        </Form>
                                                    </td>
                                                    <td className="d-flex justify-content-center align-items-center">
                                                        <Link to="/apps/admin/setup/viewStaff">
                                                            <Button variant="success" className="fw-bold">View</Button>
                                                        </Link>
                                                        <Button variant="danger" className="ms-2 fw-bold">Delete</Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                    :
                    ''
            }
        </div>
    )
}

export default Admin 