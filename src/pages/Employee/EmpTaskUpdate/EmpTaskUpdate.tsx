import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Table } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Employee from '../Employee';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EmpTaskUpdate = () => {

    const { id } = useParams<{ id: string }>();
    console.log('id', id);
    const pjid: any = id

    const [singleData, setSingleData] = useState({
        assigner: { User_Name: '', id: '' },
        created_at: '',
        end_date: '',
        file_upload: '',
        followers: [],
        hourly_rate: '',
        id: '',
        priority: '',
        related_to: { project_name: '', customer_name: '' },
        repeat_every: '',
        start_date: '',
        tags: '',
        status: '',
        task_description: '',
        task_name: '',
        project_name: '',
        customer_name: '',
        updated_at: '',

    });
    console.log('single task data', singleData);
    // console.log('customer_name', singleData.customer_name);
    // console.log('status', singleData.status);
    // console.log('project_name', singleData.project_name);

    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'see_one');
            data.append('admin_user_name', 'admin');
            data.append('admin_password', 'admin');
            data.append('task_id', pjid);

            try {
                const response = await fetch(
                    'https://pubapi.rubytech.xyz/task/find_one_task/',
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


    // TASK UPDATED
    const navigate = useNavigate()

    const [start_date, setStartDate] = useState(singleData.start_date || '')
    const [end_date, setEndDate] = useState(singleData.end_date || '')
    const [priority, setPriority] = useState<string>(singleData.priority || '')
    const [task_status, setTaskStatus] = useState<string>(singleData.status || '')
    const [repeat_every, setRepeat] = useState(singleData.repeat_every || '')
    // const [repeat_every, setRepeat] = useState<string>()
    const [project_name, setProjectName] = useState(singleData.related_to.project_name || '')
    const [task_tags, setTags] = useState(singleData.tags || '')
    const [assigner_id, setAssignees] = useState(singleData.assigner || '')
    const [follower, setFollower] = useState<string[] | Blob | any>(singleData.followers || [])
    const [task_description, setDescription] = useState(singleData.task_description || '')
    const [customer_name, setCustomer_name] = useState(singleData.customer_name || '')
    const [related_project_id, setRelated_project_id] = useState(singleData.related_to || '')
    const [task_name, setTask_name] = useState(singleData.task_name || '')
    const [hourly_rate, sethourly_rate] = useState(singleData.hourly_rate || '')
    const [file_here, setfile_here] = useState(singleData.file_upload || '')


    const [res, setRes] = useState([])


    console.log('taskName', task_name)
    console.log('start_date', start_date)
    console.log('startDate', start_date)
    console.log('end_date', end_date)
    console.log('setFile', file_here)
    console.log('repeat', repeat_every)
    console.log('priority', priority)
    console.log('related project_name', project_name)
    // console.log('related related_project_id', related_project_id)
    console.log('task_tags', task_tags)
    console.log('assigner_id', singleData?.assigner.id)
    console.log('follower', follower)
    console.log('description', task_description)


    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('Process', 'update')
        data.append('employee_user_name', username)
        data.append('employee_password', passwd)
        data.append('project_name', project_name || singleData?.related_to.project_name || "")
        data.append('customer_name', customer_name || singleData?.related_to.customer_name || "")
        data.append('task_name', task_name || singleData?.task_name || '')
        data.append('hourly_rate', hourly_rate || singleData?.hourly_rate || '')
        data.append('priority', priority || singleData?.priority || '')
        data.append('repeat_every', repeat_every || singleData?.repeat_every || '')
        data.append('task_tags', task_tags || singleData?.tags || '');
        data.append('task_description', task_description || singleData?.task_description || '')
        data.append('start_date', start_date || singleData?.start_date || '')
        data.append('end_date', end_date || singleData?.end_date || '')
        data.append('related_project_id', '12')
        // data.append('assigner_id', singleData?.assigner.id)
        data.append('updated_task_id', singleData.id)
        // data.append('task_status', task_status || singleData?.status || '')
        data.append('file_here', file_here || singleData?.file_upload || '')


        fetch('https://pubapi.rubytech.xyz/task/update_task_by_employee/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response) => {
                console.log('158', response)
                setRes(response);
                if (response.massage === "Data is Updated") {
                    Swal.fire({
                        title: 'success!',
                        text: 'Task Updated Successfully',
                        icon: 'success',
                    })
                    navigate("/apps/employee/checkcreatedtask")
                } else {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Task Updated Failed',
                        icon: 'error',
                    })
                }

                // setTimeout(function () {
                //     window.location.reload();
                // }, 1)
            })

            .catch(error => {
                console.log(error);
            });
    }

    // show all projects
    const [projectData, setData] = useState([])
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
    }, []);
    return (
        <div>
            <Employee />
            <div className="mt-2 pt-2 mb-4 p-2">
                <div className="as_container d-flex justify-content-center aligm-items-center h-100">

                    <div className="w-100 " style={{ backgroundColor: '#fff' }}>
                        <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                            Task Update
                        </Button>
                        <div className="p-3">
                            <Tabs
                                defaultActiveKey="Task Details"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-2 fw-bold border-bottom border-2"
                            >
                                <Tab eventKey="Task Details" title="Task Details">
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Task Name
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.task_name}
                                                        onChange={(e) => setTask_name(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Assigned by me
                                                    </Form.Label>
                                                    <Form.Control type="text" className='bg-light' defaultValue={singleData?.assigner.User_Name} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Project Name
                                                    </Form.Label>
                                                    <div className="d-flex">
                                                        <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setProjectName(e.target.value)}>
                                                            <option>{singleData?.related_to.project_name}</option>
                                                            {
                                                                projectData.map((item: { project_name: string, }, index: number) => (
                                                                    <option key={index}>{item.project_name}</option>
                                                                ))
                                                            }

                                                        </Form.Select>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Customer Name
                                                    </Form.Label>
                                                    <div className="d-flex">
                                                        <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setCustomer_name(e.target.value)}>
                                                            <option>{singleData?.related_to.customer_name}</option>
                                                            {
                                                                projectData.map((item: { customer_name: string, }, index: number) => (
                                                                    <option key={index}>{item.customer_name}</option>
                                                                ))
                                                            }

                                                        </Form.Select>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Priority
                                                    </Form.Label>
                                                    <div className="d-flex">
                                                        <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setPriority(e.target.value)}>
                                                            <option>{singleData.priority}</option>
                                                            <option>Low</option>
                                                            <option>Medium</option>
                                                            <option>High</option>
                                                            <option>Very High</option>
                                                        </Form.Select>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Status
                                                    </Form.Label>
                                                    <div className="d-flex">
                                                        <Form.Select className="fw-bold" onChange={(e: any) => setTaskStatus(e.target.value)}>
                                                            <option>{singleData?.status ? singleData?.status : 'Not Found'} </option>
                                                            <option>Not Started</option>
                                                            <option>On Hold</option>
                                                            <option>Cancelled</option>
                                                            <option>In Progress</option>
                                                            <option>Finished</option>
                                                        </Form.Select>
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Repeat Task
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.repeat_every}
                                                        onChange={(e) => setRepeat(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Hourly Rate
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={
                                                        singleData?.hourly_rate ? `${singleData?.hourly_rate} Tk` : 'Not Found'
                                                    } onChange={(e) => sethourly_rate(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Start Date
                                                        <Form.Control type="text" defaultValue={singleData?.start_date.slice(0, 10)}
                                                            onChange={(e) => setStartDate(e.target.value)}
                                                            disabled
                                                            className='bg-light w-100'
                                                        />
                                                    </Form.Label>
                                                    <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        End Date
                                                        <Form.Control type="text" className='bg-light' defaultValue={singleData?.end_date.slice(0, 10)} disabled />
                                                    </Form.Label>
                                                    <Form.Control type="date" onChange={(e) => setEndDate(e.target.value)} />
                                                </Form.Group>
                                            </Col>

                                            {/* <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Related Project Name / ID
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.related_to.project_name}  />
                                                </Form.Group>
                                            </Col> */}

                                            {/* <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Task Assigned by me
                                                    </Form.Label>
                                                    <Form.Control as="select" multiple >
                                                        {
                                                            singleData.followers.map((i: { User_Name: string, id: number }, index: number) => (
                                                                <option defaultValue={i.id} key={index} disabled className='bg-light'>{i.User_Name}</option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col> */}
                                            <Col md={12}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Tags
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.tags} onChange={(e) => setTags(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Descriptions
                                                    </Form.Label>
                                                    <Form.Control as="textarea" defaultValue={singleData?.task_description}
                                                        onChange={(e) => setDescription(e.target.value)} />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-evenly">
                                            <Button type="submit" className="lgnbtn fw-bold align-items-center" onClick={handleSubmit}>
                                                <span>Update</span>
                                            </Button>
                                            <Link to="/apps/employee/checkcreatedtask" style={{ textDecoration: "none" }}>
                                                <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                                    <span>Go Back</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </Form>
                                </Tab>
                                {/* <Tab eventKey="Project Setting" title="Project Setting">
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Send T
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                   
                                </Tab> */}
                            </Tabs>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpTaskUpdate 