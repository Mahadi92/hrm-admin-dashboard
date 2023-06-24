import React, { useState, useEffect } from 'react'
import FeatherIcon from "feather-icons-react";
import DatePicker, { DateObject } from "react-multi-date-picker"
import type { Value } from "react-multi-date-picker"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
// import HREmployee from '../../HREmploye/HREmployee';
import Swal from 'sweetalert2';
import Table from 'react-bootstrap/Table';
import HREmployee from '../../HREmployee';

interface LayoutType {
    id: number;
    name: string;
}


const ShiftsAndOthers = () => {

    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null


    const [userData, setUserData] = useState({
        off_day_list: [],
        holy_day_list: [],
        day_start_time: '',
        day_end_time: '',
        late_atain_time_set: '',
        created_at: '',
        id: '',
    })
    console.log('userData', userData)
    useEffect(() => {
        const fetchData = async () => {
            const data = new FormData();
            data.append('Process', 'attendance_settings_seen');
            data.append('admin_user_name', username);
            data.append('admin_password', passwd);

            await fetch('https://pubapi.rubytech.xyz/attendance/attendance_settings_seen_by_admin/',
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
    }, );


    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");


    // const [value, setValue] = useState<DateObject | DateObject[] | null>();
    const [value, setValue] = useState<Value>(new Date());
    console.log('value', value)


    // const [off_day_list, setOff_day_list] =  useState<string[] | Blob>()
    const [day_start_time, setday_start_time] = useState('')
    const [day_end_time, setday_end_time] = useState('')
    const [late_atain_time_set, setlate_atain_time_set] = useState('')
    const [off_day_list, setoff_day_list] = useState<string[] | Blob>([])

    // const holy_day_list: any = value;

    // SELECT HOLIDAY LISTS
    const [selectedDates, setSelectedDates] = useState<string[]>([]);
    console.log('selectedDates', selectedDates)
    const holy_day_list: any = selectedDates;

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const dates = value.split(',');
        setSelectedDates((prevSelectedDates) => [...prevSelectedDates, ...dates]);
    };
    const removeDate = (dateToRemove: string) => {
        setSelectedDates(prevSelectedDates =>
          prevSelectedDates.filter(date => date !== dateToRemove)
        );
      };

    // console.log('holy_day_list',holy_day_list)
    //   console.log('convertedDates',convertedDates);




    // const [holidays, setholidays] = useState<string[] | Blob | any>([])
    // console.log('holidays', holidays)

    // const handleChange = (selectedDate: DateObject | DateObject[] | null) => {
    //     setValue(selectedDate);
    //     console.log('selectedDate', selectedDate)
    // };

    console.log('day_start_time', day_start_time)
    console.log('day_end_time', day_end_time)
    console.log('late_atain_time_set', late_atain_time_set)
    console.log('off_day_list', off_day_list)
    // console.log('holy_day_list', convertedDates)

    const handleOffdayList = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = event.currentTarget.selectedOptions;
        const repition = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            repition.push(selectedOptions[i].value);
        }
        setoff_day_list(repition);
    };


    // const handleHolydayList = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedOptions = event.currentTarget.selectedOptions;
    //     const repition:any = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //         repition.push(selectedOptions[i].value);
    //     }
    //     setholidays(repition);
    // }

    // const handleHolydayList = (selectedDates: DateObject[] | null) => {
    //     if (selectedDates) {
    //       const repition:any = selectedDates.map((dateObj) => dateObj.date);
    //       setholidays(repition);
    //     }
    //   }

    // const handleHolydayList = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     const selectedOptions = event.currentTarget.selectedOptions;
    //     const repition: DateObject[] = [];
    //     for (let i = 0; i < selectedOptions.length; i++) {
    //       const value:any = selectedOptions[i].value;

    //       const dateObject: DateObject = { date: new Date(value) };
    //       repition.push(dateObject);
    //     }
    //     setValue(repition);
    //   }

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        const data = new FormData();
        data.append('Process', 'create')
        data.append('admin_user_name', username)
        data.append('admin_password', passwd)
        // data.append('off_day_list', off_day_list)
        if (Array.isArray(off_day_list)) {
            const membersIdString = off_day_list.join(',');
            data.append('off_day_list', membersIdString);
        } else {
            data.append('off_day_list', off_day_list);
        }
        data.append('holy_day_list', holy_day_list)
        data.append('day_start_time', day_start_time)
        data.append('day_end_time', day_end_time)
        data.append('late_atain_time_set', late_atain_time_set)

        fetch('https://pubapi.rubytech.xyz/attendance/attendance_settings_create_by_admin/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response) => {
                console.log('103', response)
                if (response.massage === "NOT VALID") {
                    Swal.fire({
                        title: 'Failed!',
                        text: `${response.massage}`,
                        icon: 'error',
                    })

                } else {
                    response && Swal.fire({
                        title: 'success!',
                        text: `${response.massage}`,
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

    // const [selectedDates, setSelectedDates] = useState<string[]>([]);

    // console.log('selectedDates',selectedDates)
    // const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const { value } = event.target;
    //   const dates = value.split(',');
    //   setSelectedDates(dates);
    // };

    return (
        <>
            {
                layout === "opened" ? <HREmployee/> : ''
            }

            <div className="mt-2 p-3 mb-4 bg-white">

                <div className="d-flex justify-content-center align-items-center  flex-column">
                    <div className="w-100  ">
                        <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                            Add New Shift, Holiday and Working day
                        </Button>
                        <div className="p-2">


                            {/* <div className="d-flex justify-content-between align-items-center ">
                                <h4 className="fw-bold text-dark">Add New Termination</h4>
                                <Link to="/apps/hremploye/Promotions" style={{ textDecoration: "none" }}>
                                    <Button type="submit" variant="success" className="fw-bold align-items-center">
                                        Go Back
                                    </Button>
                                </Link>
                            </div> */}

                            <Row>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Clock In Time
                                        </Form.Label>
                                        <Form.Control type="time" onChange={(e) => setday_start_time(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Clock Out Time
                                        </Form.Label>
                                        <Form.Control type="time" onChange={(e) => setday_end_time(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Tolerance Time
                                        </Form.Label>
                                        <Form.Control type="time" onChange={(e) => setlate_atain_time_set(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Select Off Day
                                        </Form.Label>
                                        <Form.Select className="fw-bold" style={{ height: '150px' }} multiple onChange={handleOffdayList}>
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Holiday List
                                        </Form.Label>
                                        {
                                            selectedDates.length !== 0 ?
                                                <>
                                                    <div className="d-flex gap-2 bg-light p-2 rounded w-100 flex-wrap">
                                                        {
                                                            selectedDates.map((i: any, index: number) => (
                                                                <span className="d-flex bg-secondary text-white p-1 rounded justify-content-center align-items-center"
                                                                    key={index}>{i}
                                                                    <i className="fa-sharp fa-solid fa-xmark ms-1 fs-5 cursor-pointer" 
                                                                    onClick={()=>removeDate(i)}></i>
                                                                </span>

                                                            ))
                                                        }
                                                    </div>
                                                    {/* <Form.Control type='text' defaultValue={selectedDates} disabled className="bg-light mb-2" /> */}
                                                </>
                                                :
                                                ''
                                        }
                                        <Form.Control type="date" multiple onChange={handleDateChange} />
                                    </Form.Group>
                                </Col>

                                {/* <Col md={12}>
                                    <Form.Group className="mb-2  w-100 text-center" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Add Holyday or Weekends
                                        </Form.Label>
                                        <div className="w-100 d-flex justify-content-center align-items-center flex-column">

                                            <DatePicker value={value} onChange={handleHolydayList} multiple 
                                            style={{ width: '20rem', height: '50px' }} /> 
                                            <DatePicker value={value} onChange={setValue} multiple />;
                                            <Button className="lgnbtn mt-3 mb-3 fw-bold" onClick={handleSubmit}>Create</Button>
                                        </div>
                                    </Form.Group>
                                </Col> */}
                            </Row>
                        </div>
                    </div>

                    {/* <Button style={{ cursor: 'none' }} className=" w-100 fs-4 rounded-0">Add Holyday or Weekends </Button>
                    <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                        <div className="w-100 d-flex justify-content-center align-items-center mt-3">
                        </div>
                        <DatePicker value={value} onChange={handleChange} multiple style={{ width: '20rem', height: '50px' }} />
                    </div> */}
                    <Button className="lgnbtn mt-3 mb-3 fw-bold" onClick={handleSubmit}>Save</Button>
                </div>
                <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                    Shift List
                </Button>
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Clock In Time</th>
                                <th>Clock Out Time</th>
                                <th>Late Attain Time</th>
                                <th>Off Days</th>
                                <th>Holy Days</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{userData?.id}</td>
                                <td>{userData.day_start_time}</td>
                                <td>{userData.day_end_time}</td>
                                <td>{userData.late_atain_time_set}</td>
                                <td>{userData.late_atain_time_set}</td>
                                <td>{userData.late_atain_time_set}</td>
                                <td>{userData.created_at.slice(0, 10)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    )
}

export default ShiftsAndOthers     