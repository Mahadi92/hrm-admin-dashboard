import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Employee from '../Employee';
import axios from "axios";
import { DayTableSlicer } from '@fullcalendar/daygrid';
// import MockAdapter from 'axios-mock-adapter'  "axios-mock-adapter": "^1.19.0",;

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

}
type DepartmentChangeEvent = React.ChangeEvent<HTMLSelectElement>;

const EmpAttandanceGive = () => {

  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  // 
  const [location, setLocation] = useState<Coordinates>()
console.log('location',location)

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
  });

  const [Userlocation, setUserLocation] = useState<userlocationInter>({ city: '', ip: '' });
  console.log('Userlocation', Userlocation);


  const fetchUserLocation = async () => {
    try {
      // const response = await axios.get('https://ipinfo.io/json?token=2930bb7c2fd850');
      // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      fetch('https://ipinfo.io/json?token=2930bb7c2fd850')
        .then(response => response.json())
        .then(data => setUserLocation(data))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUserLocation();
  });


  // post data
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [designation, setDesignation] = useState('')
  const [userlocation, setuserLocation] = useState('')
  const [officeTime, setofficeTime] = useState('')
  const [ip, setIp] = useState('')
  const [date, setDate] = useState('')

  // console.log('name', name)
  // console.log('department', department)
  // console.log('designation', designation)
  // console.log('officeTime', officeTime)
  // console.log('userlocation', userlocation)
  // console.log('ip', ip)
  // console.log('date', date)

  // handlechange
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleDepartment: React.FormEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.currentTarget.value;
    setDepartment(selectedValue);
  };
  const handleDesignation: React.FormEventHandler<HTMLSelectElement> = (event) => {
    const selectedValue = event.currentTarget.value;
    setDesignation(selectedValue);
  };
  const handleUserlocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setuserLocation(event.target.value);
  };
  const handleOfficeTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    setofficeTime(event.target.value);
  };
  const handleIp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIp(event.target.value);
  };
  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const newdate = new Date();
  const monthName = newdate.toLocaleString('default', { month: 'long' });
  const currentTime = newdate.toLocaleTimeString()
  const currentDate = newdate.toLocaleDateString()
  const currentYear = newdate.getFullYear()
  // console.log('monthName',monthName, currentTime,currentDate); 
  // HANDLE POST 
  // const handlePost:  = (event) => {
  //   event.preventDefault();
  //   // Your existing code for handling the post
  // };
  const [res, setRes] = useState([])
  console.log('api response', res)
  const handlePost: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("name", name)
    data.append("department", department)
    data.append("designation", designation)
    data.append("userlocation", userlocation)
    data.append("month", monthName)
    data.append("officeTime", currentTime)
    data.append("ip", ip)
    data.append("date", currentDate)
   

    fetch('http://localhost:5000/addnew/attandance', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then((response: any) => {
        // Handle the response
        setRes(response);
      })

      .catch(error => {
        // Handle any errors
        console.log(error);
      });
  }



  return (
    <>
      {/* {
        layout === "opened" ? <Employee /> : ''
      } */}
      <Employee />
      <div className='mt-2 mb-4 p-3'>
        <div className="mt-4">
          <div className="bg-white">
            <Button variant="success" className="w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
              Add Attandance
            </Button>

            <div className="p-2">
              <div className="stafftable">
                <div className="d-flex justify-content-center align-items-center  flex-column">
                  <div className="w-100  bg-white">
                    <div className="p-2">
                      <Row>
                        <Col md={3}>
                          <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Name
                            </Form.Label>
                            <Form.Control type="text" defaultValue="arif" onChange={handleNameChange} disabled className='bg-light'/>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Department
                            </Form.Label>
                            <div className="d-flex">
                              <Form.Select className="fw-bold" onChange={handleDepartment}>
                                <option>Nothing Selected</option>
                                <option>Development</option>
                                <option>Product Management</option>
                                <option>HR</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Designation
                            </Form.Label>
                            <div className="d-flex">
                              <Form.Select className="fw-bold" onChange={handleDesignation}>
                                <option>Nothing Selected</option>
                                <option>HR</option>
                                <option>Manager</option>
                                <option>UI Designer</option>
                                <option>Sr. Baackend Developer</option>
                              </Form.Select>
                            </div>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Month
                            </Form.Label>
                            <Form.Control defaultValue={monthName} disabled className='bg-light'/>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={3}>
                          <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Year
                            </Form.Label>
                            <Form.Control disabled defaultValue={currentYear} className='bg-light'/>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} />Office In Time
                            </Form.Label>
                            <Form.Control disabled defaultValue={currentTime} className='bg-light'/>
                            {/* <Form.Control type="time" placeholder='12:10pm' onChange={handleOfficeTime} /> */}

                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Current Locations
                            </Form.Label>
                            <Form.Control type="text" defaultValue={Userlocation.city} disabled className='bg-light'/>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> latitude
                            </Form.Label>
                            <Form.Control type="text" defaultValue={location?.latitude} disabled className='bg-light'/>
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> longitude
                            </Form.Label>
                            <Form.Control type="text" defaultValue={location?.longitude} disabled className='bg-light'/>
                          </Form.Group>
                        </Col>

                        <Col md={4}>
                          <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                              <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> IP
                            </Form.Label>
                            <Form.Control type="text" defaultValue={Userlocation.ip} disabled className="bg-light"/>
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


                      <div className="mb-3 pt-2">
                        <div className="text-start">
                          <Button type="submit" variant="success" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlePost(e)}>
                            <span className='fw-bold'>Save</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default EmpAttandanceGive
