import React from 'react';
import { Button, Form } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';

interface LayoutType {
    id: number;
    name: string;
}

const NewManageHoliday = () => {

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    return (
        <>
            {
                layout === "opened" ? <HREmployee/> : ''
            }
            <div className="mt-2 p-3 mb-4">
                <div className="w-100">
                    <div className="d-flex justify-content-end align-items-end mb-2">
                        <Link to="/apps/hremploye/holidy_management" style={{ textDecoration: "none" }}>
                            <Button type="submit" variant="success" className="fw-bold align-items-center">
                                Go Back
                            </Button>
                        </Link>
                    </div>
                    <div className="bg-white">
                        <Button variant="success" style={{ cursor: 'none' }} className="w-100 fs-4 fw-bold align-items-start rounded-0">
                            Add New Holidy
                        </Button>
                        <div className="p-2">
                            <div className="w-50 justify-content-start align-items-center">
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label className='fw-bold'>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Add New Holidy
                                    </Form.Label>
                                    <Form.Control type="text" />
                                    <Button type="submit" variant="success mt-2" className="fw-bold align-items-center">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewManageHoliday 