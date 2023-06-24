import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FeatherIcon from "feather-icons-react";
import { Table } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './UsersAllStyles.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../context/AuthContext';

const UpdateUserRole = () => {
    const { id } = useParams<{ id: string }>();
    console.log('id', id);
    const pjid: any = id

    const { user } = useContext(AuthContext)
    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

    const [singleData, setSingleData] = useState({
        User_Email: '',
        User_Name: '',
        User_Password: '',
        User_Phone: '',
        User_Roll: '',
        id: '',

    });
    console.log('single user data', singleData);
    // console.log('customer_name', singleData.customer_name);
    // console.log('status', singleData.status);
    // console.log('project_name', singleData.project_name);

    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'see_one');
            data.append('user_name', username);
            data.append('password', passwd);

            try {
                const response = await fetch(
                    'https://pubapi.rubytech.xyz/user_info/find_user/',
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


    // hanlde updated user
    const [change_user_roll, set_user_roll] = useState(singleData.User_Roll || '')
    const [change_user_name, set_user_name] = useState(singleData.User_Name || '')
    const [change_user_password, set_user_password] = useState(singleData.User_Password || '')
    const [change_user_email, set_user_email] = useState(singleData.User_Email || '')
    const [change_user_phone, setchange_user_phone] = useState(singleData.User_Phone || '')
    const [updated_user_name, setupdated_user_name] = useState(singleData.User_Name || '')

    const [res, setRes] = useState([])

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = new FormData();
        data.append('Process', 'update')
        data.append('admin_user_name', username)
        data.append('admin_password', passwd)
        data.append('change_user_roll', change_user_roll || singleData?.User_Roll || '')
        data.append('change_user_name', change_user_name || singleData?.User_Name || '')
        data.append('change_user_password', change_user_password || singleData?.User_Password || '')
        data.append('change_user_email', change_user_email || singleData?.User_Email || '')
        data.append('change_user_phone', change_user_phone || singleData?.User_Phone || '')
        data.append('updated_user_name', updated_user_name || singleData?.User_Name || '')

        fetch('https://pubapi.rubytech.xyz/user_info/update_user/', {
            method: 'POST',
            body: data,
        })
            .then(response => response.json())
            .then((response) => {
                console.log('98', response)
                setRes(response);
                if (response.massage === "Data is Updated") {
                    Swal.fire({
                        title: 'success!',
                        text: 'User Updated Successfully',
                        icon: 'success',
                    })
                } else {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'User Updated Failed',
                        icon: 'error',
                    })
                }

                // setTimeout(function () {
                //     navigate("/apps/crprojects/projects")
                //     window.location.reload();
                // }, 1)
            })

            .catch(error => {
                console.log(error);
            });

    }
    return (
        <div className="mt-4 mb-4">
            <div className="viewStaff">
                <div className="d-flex" style={{ gap: '5px' }}>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-2 text-success fw-bold">Total Logged Time</Card.Title>
                            <Card.Text className='text-primary fw-bold'>
                                00:00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-2 text-success fw-bold">Last Month Logged Time</Card.Title>
                            <Card.Text className='text-primary fw-bold'>
                                00:00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-2 text-success fw-bold">This Month Logged Time</Card.Title>
                            <Card.Text className='text-primary fw-bold'>
                                00:00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-2 text-success fw-bold">Last Week Logged Time</Card.Title>
                            <Card.Text className='text-primary fw-bold'>
                                00:00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '13rem' }}>
                        <Card.Body>
                            <Card.Title className="mb-2 text-success fw-bold">This Week Logged Time</Card.Title>
                            <Card.Text className='text-primary fw-bold'>
                                00:00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <h4 className="fw-bold text-start">Hi, {username},</h4>
                <div className="row">
                    <div className="col-md-5">
                        <div className="as_container d-flex justify-content-center aligm-items-center h-100">
                            <div className="w-100 p-3" style={{ backgroundColor: '#fff' }}>
                                <Tabs
                                    defaultActiveKey="home"
                                    transition={false}
                                    id="noanim-tab-example"
                                    className="mb-2 fw-bold border-bottom border-2"
                                >
                                    <Tab eventKey="home" title="Home">
                                        <Form>
                                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                                <Form.Label>
                                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Name
                                                </Form.Label>
                                                <Form.Control type="text" defaultValue={singleData?.User_Name} onChange={(e) => set_user_name(e.target.value)} />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                                <Form.Label>
                                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Email
                                                </Form.Label>
                                                <Form.Control type="email" onChange={(e) => set_user_email(e.target.value)} defaultValue={singleData?.User_Email} />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Phone
                                                </Form.Label>
                                                <Form.Control type="text" onChange={(e) => setchange_user_phone(e.target.value)} defaultValue={singleData?.User_Phone} />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Role
                                                </Form.Label>
                                                <Form.Select className="fw-bold" onChange={(e: any) => set_user_roll(e.target.value)} >
                                                    <option>{singleData?.User_Roll}</option>
                                                    <option>Admin</option>
                                                    <option>Employee</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Password
                                                </Form.Label>
                                                <Form.Control type="text" onChange={(e) => set_user_password(e.target.value)} defaultValue={singleData?.User_Password} />
                                            </Form.Group>

                                            {/* 
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    <i className="fa-brands fa-facebook-f"></i> Facebook
                                                </Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    <i className="fa-brands fa-linkedin-in"></i> Linkedin
                                                </Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    <i className="fa-brands fa-skype"></i> Skype
                                                </Form.Label>
                                                <Form.Control type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Default Language
                                                </Form.Label>
                                                <Form.Select className="fw-bold">
                                                    <option>Syestem Default</option>
                                                    <option>English</option>
                                                    <option>Arabic</option>
                                                    <option>Bangla</option>
                                                    <option>Hindi</option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    <i className="fa-solid fa-question"></i> Email Signature
                                                </Form.Label>
                                                <Form.Control as="textarea" type="text" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                                <Form.Label>
                                                    Direction
                                                </Form.Label>
                                                <Form.Select className="fw-bold">
                                                    <option>Syestem Default</option>
                                                    <option>LTR</option>
                                                    <option>RTL</option>
                                                </Form.Select>
                                            </Form.Group> */}
                                            <hr />
                                            {/* <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Administrator" />
                                            </Form.Group>
                                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Send welcome email" />
                                            </Form.Group> */}

                                        </Form>
                                    </Tab>
                                    <Tab eventKey="profile" title="Profile">
                                        <hr />
                                        <h6 className='fw-bold'>Permission</h6>
                                        <div className="staffPermisuu">
                                            <div className="table-responsive">
                                                <Table striped bordered hover>
                                                    <thead>
                                                        <tr>
                                                            <th>Feature</th>
                                                            <th>Capabilities</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Bulk PDF Export</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Contracts</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Create" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Delete" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Credit Notes</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Create" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Delete" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Customers</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Create" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Delete" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email Templates</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Expenses</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Create" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Delete" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Invoices</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Create" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Delete" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Items</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Create" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Delete" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Items</td>
                                                            <td>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Create" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Edit" />
                                                                </Form.Group>
                                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" label="Delete" />
                                                                </Form.Group>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    {/* col right */}
                    <div className="col-md-7">
                        <h4>Notes</h4>
                        <div className="viewColRight">
                            <Button variant="success" className="fw-bold">New Note</Button>
                            <div className="staffSelec d-flex justify-content-between mt-2">
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
                                <div className="table-responsive">
                                    <Table >
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder">Note</th>
                                                <th className="fw-bolder">Added From</th>
                                                <th className="fw-bolder">Date Added</th>
                                                <th className="fw-bolder">Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark</td>
                                                <td>test123@gmail.com</td>
                                                <td>@mdo</td>
                                                <td>None</td>
                                            </tr>

                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="d-flex justify-content-evenly align-items-center mt-3">
                        <Button type="submit" className="lgnbtn fw-bold" onClick={handleSubmit}>
                            Update
                        </Button>
                        <Link to="/apps/admin/setup">
                            <Button type="submit" className="lgnbtnPurple fw-bold">
                                Go Back
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserRole 