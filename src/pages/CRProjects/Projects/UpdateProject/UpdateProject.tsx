import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FeatherIcon from "feather-icons-react";
import { Table } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../AddNewProject.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

interface ProjectData {
    billing: string;
    customer_name: string;
    description: string;
    status: string;
    tags: string;
    estimated_hour: string;
    project_name: string;
    start_date: any;
    end_date: any;
    id: any,
    members: any[]; // Update the type of members array as needed
}

const UpdateProject = () => {
    const { id } = useParams<{ id: string }>();
    console.log('id', id);
    const pjid: any = id

    const [singleData, setSingleData] = useState({
        billing: '',
        customer_name: '',
        status: '',
        project_name: '',
        description: '',
        tags: '',
        estimated_hour: '',
        start_date: '',
        members: [],
        end_date: '',
        id: '',
    });
    console.log('billing', singleData);
    console.log('customer_name', singleData.customer_name);
    console.log('status', singleData.status);
    console.log('project_name', singleData.project_name);

    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'see_one');
            data.append('admin_user_name', 'admin');
            data.append('admin_password', 'admin');
            data.append('project_id', pjid);

            try {
                const response = await fetch(
                    'https://pubapi.rubytech.xyz/project/find_one_projects/',
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
    },);




    const navigate = useNavigate()

    // handle form change
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectName(event.target.value);
    };
    // const handleCustomerChagne = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCustomerName(event.target.value);
    // };
    const handleBill: React.FormEventHandler<HTMLSelectElement> = (event) => {
        const selectedValue = event.currentTarget.value;
        setBill(selectedValue);
    };
    const handleStatusChange: React.FormEventHandler<HTMLSelectElement> = (event) => {
        const selectedValue = event.currentTarget.value;
        setStatus(selectedValue);
    };


    // const handleEmpChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    //     setEmployeeName(selectedValues);
    //   };



    // const handleMembers = (event: React.ChangeEvent<HTMLSelectElement>):void => {

    // };
    const handleMembers: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        const selectedOptions = event.currentTarget.selectedOptions;
        const repition = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            repition.push(selectedOptions[i].value);
        }
        setMembers_id_list(repition);
    }


    const handleEstimateHours = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEstimatedHours(event.target.value);
    };
    const handleStartDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    };
    const handleEndDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    };

    // const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedOptions = event.currentTarget.selectedOptions;
    //     const repition = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //         repition.push(selectedOptions[i].value);
    //     }
    //     setTags(repition);
    // };

    const handleTag = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTags(event.target.value);
    };

    const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    // handleSubmit
    const [project_name, setProjectName] = useState<string>(singleData?.project_name || '')
    const [customer_name, setCustomerName] = useState<string>(singleData?.customer_name || '')
    const [billing, setBill] = useState<string>(singleData?.billing || '')
    const [status, setStatus] = useState<string>(singleData?.status || '')
    const [membersList, setMembers_id_list] = useState<string[] | Blob>([] || '')
    // const [tags, setTags] =  useState<string[] | Blob>([])
    const [tags, setTags] = useState<string>(singleData?.tags || '')
    // const [employeeName, setEmployeeName] = useState<string[]>([]);
    const [estimated_hour, setEstimatedHours] = useState<string>(singleData.estimated_hour || '')
    const [start_date, setStartDate] = useState<string>(singleData?.start_date.slice(0, 10) || '')
    const [end_date, setEndDate] = useState<string>(singleData.end_date.slice(0, 10) || '')
    const [description, setDescription] = useState<string>(singleData.description || '')

    console.log('projectName', project_name)
    console.log('customerName', customer_name)
    console.log('bill', billing)
    console.log('status', status)
    console.log('members_id_list', membersList)
    console.log('startDate', start_date)
    console.log('endDate', end_date)
    console.log('tags', tags)
    console.log('estimatedHours', estimated_hour)
    console.log('description', description)



    const [res, setRes] = useState([])
    console.log('res', res)
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('Process', 'update')
        data.append('admin_user_name', 'admin')
        data.append('admin_password', 'admin')
        // data.append('members_id_list', membersList)
        if (Array.isArray(membersList)) {
            const membersIdString = membersList.join(',');
            data.append('members_id_list', membersIdString || (singleData?.members?.toString() ?? ""));
        } else {
            data.append('members_id_list', membersList);
        }

        data.append('tags', tags || singleData?.tags || '');
        data.append('project_name', project_name || singleData?.project_name || '')
        data.append('customer_name', customer_name || singleData?.customer_name || '')
        data.append('billing', billing || singleData?.billing || '')
        data.append('status', status || singleData?.status || '')
        data.append('estimated_hour', estimated_hour || singleData?.estimated_hour || '')
        data.append('description', description || singleData?.description || '')
        data.append('start_date', start_date || singleData?.start_date || '')
        data.append('end_date', end_date || singleData?.end_date || '')
        data.append('updated_projects_id', singleData?.id)


        fetch('https://pubapi.rubytech.xyz/project/update_projects/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response) => {
                console.log('158', response)
                setRes(response);
                response && Swal.fire({
                    title: 'success!',
                    text: 'Project Updated Successfully',
                    icon: 'success',
                })
                // setTimeout(function () {
                //     navigate("/apps/crprojects/projects")
                //     window.location.reload();
                // }, 1)
            })

            .catch(error => {
                console.log(error);
            });
    }



    const [userData, setUserData] = useState([])
    console.log('userData', userData)
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


    return (
        <div className="mt-4 mb-5">
            <div className="as_container d-flex justify-content-center aligm-items-center h-100">

                <div className="w-50 " style={{ backgroundColor: '#fff' }}>
                    <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                        Update Project
                    </Button>
                    <div className="p-3">
                        <Tabs
                            defaultActiveKey="Project"
                            transition={false}
                            id="noanim-tab-example"
                            className="mb-2 fw-bold border-bottom border-2"
                        >
                            <Tab eventKey="Project" title="Project">
                                <Form>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Project Name
                                        </Form.Label>
                                        <Form.Control type="text" defaultValue={singleData?.project_name} onChange={(e) => setProjectName(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Customer Name
                                        </Form.Label>
                                        <Form.Control type="text" defaultValue={singleData?.customer_name} onChange={(e) => setCustomerName(e.target.value)} />
                                    </Form.Group>
                                    {/* <ProgressBar variant="success" now={40} /> */}
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Billing Type
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold" onChange={(e: any) => setBill(e.target.value)}>
                                                <option selected defaultValue={singleData.billing}>{singleData.billing}</option>
                                                <option>Fixed Rate</option>
                                                <option>Project Rate</option>
                                                <option>Task Hour</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Status
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold" onChange={(e: any) => setStatus(e.target.value)}>
                                                <option selected defaultValue={singleData.status}>{singleData.status}</option>
                                                <option>Not Started</option>
                                                <option>On Hold</option>
                                                <option>Cancelled</option>
                                                <option>In Progress</option>
                                                <option>Finished</option>
                                            </Form.Select>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="my_multiselect_field">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Members
                                        </Form.Label>
                                        <Form.Control as="select" multiple
                                            onChange={handleMembers as any}
                                        >
                                            {
                                                singleData.members.map((i: {User_Name:'',id:number}, index: number) => (
                                                    <option defaultValue={i.id} key={index} disabled className='bg-light'>{i.User_Name}</option>
                                                ))
                                            }
                                            <option className='border-top border-4 '></option>
                                            {
                                                userData.map((i: {
                                                    User_Name: '',
                                                    id: '',
                                                }, index: number) => (
                                                    <option key={index} value={i.id}>{i.User_Name}</option>

                                                ))
                                            }
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Estimated Hours
                                        </Form.Label>
                                        <Form.Control type="number" defaultValue={singleData.estimated_hour} onChange={(e) => setEstimatedHours(e.target.value)} />
                                    </Form.Group>


                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Start Date
                                            <Form.Control type="text" className='w-100 bg-light' defaultValue={singleData?.start_date.slice(0, 10)} disabled />
                                        </Form.Label>
                                        <Form.Control type="date" onChange={(e) => setStartDate(e.target.value)} />
                                    </Form.Group>


                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> End Date
                                            <Form.Control type="text" className='w-100 bg-light'
                                                defaultValue={singleData?.end_date.slice(0, 10)} disabled />
                                        </Form.Label>
                                        <Form.Control type="date" onChange={(e) => setEndDate(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Tags
                                        </Form.Label>
                                        <Form.Control type="text"
                                            defaultValue={singleData.tags}
                                            onChange={(e) => setTags(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            Descriptions
                                        </Form.Label>
                                        <Form.Control as="textarea" rows={3} type="text"
                                            defaultValue={singleData.description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </Form.Group>

                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <Button type="submit" className='lgnbtn fw-bold' onClick={handleSubmit}>
                                            Update
                                        </Button>
                                        <Link to="/apps/crprojects/projects" style={{ textDecoration: "none" }}>
                                            <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                                <span>Go Back</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </Form>
                            </Tab>
                            <Tab eventKey="Project Setting" title="Project Setting">
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Send contacts notifications
                                    </Form.Label>
                                    <Form.Select className="fw-bold">
                                        <option>To all contacts with notifications for projects enabled</option>
                                        <option>Specific Contacts</option>
                                        <option>Do not send notifications</option>
                                    </Form.Select>
                                </Form.Group>
                                <hr />
                                <div className="staffPermisuu">
                                    <Form.Group controlId="my_multiselect_field">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Visible Tabs
                                        </Form.Label>
                                        <Form.Control as="select" multiple
                                        // value={field}
                                        // onChange={e =>setField([].slice.call(e.target.selectedOptions).map(item => item.value))}
                                        >
                                            <option>Task</option>
                                            <option>Timesheet</option>
                                            <option>Milestone</option>
                                            <option>Files</option>
                                            <option>Discussion</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UpdateProject  