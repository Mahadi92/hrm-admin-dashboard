import React from 'react';
import { Button, Form } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';

interface LayoutType {
    id: number;
    name: string;
    // add more properties as needed
}
const NewDesignation = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
    return (
        <>
        
        {
                layout === "opened" ? <HREmployee/> : ''
            }
        <div className="mt-2 mb-4 p-3">
            <div className="w-100">
                <div className="d-flex justify-content-end align-items-end mb-2">
                    <Link to="/apps/hremploye/Designation" style={{ textDecoration: "none" }}>
                        <Button type="submit" className="lgnbtn fw-bold align-items-center">
                            Go Back
                        </Button>
                    </Link>
                </div>
                <div className="bg-white">
                    <Button className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0" style={{cursor:'none'}}>
                        Add New Designation
                    </Button>
                    <div className="p-2">
                        <div className="w-50 justify-content-start align-items-center">
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label className='fw-bold'>
                                    <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Add New Designation
                                </Form.Label>
                                <Form.Control type="text" />
                                <Button type="submit" className="lgnbtn fw-bold align-items-center mt-2">
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

export default NewDesignation 