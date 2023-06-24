import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import HREmployee from '../../HREmployee';
// import './DesignationEmp.css';


interface LayoutType {
    id: number;
    name: string;
}


const AttandanceDailylog = () => {

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
    // fetch user attandance data
    const [userData, setUserData] = useState([])
    console.log('attandance', userData)
    // const adminUser = userData.filter((i: any) => i.User_Roll === "Admin")
    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = userData?.filter((item: { employee: { User_Name: any } }) =>
        item?.employee.User_Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // const filteredData = currentItems?.filter(item =>
    //     item?.PLayer_Name.toLowerCase().includes(searchQuery.toLowerCase()) && !archivedPlayers.includes(item)
    // );
    console.log('filteredData', filteredData)

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
                .then(res => setUserData(res))
                .then(err => console.log(err))
        };

        fetchData();
    }, []);


    // handle delete
    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

    const handleDelete = (id: any) => {
        console.log('delete', id);
        try {
            const data = new FormData();
            data.append('Process', 'delete');
            data.append('admin_user_name', username);
            data.append('admin_password', passwd);
            data.append('attendance_id', id);

            fetch('https://pubapi.rubytech.xyz/user_info/delete_user/', {
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
                    if (data.massage === "Delete Attendance") {
                        Swal.fire({
                            title: 'success!',
                            text: 'Attandance Deleted Successfully',
                            icon: 'success',
                        })
                    } else {
                        Swal.fire({
                            title: 'Failed!',
                            text: `${data.massage}`,
                            icon: 'error',
                        })
                    }

                    // setTimeout(function () {
                    //     window.location.reload();
                    // }, 1)
                })
                .catch(error => {
                    // Handle any errors
                    console.log('Error:', error);
                });
        } catch (err) {
            console.log('Error:', err)
        }
    }

    return (
        <>
            {
                layout === "opened" ? <HREmployee/> : ''
            }
            <div className='mt-2 mb-4 p-3'>
                <div className="mt-4">
                    <div className="bg-white">
                        <Button className=" lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{ cursor: 'none' }}>
                            Employee Attandance
                        </Button>
                        <div className="mt-2 p-2 w-100">
                            <Row className=" gy-3">
                                <Col md={5} sm={12}>
                                    <Form.Group className=" w-100" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Department
                                        </Form.Label>
                                        <div className="d-flex">
                                            <Form.Select className="fw-bold">
                                                <option>Nothing Selected</option>
                                                <option>IT</option>
                                                <option>Development</option>
                                                <option>Garments</option>
                                            </Form.Select>

                                        </div>
                                    </Form.Group>
                                </Col>
                                <Col md={5}>
                                    <Form.Group className=" w-100" controlId="formBasicEmail">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Date
                                        </Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                </Col>
                                <Col md={2} sm={12}>
                                    <div className="d-flex justify-content-center align-items-end h-100 w-100">
                                        <Button type="submit" className="lgnbtn fw-bold align-items-center" >
                                            Filter
                                        </Button>
                                    </div>
                                </Col>
                            </Row>


                        </div>
                        <div className="p-2">
                            <div className="staffSelec d-flex justify-content-between">
                                <div className="staffLeft d-flex w-100 justify-content-start">
                                    <div className="staffSize d-flex justify-content-start align-items-center">
                                        <span className="fw-bold text-dark me-1">show</span>
                                        <Form.Select className="rounded fw-bold sm">
                                            <option>5</option>
                                            <option>10</option>
                                            <option>14</option>
                                        </Form.Select>
                                        <span className="fw-bold text-dark ms-1">entries</span>
                                    </div>
                                </div>

                                <div className="staffSearch d-flex justify-content-start w-100">
                                    <div className="ms-auto d-flex justify-content-start">
                                        <Button variant="light d-flex justify-content-center align-items-center" >
                                            <FeatherIcon icon="search" style={{ width: '12px' }} />
                                        </Button>
                                        <Form className="d-flex" >
                                            <Form.Control
                                                type="search"
                                                placeholder="Search"
                                                // className="me-2"
                                                aria-label="Search"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <div className="stafftable mt-2">
                                <div className="table-responsive">
                                    <Table bordered>
                                        <thead>
                                            <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                                <th className="fw-bolder border-end text-secondary">S/L</th>
                                                {/* <th className="fw-bolder border-end text-secondary text-center">Fingerprint No.</th> */}
                                                <th className="fw-bolder text-center text-secondary">Employee Name</th>
                                                {/* <th className="fw-bolder text-center text-secondary">Designation</th>
                                                <th className="fw-bolder text-center text-secondary">Department</th> */}
                                                <th className="fw-bolder text-center text-secondary">Place Name</th>
                                                <th className="fw-bolder text-center text-secondary">Date</th>
                                                <th className="fw-bolder text-center text-secondary">IP</th>
                                                <th className="fw-bolder text-center text-secondary">Latitude</th>
                                                <th className="fw-bolder text-center text-secondary">Longitude</th>
                                                <th className="fw-bolder text-center text-secondary">Late</th>
                                                <th className="fw-bolder text-center text-secondary">In Time</th>
                                                <th className="fw-bolder text-center text-secondary">Out Time</th>
                                                <th className="fw-bolder text-center text-secondary">Actions</th>
                                            </tr>
                                        </thead>
                                        {
                                            filteredData.map((item: {
                                                created_at: string,
                                                day: any,
                                                employee: { User_Name: string },
                                                id: number,
                                                ip_address: number,
                                                lang_address: number,
                                                lat_address: number,
                                                late_atain: number,
                                                place_name: string,
                                                start_date: any,
                                                end_date: any,
                                                updated_at: any,
                                            }, index: number) => (
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        {/* <td className='text-center'>101</td> */}
                                                        <td className='text-center'>{item.employee.User_Name}</td>
                                                        {/* <td className='text-center'>Development</td>
                                                        <td className='text-center'>Andriod Developer</td> */}
                                                        <td className='text-center'>{item.place_name}</td>
                                                        <td className='text-center'>{item.day}</td>
                                                        <td className='text-center'>{item.ip_address}</td>
                                                        <td className='text-center'>{item.lat_address}</td>
                                                        <td className='text-center'>{item.lang_address}</td>
                                                        <td className='text-center'>{item.late_atain}</td>
                                                        <td className='text-center'>
                                                            {/* <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                                                <Form.Control type="time" value={item.created_at.slice(12,20)} />
                                                            </Form.Group> */}
                                                            {item.created_at.slice(11, 19)}
                                                        </td>
                                                        <td className='text-center'>
                                                            {/* <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                                                <Form.Control type="time" placeholder='6:10pm' />
                                                            </Form.Group> */}
                                                            {item.end_date.slice(11, 19)}
                                                        </td>
                                                        <td className="text-center d-flex justify-content-center align-items-center ">
                                                            {/* <div className="d-flex">
                                                                <Button variant="warning" className="fw-bold">
                                                                    save
                                                                </Button>
                                                            </div> */}
                                                            <div className="d-flex">
                                                                <Button variant="success d-flex justify-content-center align-items-center ms-2" >
                                                                    <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                                                                </Button>
                                                                <Button variant="danger d-flex justify-content-center align-items-center ms-2"
                                                                    onClick={() => handleDelete(item.id)}>
                                                                    <i className="fa-solid fa-trash me-1"></i>  Delete
                                                                </Button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            ))
                                        }

                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AttandanceDailylog
 