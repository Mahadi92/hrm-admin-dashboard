import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import './AddNewTask.css';
import Swal from 'sweetalert2';

const AddNewTask = () => {



    // handle form change
    // const handleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTaskName(event.target.value);
    // };
    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];

    //     if (file) {
    //         const reader = new FileReader();

    //         reader.onload = (e) => {
    //             const content = e.target?.result as string;
    //             setFile(content);
    //         };

    //         reader.readAsText(file);
    //     }
    // };
    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = event.target.files?.[0];
    //     setFile(files)
    //     if (file) {
    //       const fileType = file.type;
    //       setFile(fileType)
    //       console.log('File type:', fileType);
    //     }
    //   };

    // const handleHourRate = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setHourlyRate(event.target.value);
    // };

    // const handlePriority = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedOptions = event.currentTarget.selectedOptions;
    //     const repition = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //         repition.push(selectedOptions[i].value);
    //     }
    //     setPriority(repition);
    // };

    // const handleRepeat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedOptions = event.currentTarget.selectedOptions;
    //     const repition = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //         repition.push(selectedOptions[i].value);
    //     }
    //     setRepeat(repition);
    // };


    // const handleRelated = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedOptions = event.currentTarget.selectedOptions;
    //     const repition = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //         repition.push(selectedOptions[i].value);
    //     }
    //     setRelated(repition);
    // };


    // const handleAssigness = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedOptions = event.currentTarget.selectedOptions;
    //     const repition = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //         repition.push(selectedOptions[i].value);
    //     }
    //     setAssignees(repition);
    // };
    // const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTags(event.target.value);
    // };
    // const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setStartDate(event.target.value);
    // };
    // const handleEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEndDate(event.target.value);
    // };
    // const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDescription(event.target.value);
    // };



    const [userData, setUserData] = useState([])
    console.log('userData', userData)
    const adminUser = userData?.filter((i: any) => i.User_Roll === "Admin")
    // console.log('adminUser', adminUser)
    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'see_all');
            data.append('admin_user_name', 'admin');
            data.append('admin_password', 'admin');

            await fetch('https://pubapi.rubytech.xyz/user_info/find_all_user/',
                {
                    method: 'POST',
                    body: data,
                }
            )
                .then(response => response.json())
                .then(res => setUserData(res))
                .then(err => console.log(err))
        };

        fetchData();
    }, []);


    // find all projects
    const [projectData, setProjectData] = useState([])
    const [projectDataID, setProjectDataID] = useState({ id: '' })
    console.log('projectDataID', projectDataID)
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
                setProjectData(data);
                setProjectDataID(data);
            })
            .catch(error => {
                // Handle any errors
                console.log('Error:', error);
            });
    }, []);
    // navigatin
    const navigate = useNavigate()
    const handleFollower = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = event.currentTarget.selectedOptions;
        const repition = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            repition.push(selectedOptions[i].value);
        }
        setFollower(repition);
    };

    const convertFile = (files: FileList | null) => {
        if (files) {
            const fileRef = files[0] || ""
            const fileType: string = fileRef.type || ""
            console.log("This file upload is of type:", fileType)
            const reader = new FileReader()
            reader.readAsBinaryString(fileRef)
            reader.onload = (ev: any) => {
                setFile(`data:${fileType};base64,${btoa(ev.target.result)}`)
            }
        }
    };

    // handleSubmit
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
    console.log('related related_project_id', related_project_id)
    console.log('task_tags', task_tags)
    console.log('assigner_id', assigner_id)
    console.log('follower', follower)
    console.log('description', task_description)



    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('Process', 'create')
        data.append('admin_user_name', 'admin')
        data.append('admin_password', 'admin')
        // data.append('followers_id_list', '2,3,4');
        if (Array.isArray(follower)) {
            const membersIdString = follower.join(',');
            data.append('followers_id_list', membersIdString);
        } else {
            data.append('followers_id_list', follower);
        }
        // data.append('followers_id_list', '2,4,5')
        data.append('project_name', project_name)
        data.append('customer_name', customer_name)
        data.append('related_project_id', '12')
        // data.append('related_project_id', projectDataID.id)
        // data.append('assigner_id', '2')
        // data.append('related_project_id', related_project_id)
        data.append('assigner_id', assigner_id)
        data.append('hourly_rate', hourly_rate)
        // data.append('hourly_rate', '25')
        // data.append('task_name', 'rahat')
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

        fetch('https://pubapi.rubytech.xyz/task/create_task/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response) => {
                console.log('158', response)
                setRes(response);
                if (response.massage === "NOT VALID0") {
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

    return (
        <div className="mt-4 mb-4">
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-100 knbarticle_box">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold text-dark my-2">Add New Task</h4>

                        <Link to="/apps/crprojects/tasks" style={{ textDecoration: "none" }}>
                            <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                <span className="fs-5">Go back</span>
                            </Button>
                        </Link>
                    </div>

                    {/* <div className="d-flex my-2">
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Public" />
                        </Form.Group>
                        <Form.Group className="ms-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Billable" />
                        </Form.Group>
                    </div> */}
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Task Name
                                </Form.Label>
                                <Form.Control type="text" onChange={(e) => setTaskName(e.target.value)} />
                                {/* <Form.Control type="text" onChange={handleTask} /> */}
                            </Form.Group>
                        </Col>
                        {/* <Col md={3}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Image
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e: any) => setFile(e.target.files[0])}
                                    onChange={(e) => setFile((e.target as HTMLInputElement).files?.[0])}
                                    onChange={handleFileChange}
                                    onChange={(e: any) => convertFile(e.target.files)}
                                />
                            </Form.Group>
                        </Col> */}
                        <Col md={3}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Hourly Rate (Tk)
                                </Form.Label>
                                <Form.Control type="number" onChange={(e) => setHourlyRate(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Status
                            </Form.Label>
                            <div className="d-flex">
                                <Form.Select className="fw-bold" onChange={(e:any)=>setTaskStatus(e.target.value) }>
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
                        <Col md={6}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    Tag
                                </Form.Label>
                                <Form.Control type="text" onChange={(e) => setTags(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    Relatead Project Name
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setProjectName(e.target.value)}>
                                        {
                                            projectData?.map((item: {
                                                project_name: string,
                                            }, index: number) => (
                                                <option value={item.project_name} key={index}>{item.project_name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </div>
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>
                                    Customer Name
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setCustomer_name(e.target.value)}>
                                        {
                                            projectData?.map((item: {
                                                customer_name: string,
                                            }, index: number) => (
                                                <option value={item.customer_name} key={index}>{item.customer_name}</option>
                                            ))
                                        }
                                    </Form.Select>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>

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
                                <Form.Select className="fw-bold text-secondary"
                                    onChange={(e) => setPriority((e.target as HTMLSelectElement).value)}>
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
                                <Form.Select className="fw-bold text-secondary"
                                    onChange={(e) => setRepeat((e.target as HTMLSelectElement).value)}>
                                    <option>Nothing Selected</option>
                                    <option>week</option>
                                    <option>2 week</option>
                                    <option>3 week</option>
                                    <option>1 week</option>
                                </Form.Select>
                            </div>
                        </Form.Group>
                    </div>


                    <div className="d-flex">
                        <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                                Assignees
                            </Form.Label>
                            <div className="d-flex">
                                <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setAssignees(e.target.value)}>
                                    <option>Nothing Selected</option>
                                    {
                                        adminUser.map((i: { id: number, User_Name: string }, index: number) => (
                                            <option value={i.id} key={index}>{i.User_Name}</option>

                                        ))
                                    }
                                </Form.Select>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                                Members
                            </Form.Label>
                            <div className="d-flex">
                                <Form.Select className="fw-bold text-secondary" multiple onChange={handleFollower}>
                                    {
                                        userData.map((i: {
                                            User_Name: '',
                                            id: '',
                                        }, index: number) => (
                                            <option key={index} value={i.id}>{i.User_Name}</option>

                                        ))
                                    }

                                </Form.Select>
                            </div>
                        </Form.Group>

                    </div>
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
    )
}

export default AddNewTask