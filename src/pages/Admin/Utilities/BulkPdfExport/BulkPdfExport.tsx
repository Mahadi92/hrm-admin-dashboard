import React from 'react'
import FeatherIcon from "feather-icons-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Bulk.css';
import Admin from '../../Admin';


interface LayoutType {
    id: number;
    name: string;
}
const BulkPdfExport = () => {

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    return (
        <>
            {
                layout === "opened" ? <Admin/> : ''
            }
            <div className="mt-2 p-3 mb-4">
                <div className="d-flex justify-content-center align-items-center  flex-column">
                    <div className="w-50 p-3 knbarticle_box">
                        <h4 className="fw-bold text-dark">Bulk PDF Export</h4>

                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>
                                <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Select Type
                            </Form.Label>
                            <Form.Select className="fw-bold">
                                <option className='text-secondary'>Nothing Selected</option>
                                <option>English</option>
                                <option>Arabic</option>
                                <option>Bangla</option>
                                <option>Hindi</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                From Date:
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                To Date:
                            </Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>
                                <span className="fw-bolder">Include Tag</span>
                            </Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Button type="submit" className='fw-bold'>
                            Export
                        </Button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default BulkPdfExport 