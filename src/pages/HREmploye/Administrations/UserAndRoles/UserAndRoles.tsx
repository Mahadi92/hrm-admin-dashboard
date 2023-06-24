import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import HREmployee from '../../HREmployee';
import './UsersAllStyles.css';

interface LayoutType {
    id: number;
    name: string;
}

const UserAndRoles = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");


    // fetching api
    const [projectData, setData] = useState([]);
    console.log('all staff data', projectData);

    const progressData: any = projectData

    // const filteredProgressData = progressData.filter((obj: any) => obj.status === "In Progress");
    // const filteredCacelledData = progressData.filter((obj: any) => obj.status === "Cancelled");
    // const filteredOnHoldData = progressData.filter((obj: any) => obj.status === "On Hold");
    // const filteredNotStartedsData = progressData.filter((obj: any) => obj.status === "Not Started");
    // const filteredFinishedData = progressData.filter((obj: any) => obj.status === "Finished");
    // console.log('filtered data', filteredProgressData);

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
                setData(data);
            })
            .catch(error => {
                // Handle any errors
                console.log('Error:', error);
            });
    }, []);

    // const adminUser = userData.filter((i: any) => i.User_Roll === "Admin")
    const [searchQuery, setSearchQuery] = useState('');
    const filteredData = projectData?.filter((item: { User_Name: '' }) =>
        item?.User_Name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // handle delete
    const handleDelete = (id: any) => {
        console.log('delete', id);
        try {
            const data = new FormData();
            data.append('Process', 'delete');
            data.append('admin_user_name', 'admin');
            data.append('admin_password', 'admin');
            data.append('deleted_user_id', id);

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
                    data && Swal.fire({
                        title: 'success!',
                        text: 'User Deleted Successfully',
                        icon: 'success',
                    })
                    setTimeout(function () {
                        window.location.reload();
                    }, 1)
                })
                .catch(error => {
                    // Handle any errors
                    console.log('Error:', error);
                });
        } catch (err) {
            console.log('Error:', err)
        }
    }

    // handle alert
    const handleAlert = () => {
        alert('This feature is coming')
    }
    return (
        <>

            {
                layout === "opened" ? <HREmployee/> : ''
            }
            <div className='mt-2 mb-4 p-3'>
                <Link to="/apps/admin/setup/addstaff" style={{ textDecoration: "none" }}>
                    <Button type="submit" className="lgnbtn fw-bold align-items-center">
                        <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Staff Member</span>
                    </Button>
                </Link>
                <div className="staff_container">
                    {/* <DropdownButton id="dropdown-item-button" title="24 "  variant='light'>
                    <Dropdown.Item as="button">26</Dropdown.Item>
                    <Dropdown.Item as="button">27</Dropdown.Item>
                </DropdownButton> */}
                    <div className="staffSelec d-flex justify-content-between">
                        <div className="staffLeft d-flex w-100 justify-content-start">
                            <div className="staffSize">
                                <Form.Select className="rounded fw-bold">
                                    <option>5</option>
                                    <option>10</option>
                                    <option>15</option>
                                </Form.Select>
                            </div>

                            {/* <div className="staffexport ms-2 d-flex justify-content-start flex-row">
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
                            </div> */}
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
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
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
                                        <th className="fw-bolder">S/N</th>
                                        <th className="fw-bolder">Full Name</th>
                                        <th className="fw-bolder">Email</th>
                                        <th className="fw-bolder">Role</th>
                                        <th className="fw-bolder">Phone</th>
                                        <th className="fw-bolder">Active</th>
                                        <th className="fw-bolder d-flex justify-content-center align-items-center">Actions</th>
                                    </tr>
                                </thead>
                                {
                                    filteredData.map((item: {
                                        User_Email: string,
                                        User_Name: string,
                                        User_Password: string,
                                        User_Phone: string,
                                        User_Roll: string,
                                        id: number,


                                    }, index: number) => (
                                        <tbody key={index}>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.User_Name}</td>
                                                <td>{item.User_Email}</td>
                                                <td>{item.User_Roll}</td>
                                                <td>{item.User_Phone}</td>
                                                <td>
                                                    <Form>
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            onClick={handleAlert}
                                                        />
                                                    </Form>
                                                </td>
                                                <td className="d-flex justify-content-center align-items-center">
                                                    <Link to={`/apps/admin/setup/viewStaff/${item.User_Name}`}>
                                                        <Button variant="success" className="fw-bold">Edit</Button>
                                                    </Link>
                                                    <Button variant="danger" className="ms-2 fw-bold" onClick={() => handleDelete(item.id)}>Delete</Button>
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

        </>
    )
}

export default UserAndRoles 