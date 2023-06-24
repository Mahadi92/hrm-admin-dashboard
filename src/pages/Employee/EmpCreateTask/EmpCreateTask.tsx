import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import Employee from '../Employee';
import Swal from 'sweetalert2';
// import './AddNewTask.css';
interface LayoutType {
    id: number;
    name: string;
}

const EmpCreateTask = () => {

    // handleSubmit
    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

    const [task_name, setTaskName] = useState('')
    const [file_here, setFile] = useState('');
    // const [file_here, setFile] = useState<File | undefined | Blob>(undefined);

    const [hourly_rate, setHourlyRate] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [priority, setPriority] = useState<string>('')
    const [task_status, setTaskStatus] = useState('')
    const [repeat_every, setRepeat] = useState('')
    // const [repeat_every, setRepeat] = useState<string>()
    const [project_name, setProjectName] = useState('')
    const [task_tags, setTags] = useState('')
    const [assigner_id, setAssignees] = useState('')
    // const [assigner_id, setAssignees] = useState<string[]>()
    const [follower, setFollower] = useState<string[] | Blob>([])
    const [task_description, setDescription] = useState('')
    const [customer_name, setCustomer_name] = useState('')
    const [related_project_id, setRelated_project_id] = useState('')
    const [res, setRes] = useState([])


    console.log('taskName', task_name)
    console.log('project_name', project_name)
    console.log('customer_name', customer_name)
    console.log('start_date', start_date)
    console.log('end_date', end_date)
    console.log('setFile', file_here)
    console.log('hourlyRate', hourly_rate)
    console.log('repeat', repeat_every)
    console.log('priority', priority)
    console.log('task_status', task_status)
    console.log('startDate', start_date)
    console.log('endDate', end_date)
    console.log('related project_name', project_name)
    console.log('related_project_id', related_project_id)
    console.log('task_tags', task_tags)
    console.log('assigner_id', assigner_id)
    console.log('follower', follower)
    console.log('description', task_description)



    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('Process', 'create')
        data.append('employee_user_name', username)
        data.append('employee_password', passwd)
        data.append('followers_id_list', '2,3,4');

        // data.append('followers_id_list', '2,4,5')
        data.append('project_name', project_name)
        data.append('customer_name', customer_name)
        data.append('related_project_id', '12')
        data.append('assigner_id', assigner_id)
        data.append('hourly_rate', hourly_rate)
        data.append('task_name', task_name)
        data.append('file_here', file_here)
        // data.append('priority', 'Low')
        data.append('priority', priority)
        data.append('task_status', task_status)
        // data.append('repeat_every', 'Week')
        data.append('repeat_every', repeat_every)
        // data.append('task_tags', 'tagss')
        data.append('task_tags', task_tags)
        // data.append('task_description', 'task_description')
        data.append('task_description', task_description)
        data.append('start_date', start_date)
        data.append('end_date', end_date)

        fetch('https://pubapi.rubytech.xyz/task/create_task_by_employee/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response) => {
                console.log('103', response)
                setRes(response);
                if (response.massage === "NOT VALID1") {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Task Creation Failed',
                        icon: 'error',
                    })

                } else {
                    response && Swal.fire({
                        title: 'success!',
                        text: 'Task Created Successfully',
                        icon: 'success',
                    })
                    // navigate("/apps/crprojects/tasks")
                }

                // setTimeout(function () {
                //     window.location.reload();
                // }, 1)
            })

            .catch(error => {
                // Handle any errors
                console.log(error);
            });
    }


    // show all projects
    const [projectData, setData] = useState([])
    console.log('projectData',projectData)
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
    },[]);

    return (
        <>
            <Employee />
            <div className="mt-4 mb-4 p-2">
                <div className="d-flex  justify-content-center align-items-center">
                    <div className="w-100 bg-white">
                        <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                            Add New Task
                        </Button>
                        <div className="p-2">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Task Name
                                        </Form.Label>
                                        <Form.Control type="text" onChange={(e) => setTaskName(e.target.value)} />
                                    </Form.Group>
                                </Col>

                                <Col md={6}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Status
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold" onChange={(e: any) => setTaskStatus(e.target.value)}>
                                                <option>Nothing Selected</option>
                                                <option>Not Started</option>
                                                <option>On Hold</option>
                                                <option>Cancelled</option>
                                                <option>In Progress</option>
                                                <option>Finished</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Hourly Rate
                                </Form.Label>
                                <Form.Control type="number" defaultValue={0} onChange={(e) => setHourlyRate(e.target.value)} />
                            </Form.Group>
                            <div className="d-flex w-100">
                                <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Start Date
                                    </Form.Label>
                                    <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> End Date
                                    </Form.Label>
                                    <Form.Control type="date" onChange={(e) => setEndDate(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className="d-flex">
                                <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Priority
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setPriority(e.target.value)}>
                                            <option>Nothing Selected</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                            <option>Very High</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Repeat every
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setRepeat(e.target.value)}>
                                            <option>Nothing Selected</option>
                                            <option>week</option>
                                            <option>2 week</option>
                                            <option>3 week</option>
                                            <option>1 week</option>
                                            <option>Daily</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </div>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    Project Name
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setProjectName(e.target.value)}>
                                        <option>Nothing Selected</option>
                                        {
                                            projectData.map((item: { project_name: string, }, index: number) => (
                                                <option key={index}>{item.project_name}</option>
                                            ))
                                        }

                                    </Form.Select>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    Customer Name
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setCustomer_name(e.target.value)}>
                                        <option>Nothing Selected</option>
                                        {
                                            projectData.map((item: { customer_name: string, }, index: number) => (
                                                <option key={index}>{item.customer_name}</option>
                                            ))
                                        }

                                    </Form.Select>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    Tag
                                </Form.Label>
                                <Form.Control type="text" onChange={(e) => setTags(e.target.value)} />
                            </Form.Group>
                            {/* <div className="d-flex">
                                <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Assignees
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold text-secondary" >
                                            <option>Nothing Selected</option>
                                            <option>Admin</option>
                                            <option>Jhony</option>
                                            <option>Nadim</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                                <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicPassword">
                                    <Form.Label>
                                        Followers
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Select className="fw-bold text-secondary">
                                            <option>Nothing Selected</option>
                                            <option>test</option>
                                            <option>User 2</option>
                                            <option>test user 2</option>
                                        </Form.Select>
                                    </div>
                                </Form.Group>
                            </div> */}
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    Task Description
                                </Form.Label>
                                <Form.Control as="textarea" type="text" onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>
                         
                            <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleSubmit}>
                                <span className="fs-5">Save</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default EmpCreateTask 