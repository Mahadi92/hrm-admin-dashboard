import React, { useState, useEffect, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FeatherIcon from "feather-icons-react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';
import './Employee.css';
import { AuthContext } from '../../context/AuthContext';

const Employee = () => {
  const getHREmployee = JSON.parse((localStorage.getItem('apps-employe')) || '')
  // console.log('getHREmployee', getHREmployee.children[1])
  // console.log('getHREmployee', getHREmployee.children[1].children?.map((child: { label: any }) => child.label))



  const pathname = window.location.pathname
  // console.log('hremploye', pathname)


  // handle data form 
  const [employee_user_name, setemployee_user_name] = useState('')
  const [employee_password, setemployee_password] = useState('')
  const [Process, setProcess] = useState('')
  const [ip_address, setip_address] = useState('')
  // const [lat_address, setlat_address] = useState('')
  // const [lang_address, setlang_address] = useState('')
  const [place_name, setplace_name] = useState('')
  const [inRes, setInRes] = useState([])
  console.log('inRes', inRes)

  interface LayoutType {
    id: number;
    name: string;
  }
  interface Coordinates {
    latitude: number;
    longitude: number;
  }
  interface userlocationInter {
    city: string;
    ip: string;
    query: string,
  }

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

  const lat_address: any = location?.latitude
  const lang_address: any = location?.longitude
  const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
  const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

  console.log(`username: ${username}`)
  console.log(`passwd: ${passwd}`)
  const [opened, setOpened] = useState<boolean>(true)

  // console.log('Userlocation',Userlocation.query)


  const handlePunchIn: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append('Process', 'create')
    data.append('employee_user_name', username)
    data.append('employee_password', passwd)
    data.append('ip_address', Userlocation?.query)
    data.append('lat_address', lat_address)
    data.append('lang_address', lang_address)
    data.append('place_name', Userlocation.city)

    fetch('https://pubapi.rubytech.xyz/attendance/create_attendance/', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then((response: any) => {
        setInRes(response);
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

  // handle out punchs
  const [outRes, setOutRes] = useState([])
  console.log('outRes', outRes)

  const { user } = useContext(AuthContext)

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
        setOutRes(response);
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
  console.log('currentTime', currentTime >= "12:17:11 PM")
  const currentYear = newdate.getFullYear()


  // punch in time employee attandance
  // const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
  // const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null
  // console.log(`username: ${username}`)
  // console.log(`passwd: ${passwd}`)

  const [userData, setUserData] = useState([])
  const [timeData, scatterDateTimeData] = useState({ start_date: '', end_date: '', })
  // const [userData, setUserData] = useState({start_date:'',lat_address:''})1
  console.log('attandance start_date', userData)
  // console.log('attandance', userData)

  useEffect(() => {
    const fetchData = async () => {
      const data = new FormData();
      data.append('Process', 'attendance_seen');
      data.append('employee_user_name', username);
      data.append('employee_password', passwd);

      await fetch('https://pubapi.rubytech.xyz/attendance/attendance_seen_by_emplyoee/',
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
    <div>
      <div className="container">
        <div className="mt-2 d-flex ms-1 my-3 flex-wrap">
          {
            getHREmployee?.children[0]?.children?.map((child: { label: any, url: any, icon: any, index: number }) => (
              <div className="d-flex flex-wrap align-items-center justify-content-start me-2 mb-2" key={child.index}>
                <Link to={child?.url ? child.url : ''} className=' text-decoration-none mx-1 my-1'>
                  <Button variant="primary">
                    <FeatherIcon icon={child?.icon} className="me-1 dplink text-secondary" style={{ width: '17px', color: 'red' }} />
                    {child?.label}
                  </Button>
                </Link>
              </div>

            ))
          }

          <div className="d-flex flex-wrap align-items-center justify-content-start me-2 mb-2">
            <Dropdown style={{ backgroundColor: '#fff' }}>
              <FeatherIcon icon={getHREmployee?.children[1]?.icon} className="ms-2" style={{ width: '17px', color: '#1f1d1dde' }} />
              <Dropdown.Toggle id="dropdown-basic">
                {getHREmployee?.children[1]?.label}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ background: '#fff' }} >
                {
                  getHREmployee?.children[1].children?.map((child: { label: any, url: any, icon: any, index: number }) => (
                    <Dropdown.Item className="dropdown-item" key={child.index}>
                      <Link to={child?.url ? child.url : ''} className='dplink'>
                        <FeatherIcon icon={child?.icon} className="me-1 dplink text-secondary" style={{ width: '17px' }} />
                        {child?.label}
                      </Link>
                    </Dropdown.Item>
                  ))
                }
              </Dropdown.Menu>
              <span className="arrow-down text-dark me-2"></span>
            </Dropdown>
          </div>
        </div>
      </div>
      {
        pathname === '/apps/admin/employee' ?
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
                      {/* <Col md={6}>
                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Department
                          </Form.Label>
                          <Form.Control defaultValue="IT" disabled className='bg-light' />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Designation
                          </Form.Label>
                          <Form.Control defaultValue="Andriod Developer" disabled className='bg-light' />
                        </Form.Group>
                      </Col> */}
                      <Col md={6}>
                        <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Month
                          </Form.Label>
                          <Form.Control defaultValue={monthName} disabled className='bg-light' />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Year
                          </Form.Label>
                          <Form.Control disabled defaultValue={currentYear} className='bg-light' />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Office In Time
                          </Form.Label>
                          <Form.Control disabled defaultValue={currentTime} className='bg-light' />
                          {/* <Form.Control type="time" placeholder='12:10pm' onChange={handleOfficeTime} /> */}

                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>


                      <Col md={6}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Locations
                          </Form.Label>
                          <Form.Control type="text" defaultValue={Userlocation.city} disabled className='bg-light' />
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
                      <Col md={4}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> longitude
                          </Form.Label>
                          <Form.Control type="text" defaultValue={location?.longitude} disabled className='bg-light' />
                        </Form.Group>
                      </Col>

                      <Col md={4}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> IP
                          </Form.Label>
                          <Form.Control type="text" defaultValue={Userlocation?.query} disabled className="bg-light" />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                          <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date
                          </Form.Label>
                          <Form.Control defaultValue={currentDate} disabled className="bg-light" />
                          {/* <Form.Control type="Date" onChange={handleDate} /> */}
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


            <div className="empattandance p-4">
              <div className="bg-light p-2 empPunchCon">
                <div className="d-flex justify-content-between align-items-center w-75 empFirst">
                  <div className="">
                    <p className="fw-bold fs-4">Hi, {user?.User_Name}</p>
                    <p> <span className="fw-bold fs-5">
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
                  {
                                    opened ?
                                        <Button variant="success" className='fw-bold ms-1' onClick={handleShow}>Punch In</Button>
                                        :
                                        <Button className='lgnbtn fw-bold ms-1' onClick={handlePunchOut}>Punch Out</Button>

                                }
                    {/* <Button variant="success" className='fw-bold ms-1' onClick={handleShow}>Punch In</Button>
                    <Button variant="warning" className='fw-bold ms-1' onClick={handlePunchOut}>Punch Out</Button> */}
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center w-50 mt-3 mb-3">
                  <div className="d-flex  h-100">
                    <div className="d-flex justify-content-center align-items-center"
                      style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#FFFFFF', color: '#46C35F' }}>
                      <i className="fa-solid fa-right-to-bracket fs-4" ></i>
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-start p-1">
                      {/* {
                        currentTime >= "10:11:37 PM" ?
                          <span className="fw-bold text-dark">{currentTime} Late</span>
                          :
                          0

                      } */}
                      {/* {
                        userData.map((item: {
                          end_date: '',
                          start_date: '',
                        }, index: number) => (
                          <span className="fw-bold text-dark" key={index}>{item.start_date.slice(11, 19)} Late</span>
                        ))
                      } */}
                      {timeData.start_date?.slice(11, 19)} Late
                      <span className="text-secondary">Punch In time</span>
                    </div>
                  </div>
                  <div className="d-flex  h-100 empThrid">
                    <div className="d-flex justify-content-center align-items-center"
                      style={{ width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#FFFFFF', color: '#FC6510' }}>
                      <i className="fa-solid fa-arrow-right-from-bracket fs-4"></i>
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-start p-1">
                      {/* {
                        currentTime >= "6:11:37 PM" ?
                          <span className="fw-bold text-dark">{currentTime} Late</span>
                          :
                          <span className="fw-bold text-dark">{currentTime} Office time</span>

                      } */}
                      {/* {
                        userData.map((item: {
                          end_date: '',
                          start_date: '',
                        }, index: number) => (
                          <span className="fw-bold text-dark" key={index}>{item.end_date.slice(11, 19)} Late</span>
                        ))
                      } */}
                      {timeData.end_date?.slice(11, 19)} Late
                      <span className="text-secondary">Punch Out time</span>
                    </div>
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

export default Employee 