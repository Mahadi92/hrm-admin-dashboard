import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import '../AddNewTask/AddNewTask.css';
import Swal from 'sweetalert2';

const UpdateTask = () => {
    const { id } = useParams<{ id: string }>();
    // console.log('id', id);
    const pjid: any = id

    const [singleData, setSingleData] = useState({
        assigner: { User_Name: '', id: '' },
        end_date: '',
        start_date: '',
        followers: [],
        file_upload: '',
        hourly_rate: '',
        customer_name: '',
        id: '',
        priority: '',
        project_name: '',
        related_to: { project_name: '' },
        repeat_every: '',
        tags: '',
        task_description: '',
        status: '',
        task_name: '',
        updated_at: '',

    });
    console.log('singleData', singleData);
    // console.log('assigner', singleData.assigner);
    // console.log('hourly_rate', singleData.hourly_rate);
    // console.log('task_name', singleData.task_name);

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




    // admin 
    // const users data
    const [userData, setUserData] = useState([])
    // console.log('userData', userData)
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
    const [allPorjects, setAllProjects] = useState([])
    console.log('allPorjects', allPorjects)
    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'see_all');
            data.append('admin_user_name', 'admin');
            data.append('admin_password', 'admin');

            await fetch('https://pubapi.rubytech.xyz/project/find_all_projects/',
                {
                    method: 'POST',
                    body: data,
                }
            )
                .then(response => response.json())
                .then(res => setAllProjects(res))
                .then(err => console.log(err))
        };

        fetchData();
    }, [])



    // navigate routes
    const navigate = useNavigate()
    const handleFollower = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = event.currentTarget.selectedOptions;
        const repition = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            repition.push(selectedOptions[i].value);
        }
        setFollower(repition);
    };


    // handleSubmit

    // const [project_name, setProjectName] = useState<string>(singleData?.project_name || '')
    // const [customer_name, setCustomerName] = useState<string>(singleData?.customer_name || '')
    // const [billing, setBill] = useState<string>(singleData?.billing || '')
    // const [status, setStatus] = useState<string>(singleData?.status || '')
    // const [tags, setTags] = useState<string>(singleData?.tags || '')
    // const [estimated_hour, setEstimatedHours] = useState<string>(singleData.estimated_hour || '')
    // const [start_date, setStartDate] = useState<string>(singleData?.start_date.slice(0, 10) || '')
    // const [end_date, setEndDate] = useState<string>(singleData.end_date.slice(0, 10) || '')
    // const [description, setDescription] = useState<string>(singleData.description || '')
    // const [follower, setFollower] = useState<string[] | Blob>([])


    const [start_date, setStartDate] = useState(singleData.start_date || '')
    const [end_date, setEndDate] = useState(singleData.end_date || '')
    const [priority, setPriority] = useState<string>(singleData.priority || '')
    const [task_status, setTaskStatus] = useState<string>(singleData.status || '')
    const [repeat_every, setRepeat] = useState(singleData.repeat_every || '')
    // const [repeat_every, setRepeat] = useState<string>()
    const [project_name, setProjectName] = useState(singleData.project_name || '')
    const [task_tags, setTags] = useState(singleData.tags || '')
    const [assigner_id, setAssignees] = useState(singleData.assigner || '')
    const [follower, setFollower] = useState<string[] | Blob | any>(singleData.followers || [])
    const [task_description, setDescription] = useState(singleData.task_description || '')
    const [customer_name, setCustomer_name] = useState(singleData.customer_name || '')
    const [related_project_id, setRelated_project_id] = useState(singleData.related_to || '')
    const [task_name, setTask_name] = useState(singleData.task_name || '')
    const [file_here, setfile_here] = useState(singleData.file_upload || '')

    const assignerId: any = assigner_id || singleData?.assigner.id || '';
    const [res, setRes] = useState([])


    console.log('taskName', task_name)
    console.log('start_date', start_date)
    console.log('end_date', end_date)
    console.log('setFile', file_here)
    console.log('repeat', repeat_every)
    console.log('priority', priority)
    console.log('startDate', start_date)
    console.log('endDate', end_date)
    console.log('related project_name', project_name)
    console.log('related related_project_id', related_project_id)
    console.log('task_tags', task_tags)
    console.log('assigner_id', assignerId)
    console.log('follower', follower)
    console.log('description', task_description)



    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('Process', 'update')
        data.append('admin_user_name', 'admin')
        data.append('admin_password', 'admin')
        // data.append('members_id_list', membersList)
        if (Array.isArray(follower)) {
            const membersIdString = follower.join(',');
            data.append('followers_id_list', membersIdString || (singleData?.followers?.toString() ?? ""));
        } else {
            data.append('followers_id_list', follower);
        }

        data.append('task_tags', task_tags || singleData?.tags || '');
        data.append('project_name', singleData?.project_name)
        data.append('customer_name', singleData?.customer_name)
        data.append('related_project_id', '12')
        data.append('assigner_id', assignerId)
        data.append('task_name', task_name || singleData?.task_name || '')
        data.append('task_description', task_description || singleData?.task_description || '')
        data.append('start_date', start_date || singleData?.start_date || '')
        data.append('end_date', end_date || singleData?.end_date || '')
        data.append('priority', priority || singleData?.priority || '')
        data.append('task_status', task_status || singleData?.status || '')
        data.append('repeat_every', end_date || singleData?.repeat_every || '')
        data.append('file_here', file_here || singleData?.file_upload || '')
        data.append('updated_task_id', singleData?.id)


        fetch('https://pubapi.rubytech.xyz/task/update_task/', {
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
                    navigate("/apps/crprojects/tasks")
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

    return (
        <div className="mt-4 mb-4">
            <div className="d-flex justify-content-center align-items-center">
                <div className="w-auto bg-white">
                    <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                        Update Task
                    </Button>
                    <div className="p-2">
                        {/* <div className="d-flex my-2">
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Public" />
                            </Form.Group>
                            <Form.Group className="ms-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Billable" />
                            </Form.Group>
                        </div> */}
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Task Name
                            </Form.Label>
                            <Form.Control type="text" defaultValue={singleData.task_name} onChange={(e) => setTask_name(e.target.value)} />
                        </Form.Group>

                        {/* <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Task Image
                            </Form.Label>
                            <div className="d-flex">
                                <img src={
                                    `https://pubapi.rubytech.xyz` + singleData.file_upload ?
                                        `https://pubapi.rubytech.xyz` + singleData.file_upload
                                        :
                                        "Image not found"

                                } alt="task img"
                                    className='shadow-sm'
                                    style={{ width: '40px', height: '40px', borderRadius: '50px', objectFit: 'cover' }} />
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Image
                            </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group> */}

                        {/* <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Hourly Rate
                            </Form.Label>
                            <Form.Control type="number" defaultValue={singleData.hourly_rate} />
                        </Form.Group> */}
                        <div className="d-flex w-100">
                            <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Start Date
                                    <Form.Control type="text" defaultValue={singleData.start_date.slice(0, 10)} disabled className="bg-light" />
                                </Form.Label>
                                <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> End Date
                                    <Form.Control type="text" defaultValue={singleData.end_date.slice(0, 10)} disabled className='bg-light' />
                                </Form.Label>
                                <Form.Control type="date" onChange={(e) => setEndDate(e.target.value)} />
                            </Form.Group>
                        </div>
                        <div className="d-flex w-100">
                            <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
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

                            <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Repeat every
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setRepeat(e.target.value)}>
                                        <option>{singleData.repeat_every}</option>
                                        <option>week</option>
                                        <option>2 week</option>
                                        <option>3 week</option>
                                        <option>1 week</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Status
                            </Form.Label>
                            <div className="d-flex">
                                <Form.Select className="fw-bold" onChange={(e: any) => setTaskStatus(e.target.value)}>
                                    <option>{singleData.status}</option>
                                    <option>Not Started</option>
                                    <option>On Hold</option>
                                    <option>Cancelled</option>
                                    <option>In Progress</option>
                                    <option>Finished</option>
                                </Form.Select>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                                Related Project Name
                            </Form.Label>
                            <div className="d-flex">
                                <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setRelated_project_id(e.target.value)}>
                                    <option disabled className='bg-light'>{singleData.related_to.project_name}</option>
                                    {/* <option className="border-bottom border-4 border-secondary" disabled></option> */}
                                    {
                                        allPorjects.map((i: { project_name: string, id: number }, index: number) => (
                                            <option value={i.id} key={index}>{i.project_name}</option>

                                        ))
                                    }

                                </Form.Select>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                Tag
                            </Form.Label>
                            <Form.Control type="text" defaultValue={singleData.tags} onChange={(e) => setTags(e.target.value)} />
                        </Form.Group>
                        <div className="d-flex">
                            <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Assignees
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary" onChange={(e: any) => setAssignees(e.target.value)}>
                                        <option className="bg-light" disabled>{singleData.assigner.User_Name}</option>
                                        <option className="bg-light">Not Selected</option>
                                        {
                                            adminUser.map((i: { id: number, User_Name: string }, index: number) => (
                                                <option value={i.id} key={index}>{i.User_Name}</option>

                                            ))
                                        }
                                    </Form.Select>
                                </div>
                            </Form.Group>
                        </div>
                        <Form.Group controlId="my_multiselect_field" className="h-100">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Follower Members
                            </Form.Label>
                            <Form.Control as="select" multiple
                                onChange={handleFollower as any}
                            >
                                {
                                    singleData.followers.map((i: { User_Name: string, id: number }, index: number) => (
                                        <option defaultValue={i.id} key={index} disabled className='bg-light'>{i.User_Name}</option>
                                    ))
                                }
                                <option className='border-bottom border-4 mb-1' disabled></option>
                                {
                                    userData.map((i: {
                                        User_Name: '',
                                        id: '',
                                        User_Email: '',
                                        User_Joing_Date_Time: '',
                                        User_Phone: '',
                                        User_Roll: '',
                                    }, index: number) => (
                                        <option key={index} value={i.id}>{i.User_Name}</option>

                                    ))
                                }

                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                Task Description
                            </Form.Label>
                            <Form.Control as="textarea" type="text" 
                            defaultValue={singleData.task_description} onChange={(e) => setDescription(e.target.value)} />
                        </Form.Group>
                        <div className="d-flex justify-content-between mt-3">
                            <Button type="submit" className='lgnbtn fw-bold' onClick={handleSubmit}>
                                Update
                            </Button>
                            <Link to="/apps/crprojects/tasks" style={{ textDecoration: "none" }}>
                                <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                    <span className="fs-5">Go back</span>
                                </Button>
                            </Link>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default UpdateTask 