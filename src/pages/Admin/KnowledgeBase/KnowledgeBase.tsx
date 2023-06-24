import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './KnowledgeBase.css';
import Admin from '../Admin';


interface LayoutType {
  id: number;
  name: string;
}

const KnowledgeBase = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <Admin/> : ''
      }
      <div className='mt-2 mb-4 p-3'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link to="/apps/admin/knowledge/newarticle" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="primary" className="fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Aricle</span>
              </Button>
            </Link>
            <Link to="/apps/admin/knowledge/groups" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">Groups</span>
              </Button>
            </Link>
          </div>

          <div className="d-flex">
            <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
              <FeatherIcon icon="filter" className="me-1" style={{ width: '22px' }} />
            </Button>
          </div>
        </div>

        <div className="staff_container">
          <div className="staffSelec d-flex justify-content-between">
            <div className="staffLeft d-flex w-100 justify-content-start">
              <div className="staffSize">
                <Form.Select className="rounded fw-bold">
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                </Form.Select>
              </div>

              <div className="staffexport ms-2 d-flex justify-content-start flex-row">
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
            <Table >
              <thead>
                <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                  <th className="fw-bolder border-end">Article Name</th>
                  <th className="fw-bolder border-end">Group</th>
                  <th className="fw-bolder text-center">Date Published</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>How to center div</td>
                  <td>css styles</td>
                  <td className="text-center">12/3/2023</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default KnowledgeBase