import React, { useState, useEffect, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FeatherIcon from "feather-icons-react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/AuthContext';


interface Coordinates {
    latitude: number;
    longitude: number;
}
interface userlocationInter {
    city: string;
    ip: string;
    query: string,
}


// console.log('location', location)

const ProjectAndTaskAndUser = () => {

    // localstorage data
    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

    // ALL STAFF OR MEMBERS
    const [userData, setUserData] = useState([])
    const [timeData, scatterDateTimeData] = useState([])
    // const [timeData, scatterDateTimeData] = useState({ start_date: '', end_date: '', })
    const fillteredUserData = userData?.filter((obj: any) => obj.User_Roll === "Admin")
    // console.log('userData', fillteredUserData)

    useEffect(() => {
        const data = new FormData();
        data.append('Process', 'see_all');
        data.append('admin_user_name', 'admin');
        data.append('admin_password', 'admin');

        fetch('https://pubapi.rubytech.xyz/user_info/find_all_user/', {
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
                setUserData(data);
                scatterDateTimeData(data)
            })
            .catch(error => {
                // Handle any errors
                console.log('Error:', error);
            });
    }, []);

    // ALL PROJECTS
    const [allProjects, setAllProjects] = useState([])
    // console.log('All projects:', allProjects)
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
                setAllProjects(data);
            })
            .catch(error => {
                // Handle any errors
                console.log('Error:', error);
            });
    }, []);

    //   All TASK
    const [allTask, setAllTasks] = useState([])
    // console.log('All tasks', allTask)
    useEffect(() => {
        const data = new FormData();
        data.append('Process', 'see_all');
        data.append('admin_user_name', 'admin');
        data.append('admin_password', 'admin');

        fetch('https://pubapi.rubytech.xyz/task/find_all_task/', {
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
                setAllTasks(data);
            })
            .catch(error => {
                // Handle any errors
                console.log('Error:', error);
            });
    }, []);



    // TOTAL ATTANDANCE AND ALL ATTANDANCE
    const { user } = useContext(AuthContext)

    // locations and ip address
    const [location, setLocation] = useState<Coordinates>()
    // console.log('location', location)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    // fetch user lcoations data
    const [Userlocation, setUserLocation] = useState<userlocationInter>({ city: '', ip: '', query: '' });
    // console.log('Userlocation', Userlocation.city);
    const fetchUserLocation = async () => {
        try {
            fetch('http://ip-api.com/json/?fields=61439')
                // fetch('https://ipinfo.io/json?token=2930bb7c2fd850')
                .then(response => response.json())
                .then(data => setUserLocation(data))
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchUserLocation();
    }, []);
    // modal 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // time 
    const newdate = new Date();
    const monthName = newdate.toLocaleString('default', { month: 'long' });
    const currentTime = newdate.toLocaleTimeString()
    const currentDate = newdate.toLocaleDateString()
    const originalDate = currentDate;
    const parts = originalDate.split('/'); // Split the date string by '/'
    const formattedDate = `${parts[2]}-${parts[0].padStart(2, '0')}-${parts[1].padStart(2, '0')}`;
    console.log('formattedDate', formattedDate); // Output: 2023-05-22

    console.log('currentDate', currentDate)
    const currentYear = newdate.getFullYear()


    const [attandance, setAttance] = useState([])
    console.log('All attandance', attandance)
    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'attendance_seen');
            data.append('admin_user_name', 'admin');
            data.append('admin_password', 'admin');

            await fetch('https://pubapi.rubytech.xyz/attendance/attendance_seen_by_admin/',
                {
                    method: 'POST',
                    body: data,
                }
            )
                .then(response => response.json())
                .then(res => setAttance(res))
                .then(err => console.log(err))
        };

        fetchData();
    }, []);

    const lat_address: any = location?.latitude
    const lang_address: any = location?.longitude

    const [opened, setOpened] = useState<boolean>(true)
    // const [closed, setClosed] = useState<boolean>(true)

    const [puncin, setPunchin] = useState([])
    const handlePunchIn = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const data = new FormData();
        data.append('Process', 'create')
        data.append('employee_user_name', username)
        data.append('employee_password', passwd)
        data.append('ip_address', '202.181.19.244')
        // data.append('ip_address', 'Userlocation.query')
        data.append('lat_address', lat_address)
        data.append('lang_address', lang_address)
        data.append('place_name', 'Dhaka')
        // data.append('place_name', 'Userlocation.city')

        fetch('https://pubapi.rubytech.xyz/attendance/create_attendance/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response: any) => {
                setPunchin(response);
                console.log(response.data);
                if (response.massage === 'NOT VALID') {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Punch In Failed',
                        icon: 'error',
                    })
                } else if (response.massage === 'Off Day') {
                    Swal.fire({
                        title: 'Information!',
                        text: 'Today is off day',
                        icon: 'info',
                    })
                } else {
                    Swal.fire({
                        title: 'success',
                        text: 'Punched in successfully',
                        icon: 'success',
                    })
                }
                // setTimeout(function () {
                //   window.location.reload();
                // }, 500)
            })

            .catch(error => {
                console.log(error);
            });
        setOpened(false)
    }




    const [punchout, setPunchOut] = useState([])
    const handlePunchOut: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('Process', 'last')
        data.append('employee_user_name', username)
        data.append('employee_password', passwd)
        data.append('ip_address', Userlocation.query)
        data.append('lat_address', lat_address)
        data.append('lang_address', lang_address)
        data.append('place_name', Userlocation.city)

        fetch('https://pubapi.rubytech.xyz/attendance/create_out_attendance/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response: any) => {
                setPunchOut(response);
                if (response.massage === 'NOT VALID') {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Punched Out Failed',
                        icon: 'error',
                    })
                } else if (response.massage === 'Attendance not present') {
                    Swal.fire({
                        title: 'Failed!',
                        text: `${response.massage}`,
                        icon: 'error',
                    })
                } else {
                    Swal.fire({
                        title: 'success',
                        text: 'Punched Out successfully',
                        icon: 'success',
                    })
                }
                // setTimeout(function () {
                //   window.location.reload();
                // }, 500)
            })

            .catch(error => {
                console.log(error);
            });
        setOpened(true)
    }
    return (
        <div>
            <Row className="gap-1">
                <Col md={2}>
                    <Card>
                        <Card.Body className="text-center">
                            <Card.Title className='fw-bold fs-4 text-center border-bottom'>Total Users</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted fw-bold text-center fs-3">{userData.length}</Card.Subtitle>
                            {
                                user?.User_Roll === "Employee" ? "" :
                                    <Link to="/apps/admin/setup">
                                        <Button className="lgnbtn fw-bold">View</Button>
                                    </Link>
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card >
                        <Card.Body className="text-center">
                            <Card.Title className='fw-bold fs-4 text-center border-bottom'>Total Admin</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted fw-bold text-center fs-3">{fillteredUserData.length}</Card.Subtitle>
                            {
                                user?.User_Roll === "Employee" ? "" :
                                    <Link to="/apps/admin/setup">
                                        <Button className="lgnbtn fw-bold">View</Button>
                                    </Link>
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card >
                        <Card.Body className="text-center">
                            <Card.Title className='fw-bold fs-4 text-center border-bottom'>Total Projects</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted fw-bold text-center fs-3">{allProjects.length}</Card.Subtitle>
                            {
                                user?.User_Roll === "Employee" ? "" :
                                    <Link to="/apps/crprojects/projects">
                                        <Button className="lgnbtn fw-bold">View</Button>
                                    </Link>
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card >
                        <Card.Body className="text-center">
                            <Card.Title className='fw-bold fs-4 text-center border-bottom'>Total Task</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted fw-bold text-center fs-3">{allTask.length}</Card.Subtitle>
                            {
                                user?.User_Roll === "Employee" ? "" :
                                    <Link to="/apps/crprojects/tasks">
                                        <Button className="lgnbtn fw-bold">View</Button>
                                    </Link>
                            }
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={2}>
                    <Card >
                        <Card.Body className="text-center">
                            <Card.Title className='fw-bold fs-4 text-center border-bottom'>Attandance</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted fw-bold text-center fs-3">{attandance.length}</Card.Subtitle>
                            {
                                user?.User_Roll === "Employee" ? "" :
                                    <Link to="/apps/hremploye/Attandance">
                                        <Button className="lgnbtn fw-bold">View</Button>
                                    </Link>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Punch In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-100  bg-white">
                            <div className="">
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Name
                                            </Form.Label>
                                            <Form.Control type="text" defaultValue={user?.User_Name} disabled className='bg-light' />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Month
                                            </Form.Label>
                                            <Form.Control defaultValue={monthName} disabled className='bg-light' />
                                        </Form.Group>
                                    </Col>
                                    {/* <Col md={6}>
                                        <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Year
                                            </Form.Label>
                                            <Form.Control disabled defaultValue={currentYear} className='bg-light' />
                                        </Form.Group>
                                    </Col> */}
                                    <Col md={6}>
                                        <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Office In Time
                                            </Form.Label>
                                            <Form.Control disabled defaultValue={currentTime} className='bg-light' />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> latitude
                                            </Form.Label>
                                            <Form.Control type="text" defaultValue={location?.latitude} disabled className='bg-light' />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    {/* <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Locations
                                            </Form.Label>
                                            <Form.Control type="text" defaultValue={Userlocation.city} disabled className='bg-light' />
                                        </Form.Group>
                                    </Col> */}
                                  
                                    <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> longitude
                                            </Form.Label>
                                            <Form.Control type="text" defaultValue={location?.longitude} disabled className='bg-light' />
                                        </Form.Group>
                                    </Col>
                                    {/* 
                                    <Col md={4}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> IP
                                            </Form.Label>
                                            <Form.Control type="text" defaultValue={Userlocation?.query} disabled className="bg-light" />
                                        </Form.Group>
                                    </Col> */}
                                    <Col md={6}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>
                                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date
                                            </Form.Label>
                                            <Form.Control defaultValue={currentDate} disabled className="bg-light" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={handlePunchIn}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </>
            <div className="">
                <div className="empattandance">
                    <div className="bg-light p-2 empPunchCon">
                        <div className="d-flex justify-content-between align-items-center w-75 empFirst">
                            <div className="">
                                <p className="fw-bold fs-4">Hi, {user?.User_Name}</p>
                                <p>
                                    <span className="fw-bold fs-5">
                                        {
                                            currentTime === "10:11:37 PM" ? "Good Morning" : currentTime >= "6:11:37 PM" ? "Good Evening!" : "Good Night"
                                        }
                                    </span>

                                    {
                                        currentTime >= "10:11:37 PM" ?
                                            <span className="text-secondary fs-0"> You are late!</span>
                                            :
                                            <span className="text-secondary fs-0"> Welcome to the office and you are in!</span>
                                        // <span className="text-secondary fs-0"> You are 9 hours and 3 minutes late!</span>
                                    }
                                    {/* <span className="text-secondary fs-0"> You are 9 hours and 3 minutes late!</span> */}
                                </p>
                            </div>
                            <div className="d-flex">

                                {/* {
                                    currentTime >= "10:11:37 PM" ?
                                    <Button className='lgnbtn fw-bold ms-1' onClick={handlePunchOut}>Punch Out</Button>
                                    :
                                    <Button variant="success" className='fw-bold ms-1' onClick={handleShow}>Punch In</Button>

                                } */}
                                {
                                    opened ?
                                        <Button variant="success" className='fw-bold ms-1' onClick={handleShow}>Punch In</Button>
                                        :
                                        <Button className='lgnbtn fw-bold ms-1' onClick={handlePunchOut}>Punch Out</Button>

                                }

                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center w-50 mt-3 mb-3">
                            <div className="d-flex  h-100">
                                <div className="d-flex justify-content-center align-items-center"
                                    style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#FFFFFF', color: '#46C35F' }}>
                                    <i className="fa-solid fa-right-to-bracket fs-4" ></i>
                                </div>
                                <div className="d-flex flex-column align-items-start justify-content-start p-1">
                                    {
                                        timeData.map((item: {
                                            end_date: '',
                                            start_date: '',
                                        }, index: number) => (
                                            <span className="fw-bold text-dark" key={index}>
                                                {
                                                    formattedDate === item.start_date?.slice(11, 19) ? item.start_date?.slice(11, 19) : ''
                                                }
                                            </span>
                                        ))
                                    }
                                    <span className="fw-bold text-dark">
                                        {/* {timeData.start_date?.slice(11, 19)} */}
                                        {/* {timeData.length > 0 && timeData[0].start_date.slice(11, 19)} Late */}
                                    </span>
                                    <span className="text-secondary">Punch In time</span>
                                </div>
                            </div>
                            <div className="d-flex  h-100 empThrid">
                                <div className="d-flex justify-content-center align-items-center"
                                    style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#FFFFFF', color: '#FC6510' }}>
                                    <i className="fa-solid fa-arrow-right-from-bracket fs-4"></i>
                                </div>
                                <div className="d-flex flex-column align-items-start justify-content-start p-1">
                                    {
                                        timeData.map((item: {
                                            end_date: '',
                                            start_date: '',
                                        }, index: number) => (
                                            <span className="fw-bold text-dark" key={index}>
                                                {
                                                    formattedDate === item.end_date?.slice(11, 19) ? item.end_date?.slice(11, 19) : ''
                                                }
                                            </span>
                                        ))
                                    }

                                    {/* {
                                        timeData.end_date?.slice(11, 19)
                                    } */}
                                    <span className="text-secondary">Punch Out time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectAndTaskAndUser