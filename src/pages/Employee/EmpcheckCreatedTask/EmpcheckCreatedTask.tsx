import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Employee from '../Employee';

interface LayoutType {
    id: number;
    name: string;
}
const EmpcheckCreatedTask = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

    const [singleData, setSingleData] = useState([]);
    console.log('single user data', singleData);


    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = singleData?.filter((item: { task_name: string, }) =>
        item?.task_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const progressData: any = singleData
    const filteredProgressData = progressData.filter((obj: any) => obj.status === "In Progress");
    const filteredCacelledData = progressData.filter((obj: any) => obj.status === "Cancelled");
    const filteredOnHoldData = progressData.filter((obj: any) => obj.status === "On Hold");
    const filteredNotStartedsData = progressData.filter((obj: any) => obj.status === "Not Started");
    const filteredFinishedData = progressData.filter((obj: any) => obj.status === "Finished");

    console.log('filtered data', filteredProgressData);
    // console.log('customer_name', singleData.customer_name);
    // console.log('status', singleData.status);
    // console.log('project_name', singleData.project_name);

    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'see_one_all');
            data.append('employee_user_name', username);
            data.append('employee_password', passwd);

            try {
                const response = await fetch(
                    'https://pubapi.rubytech.xyz/task/find_one_task_all/',
                    {
                        method: 'POST',
                        body: data,
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setSingleData(data);
                } else {
                    throw new Error('Request failed with status ' + response.status);
                }
            } catch (error) {
                // Handle any errors
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {/* {
        layout === "opened" ? <Employee /> : ''
      } */}
            <Employee />
            <div className='mt-2 p-3 mb-4'>
                <div className=" d-flex justify-content-between align-items-center">
                    <Row className="gy-2 w-100">
                        <Col md={6}>
                            <div className="d-flex w-100">
                                <Link to="/apps/employee/createtask" style={{ textDecoration: "none" }}>
                                    <Button type="submit" className="lgnbtn w-100 fw-bold align-items-center h-auto">
                                        <FeatherIcon icon="plus" className="me-1" />
                                        <span className="fs-5">New Task</span>
                                    </Button>
                                </Link>

                                {/* <Button type="submit" className="lgnbtn fw-bold align-items-center ms-1 border">
              <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} /> <span className="fs-5"></span>
            </Button> */}
                            </div>

                        </Col>
                        <Col md={6}>
                            <div className="d-flex justify-content-end align-items-center ">
                                <Link to="/apps/admin/knowledge/newarticle" style={{ textDecoration: "none" }} className="w-100">
                                    <Button type="submit" className="lgnbtn fw-bold align-items-center w-100">
                                        <span className="fs-5">Task Overview</span>
                                    </Button>
                                </Link>
                                <Button type="submit" className="lgnbtn fw-bold align-items-center ms-2 w-100">
                                    <FeatherIcon icon="filter" className="me-1" style={{ width: '22px' }} />
                                </Button>
                            </div>
                        </Col>
                    </Row>


                </div>

                <div className="mt-4 bg-white">
                    <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                        Created Tasks list
                    </Button>
                    <div className="p-2">
                        <h4 className="fw-bold text-dark mb-2"><FeatherIcon icon="clipboard" style={{ width: '22px' }} /> Task Summary</h4>
                        <div className="d-flex mb-3">
                            <Row className="w-100 h-100 gy-2">
                                <Col>
                                    <Button type="submit" variant="light" className="fw-bold align-items-start justify-content-start border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-dark">{filteredNotStartedsData.length}</span>  <span className="fw-bold text-dark">Not Started</span> <br />
                                        <span>Tasks assigned to me: {filteredNotStartedsData.length}</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-success">{filteredProgressData.length}</span>  <span className="fw-bold text-success">In Progress</span> <br />
                                        <span>Tasks assigned to me: {filteredProgressData.length}</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-warning">{filteredOnHoldData.length}</span>  <span className="fw-bold text-warning">On Hold</span>  <br />
                                        <span>Tasks assigned to me: {filteredOnHoldData.length}</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                                        <span className="fw-bold text-secondary">{filteredCacelledData.length}</span>  <span className="fw-bold text-secondary">Cancel</span>  <br />
                                        <span>Tasks assigned to me: {filteredCacelledData.length}</span>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                                        <span className="fw-bold text-success">{filteredFinishedData.length}</span>  <span className="fw-bold text-success">Finished</span>  <br />
                                        <span>Tasks assigned to me: {filteredFinishedData.length}</span>
                                    </Button>
                                </Col>
                            </Row>
                        </div>


                        <div className="staffSelec d-flex justify-content-between">
                            <div className="staffLeft d-flex w-100 justify-content-start">
                                <div className="">
                                    <Form.Select className="rounded fw-bold">
                                        <option>25</option>
                                        <option>26</option>
                                        <option>27</option>
                                    </Form.Select>
                                </div>

                                <div className="staffexport ms-2 d-flex justify-content-start flex-row">
                                    <Button variant="light" className="d-flex justify-content-center align-items-center border">
                                        <FeatherIcon icon="refresh-ccw" className="me-1" style={{ width: '12px' }} />
                                    </Button>
                                </div>
                            </div>

                            <div className="staffSearch d-flex justify-content-start w-100">
                                <div className="ms-auto d-flex justify-content-start">
                                    <Button variant="light d-flex justify-content-center align-items-center">
                                        <FeatherIcon icon="search" style={{ width: '12px' }} />
                                    </Button>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            // className="me-2"
                                            aria-label="Search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
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
                                                <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" />
                                                </Form.Group>
                                            </th>
                                            <th className="fw-bolder border-end text-muted">#</th>
                                            <th className="fw-bolder border-end text-muted">Task Name</th>
                                            <th className="fw-bolder border-end text-muted">Priority</th>
                                            <th className="fw-bolder text-center text-muted">Status</th>
                                            <th className="fw-bolder text-center text-muted">Start Date</th>
                                            <th className="fw-bolder text-center text-muted">Due Date</th>
                                            <th className="fw-bolder text-center text-muted">Assigned by/ID</th>
                                            <th className="fw-bolder text-center text-muted">Tags</th>
                                            <th className="fw-bolder text-center text-muted">Description</th>
                                            <th className="fw-bolder text-center text-muted">Action</th>
                                        </tr>
                                    </thead>
                                    {
                                        filteredData.map((item: {

                                            assigner: { User_Name:string, User_Roll: string },
                                            created_at: '',
                                            end_date: '',
                                            file_upload: '',
                                            followers: '',
                                            hourly_rate: '',
                                            id: '',
                                            priority: '',
                                            status: '',
                                            related_to: '',
                                            repeat_every: '',
                                            start_date: '',
                                            tags: '',
                                            task_description: '',
                                            task_name: '',
                                            updated_at: '',

                                        }, index: number) => (
                                            <tbody key={index}>
                                                <tr>
                                                    <td>
                                                        <Form.Group controlId="formBasicCheckbox">
                                                            <Form.Check type="checkbox" />
                                                        </Form.Group>
                                                    </td>
                                                    <td>{index + 1}</td>
                                                    <td>{item.task_name}</td>
                                                    <td>{item.priority}</td>
                                                    <td>{item.status ? item.status : 'no status found'}</td>
                                                    <td className="text-center">{item.start_date.slice(0, 10)}</td>
                                                    <td className="text-center">{item.end_date.slice(0, 10)}</td>
                                                    <td className="text-center">{item.assigner.User_Name}</td>
                                                    <td className="text-center">{item.tags}</td>
                                                    <td className="text-center">{item.task_description}</td>
                                                    <td className="text-center w-100">
                                                        <Link to={`/apps/employee/taskview/${item.id}`}>
                                                            <Button className='lgnbtn'>View</Button>
                                                        </Link>
                                                        {
                                                            item.assigner.User_Name === username ?
                                                                <Link to={`/apps/employee/updatedhistask/${item.id}`}>
                                                                    <Button className='lgnbtn ms-2'>Edit</Button>
                                                                </Link>
                                                                :
                                                                ""
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }

                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpcheckCreatedTask    