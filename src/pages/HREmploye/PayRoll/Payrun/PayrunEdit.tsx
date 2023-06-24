import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HREmployee from '../../HREmployee';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import './Payrun.css';

interface LayoutType {
    id: number;
    name: string;
}

const PayrunEdit = () => {
    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

    const options = [
        { value: 'Main', label: 'Main' },
        { value: 'Backend', label: 'Backend' },
        { value: 'HR', label: 'HR' }
    ]
    const allowances = [
        { value: 'Bonus', label: 'Bonus' },
        { value: 'Festibal Bonus', label: 'Festibal Bonus' }
    ]
    const deductions = [
        { value: 'Tax', label: 'Tax' },
        { value: 'Cutting', label: 'Cutting' }
    ]

    const [showInput, setShowInput] = useState(false);
    const [showMonth, setShowMonth] = useState(false);

    const handleSelectChange = (event: any) => {
        const selectedOption = event.target.value;
        setShowInput(selectedOption === 'Customized');
        setShowMonth(selectedOption === 'Monthly');
    };

    return (
        <>

            {
                layout === "opened" ? <HREmployee /> : ''
            }
            <div className="mt-2 p-3 bg-white shadow-sm rounded">
                <div className="d-flex justify-content-between align-items-center">
                    <h4 className='mb-2 fw-bold text-dark border-bottom'>Update Manual payrun</h4>
                    <Link to="/apps/hremploye/payroll/payrun">
                        <Button className="fw-bold lgnbtn" size="sm">
                            Go Back
                        </Button>
                    </Link>
                </div>
                <Tabs
                    defaultActiveKey="payee"
                    id="uncontrolled-tab-example"
                    className="mb-3 fw-bold"
                    style={{ fontWeight: "bold" }}
                >
                    <Tab eventKey="payee" title="Payee">
                        <h4 className="fw-bold text-dark">
                            Who are allowed for the payrun?
                        </h4>
                        <p className="fw-bold text-muted">
                            You can add users by Department or Employee directly to generate payslip.
                            if you select any department then it takes only active employees from that department.
                            if you need to select inactive or terminated employees, you can select from by user filed
                        </p>
                        <Row>
                            <Col md={6}>
                                <Form.Label>By Department</Form.Label>
                                <Select options={options} isMulti />
                            </Col>
                            <Col md={6}>
                                <Form.Label>By User</Form.Label>
                                <Select options={options} isMulti />
                            </Col>
                        </Row>


                    </Tab>
                    <Tab eventKey="payrunperiod" title="Payrun Period">
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Payrun Period</Form.Label>
                                            <Form.Select className="fw-bold" onChange={handleSelectChange}>
                                                <option>Not Selected</option>
                                                <option>Monthly</option>
                                                <option>Customized</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Payrun generating type</Form.Label>
                                            <Form.Select className="fw-bold">
                                                <option>Not Selected</option>
                                                <option>Hour</option>
                                                <option>Daily Log</option>
                                                <option>None</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>

                                {showInput && (
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Start Date</Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>End Date</Form.Label>
                                                <Form.Control type="date" />
                                            </Form.Group>
                                        </Col>


                                    </Row>
                                )}
                                {showMonth && (
                                    <>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Executable month & year</Form.Label>
                                            <Form.Control type="month" />
                                        </Form.Group>
                                    </>
                                )}

                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="payrslip" title="Payslip Note">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Note</Form.Label>
                            <Form.Control as="textarea" />
                        </Form.Group>
                    </Tab>

                    <Tab eventKey="beneficiary" title="Beneficiary Badge">
                        <Row>
                            <Col md={6}>
                                <Form.Label>Allowance</Form.Label>
                                <Select options={allowances} isMulti />
                            </Col>
                            <Col md={6}>
                                <Form.Label>Deduction</Form.Label>
                                <Select options={deductions} isMulti />
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>

        </>
    )
}

export default PayrunEdit