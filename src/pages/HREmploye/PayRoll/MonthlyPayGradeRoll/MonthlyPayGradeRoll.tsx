import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';
// import './DesignationEmp.css';

interface LayoutType {
  id: number;
  name: string;
}


const MonthlyPayGradeRoll = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");

  return (
    <div>
      {
        layout === "opened" ? <HREmployee/> : ''
      }
      <div className='mt-2 p-3 mb-4'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link to="/apps/hremploye/payroll/monthlypaygrade/addnew" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="success" className="fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Add Pay Grade</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-4" >
          <div className="bg-white">
            <Button variant="success" style={{ cursor: 'none' }} className="w-100 fs-4 fw-bold align-items-start rounded-0">
            Monthly Pay Grade List
            </Button>
            <div className="p-2">
            <div className="staffSelec d-flex justify-content-between">
              <div className="staffLeft d-flex w-100 justify-content-start">
                <div className="staffSize d-flex justify-content-start align-items-center">
                  <span className="fw-bold text-dark me-1">show</span>
                  <Form.Select  className="rounded fw-bold">
                    <option>5</option>
                    <option>10</option>
                    <option>14</option>
                  </Form.Select>
                  <span className="fw-bold text-dark ms-1">entries</span>
                </div>
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
                      <th className="fw-bolder border-end text-secondary text-center">Pay Grade Name</th>
                      <th className="fw-bolder text-center text-secondary">Gross Salary</th>
                      <th className="fw-bolder text-center text-secondary">Percentage of Basic</th>
                      <th className="fw-bolder text-center text-secondary">Basic Salary</th>
                      <th className="fw-bolder text-center text-secondary">Overtime Rate</th>
                      <th className="fw-bolder text-center text-secondary">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className='text-center'>A</td>
                      <td className='text-center'>18000</td>
                      <td className='text-center'>50%</td>
                      <td className='text-center'>30000</td>
                      <td className='text-center'>300</td>
                      <td className="text-center d-flex justify-content-center align-items-center">
                        <div className="d-flex">
                          <Button variant="success d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                            <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                          </Button>
                          <Button variant="danger d-flex justify-content-center align-items-center ms-2" style={{ height: '30px' }}>
                            <i className="fa-solid fa-trash me-1"></i>  Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default MonthlyPayGradeRoll
    