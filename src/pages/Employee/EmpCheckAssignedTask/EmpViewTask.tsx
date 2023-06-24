import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row, Table } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Employee from '../Employee';
import { Link, useParams } from 'react-router-dom';

const EmpViewTask = () => {

    const { id } = useParams<{ id: string }>();
    console.log('id', id);
    const pjid: any = id

    const [singleData, setSingleData] = useState({
        assigner: {User_Name:''},
        created_at: '',
        end_date: '',
        file_upload: '',
        followers: [],
        hourly_rate: '',
        id: '',
        priority: '',
        related_to: { project_name: '' },
        repeat_every: '',
        start_date: '',
        tags: '',
        status: '',
        task_description: '',
        task_name: '',
        updated_at: '',
    });
    console.log('single user data', singleData);
    // console.log('customer_name', singleData.customer_name);
    // console.log('status', singleData.status);
    // console.log('project_name', singleData.project_name);

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

    return (
        <div>
            <Employee />
            <div className="mt-2 pt-2 mb-4 p-2">
                <div className="as_container d-flex justify-content-center aligm-items-center h-100">

                    <div className="w-100 " style={{ backgroundColor: '#fff' }}>
                        <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
                            View Project
                        </Button>
                        <div className="p-3">
                            <Tabs
                                defaultActiveKey="Task Details"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-2 fw-bold border-bottom border-2"
                            >
                                <Tab eventKey="Task Details" title="Task Details">
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Task Name
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.task_name} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>

                                                        Assigned by / ID
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.assigner.User_Name} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Priority
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.priority} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={3}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Status
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={
                                                       singleData?.status ? singleData?.status :'Not Found'
                                                    } disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Start Date
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.start_date.slice(0, 10)} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        End Date
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.end_date.slice(0, 10)} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Repeat Task
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.repeat_every} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Related Project Name / ID
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.related_to.project_name} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Hourly Rate
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={
                                                        singleData?.hourly_rate ? `${singleData?.hourly_rate} Tk` : 'Not Found'
                                                    } disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Task assigned Members
                                                    </Form.Label>
                                                    <Form.Control as="select" multiple>
                                                        {
                                                            singleData.followers.map((i: { User_Name: string, id: number }, index: number) => (
                                                                <option defaultValue={i.id} key={index} disabled className='bg-light'>{i.User_Name}</option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Tags
                                                    </Form.Label>
                                                    <Form.Control type="text" defaultValue={singleData?.tags} disabled />
                                                </Form.Group>
                                            </Col>
                                            <Col md={12}>
                                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                                    <Form.Label>
                                                        Descriptions
                                                    </Form.Label>
                                                    <Form.Control as="textarea" defaultValue={singleData?.task_description} disabled />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="d-flex justify-content-center">
                                            <Link to="/apps/employee/checktasks" style={{ textDecoration: "none" }}>
                                                <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                                    <span>Go Back</span>
                                                </Button>
                                            </Link>
                                        </div>
                                    </Form>
                                </Tab>
                                {/* <Tab eventKey="Project Setting" title="Project Setting">
                                    <Form.Group className="mb-2" controlId="formBasicPassword">
                                        <Form.Label>
                                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Send T
                                        </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                   
                                </Tab> */}
                            </Tabs>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpViewTask