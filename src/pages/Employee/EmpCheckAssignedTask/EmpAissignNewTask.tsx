import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";
import Employee from '../Employee';

const EmpAissignNewTask = () => {
    return (
        <>
            <Employee />
            <div className="mt-4 mb-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="w-50 knbarticle_box bg-white p-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="fw-bold text-dark my-2">Add New Task</h4>

                            <Link to="/apps/employee/checktasks" style={{ textDecoration: "none" }}>
                                <Button type="submit" className="lgnbtn fw-bold align-items-center">
                                    <span className="fs-5">Go back</span>
                                </Button>
                            </Link>
                        </div>

                        <div className="d-flex my-2">
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Public" />
                            </Form.Group>
                            <Form.Group className="ms-2" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Billable" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Subject
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Image
                            </Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Hourly Rate
                            </Form.Label>
                            <Form.Control type="number" defaultValue={0} />
                        </Form.Group>
                        <div className="d-flex w-100">
                            <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Start Date
                                </Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                            <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicEmail">
                                <Form.Label>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Due Date
                                </Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </div>
                        <div className="d-flex">
                            <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Priority
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary">
                                        <option>Nothing Selected</option>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                        <option>Very High</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Repeat every
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary">
                                        <option>Nothing Selected</option>
                                        <option>week</option>
                                        <option>2 week</option>
                                        <option>3 week</option>
                                        <option>1 week</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                Related to
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                Tag
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <div className="d-flex">
                            <Form.Group className="mb-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Assignees
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary">
                                        <option>Nothing Selected</option>
                                        <option>Admin</option>
                                        <option>Jhony</option>
                                        <option>Nadim</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-2 ms-2 w-100" controlId="formBasicPassword">
                                <Form.Label>
                                    Followers
                                </Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="fw-bold text-secondary">
                                        <option>Nothing Selected</option>
                                        <option>test</option>
                                        <option>User 2</option>
                                        <option>test user 2</option>
                                    </Form.Select>
                                </div>
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                Task Description
                            </Form.Label>
                            <Form.Control as="textarea" type="text" />
                        </Form.Group>
                        <Button type="submit" className="lgnbtn fw-bold align-items-center">
                            <span className="fs-5">Save</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpAissignNewTask 