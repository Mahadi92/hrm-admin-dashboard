import React from 'react';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './ProposalCR.css';
import CRProjects from '../CRProjects';

interface LayoutType {
  id: number;
  name: string;
}
const ProposalCR = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
  return (
    <>
      {
        layout === "opened" ? <CRProjects /> : ''
      }
      <div className='mt-2 mb-4 p-3'>

        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Link to="/apps/admin/knowledge/newarticle" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="success" className="fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Proposal</span>
              </Button>
            </Link>
            <Link to="/apps/admin/knowledge/groups" style={{ textDecoration: "none" }}>
              <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} />
              </Button>
            </Link>
          </div>

          <div className="d-flex">
            <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
              <FeatherIcon icon="filter" className="me-1" style={{ width: '22px' }} />
            </Button>
          </div>
        </div>

        <div className="mt-4 bg-white">
          <Button variant="success" style={{cursor:'none'}} className="w-100 fw-bold fs-4 align-items-start rounded-0">
            All Proposals list
          </Button>
          <div className="p-2">
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
                  <th className="fw-bolder border-end text-secondary">Proposal#</th>
                  <th className="fw-bolder border-end text-secondary">Subject</th>
                  <th className="fw-bolder text-center text-secondary">To</th>
                  <th className="fw-bolder text-center text-secondary">Total</th>
                  <th className="fw-bolder text-center text-secondary">Date</th>
                  <th className="fw-bolder text-center text-secondary">Open Till</th>
                  <th className="fw-bolder text-center text-secondary">Tags</th>
                  <th className="fw-bolder text-center text-secondary">Date Created</th>
                  <th className="fw-bolder text-center text-secondary">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>dummy data</td>
                  <td>dummy data</td>
                  <td>dummy data</td>
                  <td>dummy data</td>
                  <td>dummy data</td>
                  <td>dummy data</td>
                  <td>dummy data</td>
                  <td className="text-center">12/3/2023</td>
                </tr>
              </tbody>
            </Table>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProposalCR