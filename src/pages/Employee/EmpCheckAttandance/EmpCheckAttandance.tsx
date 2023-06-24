import React, { useState, useEffect, useContext } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import Employee from '../Employee';
import FeatherIcon from "feather-icons-react";
import { AuthContext } from '../../../context/AuthContext';

const EmpCheckAttandance = () => {
    // fetch user attandance data
    const [userData, setUserData] = useState([])
    console.log('attandance', userData)

    // const adminUser = userData?.filter((i: any) => i.User_Roll === "Admin")
    // const [searchQuery, setSearchQuery] = useState('');
    // const filteredData = userData?.filter((item: { employee: { User_Name: any } }) =>
    //     item?.employee.User_Name.toLowerCase().includes(searchQuery.toLowerCase())
    // );
    // console.log('filteredData', filteredData)



    const username: any = localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")!) : null
    const passwd: any = localStorage.getItem("passwd") ? JSON.parse(localStorage.getItem("passwd")!) : null

    console.log(`username: ${username}`)
    console.log(`passwd: ${passwd}`)

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
        <>
            <Employee />
            <div className="mt-4 mb-4 p-3">
                <div className="bg-white">
                    <div className="">
                        <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                            Check Attandance
                        </Button>
                        <div className="mt-3 p-3">
                            <div className="staffSelec d-flex justify-content-between">
                                <div className="staffLeft d-flex w-100 justify-content-start">
                                    <div className="staffSize">
                                        <Form.Select className="rounded fw-bold">
                                            <option>January</option>
                                            <option>February</option>
                                            <option>March</option>
                                            <option>April</option>
                                            <option>May</option>
                                            <option>June</option>
                                            <option>July</option>
                                            <option>Auguest</option>
                                            <option>September</option>
                                            <option>Octobor</option>
                                            <option>Nobember</option>
                                            <option>December</option>
                                        </Form.Select>
                                    </div>

                                    <div className="staffexport ms-2 d-flex justify-content-start flex-row">
                                        <Form.Select className="fw-bold text-secondary">
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                        </Form.Select>

                                    </div>
                                </div>

                                <div className="staffSearch d-flex justify-content-start w-100">
                                    <div className="ms-auto d-flex justify-content-start">
                                        <Button className="lgnbtn d-flex justify-content-center align-items-center fw-bold">
                                            <i className="fa-solid fa-filter me-1"></i>
                                            Filter
                                        </Button>

                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive mt-2">
                                <Table >
                                    <thead>
                                        <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                            <th className="fw-bolder border-end text-muted">S/N</th>
                                            <th className="fw-bolder text-center border-end text-muted">Date</th>
                                            <th className="fw-bolder text-center border-end text-muted">Latitude</th>
                                            <th className="fw-bolder text-center border-end text-muted">Longitude</th>
                                            <th className="fw-bolder text-center border-end text-muted">Date</th>
                                            {/* <th className="fw-bolder text-center border-end text-muted">Day Name</th> */}
                                            <th className="fw-bolder text-center border-end text-muted">Punch In Time</th>
                                            <th className="fw-bolder text-center text-center text-muted">Punch Out Time</th>
                                        </tr>
                                    </thead>
                                    {
                                        userData.map((item: {
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
                                            updated_at: any,
                                        }, index) => (
                                            <tbody key={index}>
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td className="text-center">{item.day}</td>
                                                    <td className="text-center">{item.lat_address}</td>
                                                    <td className="text-center">{item.lang_address}</td>
                                                    <td className="text-center">Satudary</td>
                                                    <td className="text-center">{item.created_at.slice(12,19)}</td>
                                                    <td className="text-center">{item.updated_at.slice(12,19)}</td>
                                                </tr>
                                            </tbody>
                                        ))
                                    }

                                </Table>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="">
                        <div className="">
                            <h4 className="border-bottom">See year wise attandance</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="2021" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="2022" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="2023" />
                            </Form.Group>

                            <Button variant="success text-white d-flex justify-content-center align-items-center fw-bold">
                                See attandance
                            </Button>
                        </div>
                    </div>

                    <div className="">
                        <div className="">
                            <h4 className="border-bottom">See month wise attandance</h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Jan" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Feb" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Mar" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Apr" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="May" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Jun" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Aug" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Sep" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Nov" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Dec" />
                            </Form.Group>
                            <Button variant="success text-white d-flex justify-content-center align-items-center fw-bold">
                                See attandance
                            </Button>
                        </div>
                    </div>

                    <div className="stafftable mt-2">
                        <div className="table-responsive">
                            <Table>
                                <thead>
                                    <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                                        <th className="fw-bolder border-end bg-success text-white">S/N</th>
                                        <th className="fw-bolder border-end text-secondary text-center">Sa</th>
                                        <th className="fw-bolder text-center text-secondary">Su</th>
                                        <th className="fw-bolder text-center text-secondary">Mo</th>
                                        <th className="fw-bolder text-center text-secondary">Tu</th>
                                        <th className="fw-bolder text-center text-secondary">We</th>
                                        <th className="fw-bolder text-center text-secondary">Th</th>
                                        <th className="fw-bolder text-center bg-danger text-white">Fr</th>
                                        <th className="fw-bolder border-end text-secondary text-center">Sa</th>
                                        <th className="fw-bolder text-center text-secondary">Su</th>
                                        <th className="fw-bolder text-center text-secondary">Mo</th>
                                        <th className="fw-bolder text-center text-secondary">Tu</th>
                                        <th className="fw-bolder text-center text-secondary">We</th>
                                        <th className="fw-bolder text-center text-secondary">Th</th>
                                        <th className="fw-bolder text-center bg-danger text-white">Fr</th>
                                        <th className="fw-bolder border-end text-secondary text-center">Sa</th>
                                        <th className="fw-bolder text-center text-secondary">Su</th>
                                        <th className="fw-bolder text-center text-secondary">Mo</th>
                                        <th className="fw-bolder text-center text-secondary">Tu</th>
                                        <th className="fw-bolder text-center text-secondary">We</th>
                                        <th className="fw-bolder text-center text-secondary">Th</th>
                                        <th className="fw-bolder text-center bg-danger text-white">Fr</th>
                                        <th className="fw-bolder border-end text-secondary text-center">Sa</th>
                                        <th className="fw-bolder text-center text-secondary">Su</th>
                                        <th className="fw-bolder text-center text-secondary">Mo</th>
                                        <th className="fw-bolder text-center text-secondary">Tu</th>
                                        <th className="fw-bolder text-center text-secondary">We</th>
                                        <th className="fw-bolder text-center text-secondary">Th</th>
                                        <th className="fw-bolder text-center bg-danger text-white">Fr</th>
                                        <th className="fw-bolder border-end text-secondary text-center">Sa</th>
                                        <th className="fw-bolder text-center text-secondary">Su</th>
                                        <th className="fw-bolder text-center text-secondary">Mo</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="bg-success text-white">1</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td className="bg-danger text-white">1</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td className="bg-danger text-white">0</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td className="bg-danger text-white">0</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td className="bg-danger text-white">0</td>
                                        <td>p</td>
                                        <td>p</td>
                                        <td>p</td>

                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div> */}


                </div>
            </div>
        </>
    )
}

export default EmpCheckAttandance