import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FeatherIcon from "feather-icons-react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CRProjects = () => {
    const getHREmployee = JSON.parse((localStorage.getItem('hr-customers')) || '')
    console.log(getHREmployee?.children)
    // console.log(getHREmployee?.children.map((data: { label: any }) => data.label))
    const pathname = window.location.pathname
    console.log('hremploye', pathname)


    // fetching api
    const [projectData, setData] = useState([]);
    console.log('all projects data', projectData);

    const progressData: any = projectData

    const filteredProgressData = progressData.filter((obj: any) => obj.status === "In Progress");
    const filteredCacelledData = progressData.filter((obj: any) => obj.status === "Cancelled");
    const filteredOnHoldData = progressData.filter((obj: any) => obj.status === "On Hold");
    const filteredNotStartedsData = progressData.filter((obj: any) => obj.status === "Not Started");
    const filteredFinishedData = progressData.filter((obj: any) => obj.status === "Finished");
    // console.log('filtered data', filteredProgressData);

    useEffect(() => {
        const data = new FormData();
        data.append('Process', 'see_all');
        data.append('admin_user_name', 'admin');
        data.append('admin_password', 'admin');

        fetch('https://pubapi.rubytech.xyz/project/find_all_projects/', {
            method: 'POST',
            body: data,
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Request failed with status ' + response.status);
                }
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                // Handle any errors
                console.log('Error:', error);
            });
    },);



    // handle delete
    const handleDelete = (id: any) => {
        console.log('delete', id);
        try {
            const data = new FormData();
            data.append('Process', 'delete');
            data.append('admin_user_name', 'admin');
            data.append('admin_password', 'admin');
            data.append('deleted_projects_id', id);

            fetch('https://pubapi.rubytech.xyz/project/delete_projects/', {
                method: 'POST',
                body: data,
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('Request failed with status ' + response.status);
                    }
                })
                .then(data => {
                    data && Swal.fire({
                        title: 'success!',
                        text: 'Project Deleted Successfully',
                        icon: 'success',
                    })
                    // setTimeout(function () {
                    //   window.location.reload();
                    // }, 1)
                })
                .catch(error => {
                    // Handle any errors
                    console.log('Error:', error);
                });
        } catch (err) {
            console.log('Error:', err)
        }
    }


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
                                    <div className="d-flex border align-items-center  justify-content-start bg-white me-2">
                                        <FeatherIcon icon={data?.icon} className="ms-3" style={{ width: '17px', color: '#1f1d1dde' }} />
                                        <div className="d-flex mx-3 ms-auto text-white align-items-center justify-content-start">
                                            <NavDropdown title={data?.label} id="basic-nav-dropdown" style={{ color: '#1f1d1dde' }}>
                                                {data?.children.map((child: {
                                                    icon: any;
                                                    url: string | undefined;
                                                    label: any;
                                                }) => (
                                                    <NavDropdown.Item className='me-4'>
                                                        <FeatherIcon icon={child?.icon} className="me-1 text-secondary" style={{ width: '17px', }} />
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
                pathname === '/apps/admin/crprojects' ?
                    <>
                        <div className='mt-2 p-3 mb-4'>
                            <div className="kbbtnbox d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                    <Link to="/apps/crprojects/projects/addnew" style={{ textDecoration: "none" }}>
                                        <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                            <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Project</span>
                                        </Button>
                                    </Link>
                                    {/* <Link to="/apps/admin/knowledge/groups" style={{ textDecoration: "none" }}> */}
                                    <Button type="submit" className="lgnbtn fw-bold align-items-center ms-2">
                                        <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} /> <span className="fs-5"></span>
                                    </Button>
                                    {/* </Link> */}
                                </div>

                                <div className="d-flex">
                                    <Button type="submit" className="lgnbtn fw-bold align-items-center ms-2">
                                        <FeatherIcon icon="filter" className="me-1" style={{ width: '22px' }} />
                                    </Button>
                                </div>
                            </div>

                            <div className="staff_container">
                                <h4 className="fw-bold text-dark mb-2"><FeatherIcon icon="clipboard" style={{ width: '22px' }} /> Projects Summary</h4>
                                <div className="d-flex mb-3">
                                    <Row className='gy-2 w-100'>
                                        <Col>
                                            <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                                <span className="fw-bold text-dark">{filteredNotStartedsData?.length}</span>  <span className="fw-bold text-dark">Not Started</span>
                                            </Button>
                                        </Col>
                                        <Col >
                                            <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                                <span className="fw-bold text-success" >{filteredProgressData.length} </span>
                                                <span className="fw-bold text-success">In Progress</span>
                                            </Button>
                                        </Col>
                                        <Col>
                                            <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                                <span className="fw-bold text-warning">{filteredOnHoldData?.length}</span>  <span className="fw-bold text-warning">On Hold</span>
                                            </Button>
                                        </Col>
                                        <Col >
                                            <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                                                <span className="fw-bold text-secondary">{filteredCacelledData?.length}</span>  <span className="fw-bold text-secondary">Cancel</span>
                                            </Button>
                                        </Col>
                                        <Col >
                                            <Button type="submit" variant="light" className="fw-bold align-items-center">
                                                <span className="fw-bold text-success">{filteredFinishedData?.length}</span>  <span className="fw-bold text-success">Finished</span>
                                            </Button>
                                        </Col>
                                    </Row>




                                </div>
                                <div className="staffSelec d-flex justify-content-between">
                                    <div className="staffLeft d-flex w-100 h-100 justify-content-start">
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
                                            <Button variant="light" className="d-flex justify-content-center align-items-center border ms-1">
                                                <FeatherIcon icon="refresh-ccw" className="me-1" style={{ width: '12px' }} />
                                            </Button>
                                        </div>
                                    </div>


                                    <div className="staffSearch d-flex justify-content-start w-100">
                                        <div className="ms-auto d-flex justify-content-start">
                                            <Button variant="light d-flex justify-content-center align-items-center" >
                                                <FeatherIcon icon="search" style={{ width: '12px' }} />
                                            </Button>
                                            <Form className="d-flex" >
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
                                                    <th className="fw-bolder border-end text-muted">#</th>
                                                    <th className="fw-bolder border-end text-muted">Project Name</th>
                                                    <th className="fw-bolder border-end text-muted">Customer</th>
                                                    <th className="fw-bolder text-center text-muted">Tags</th>
                                                    <th className="fw-bolder text-center text-muted">Start Date</th>
                                                    <th className="fw-bolder text-center text-muted">End Date</th>
                                                    <th className="fw-bolder text-center text-muted">Members ID</th>
                                                    <th className="fw-bolder text-center text-muted">Status</th>
                                                    <th className="fw-bolder text-center text-muted">Actions</th>
                                                </tr>
                                            </thead>
                                            {
                                                projectData.map((item: {
                                                    project_name: string,
                                                    estimated_hour: any,
                                                    billing: string,
                                                    customer_name: string,
                                                    description: string,
                                                    start_date: any,
                                                    end_date: any,
                                                    members: string[],
                                                    tags: string,
                                                    status: string,
                                                    id: any,

                                                }, index: number,) => (
                                                    <tbody key={index}>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{item.project_name}</td>
                                                            <td>{item.customer_name}</td>
                                                            <td className="text-center">{item.tags}</td>
                                                            <td className="text-center">{item.start_date.slice(0, 10)}</td>
                                                            <td className="text-center">{item.end_date.slice(0, 10)}</td>
                                                            <td className="text-center">
                                                                {
                                                                    item.members.map((i, index) => (
                                                                        <span key={index} className="text-dark">{i}, </span>
                                                                    ))
                                                                }
                                                            </td>
                                                            <td className="text-center">{item.status}</td>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <Link to={`/apps/crprojects/projects/update/${item.id}`}>
                                                                        <Button variant="success d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                                                                            <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                                                                        </Button>
                                                                    </Link>
                                                                    <Button onClick={() => handleDelete(item.id)} variant="danger d-flex justify-content-center align-items-center ms-2" style={{ height: '30px' }}>
                                                                        <i className="fa-solid fa-trash me-1"></i>  Delete
                                                                    </Button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                ))}

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

export default CRProjects 