import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import './Task.css';
import CRProjects from '../CRProjects';
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';

interface LayoutType {
  id: number;
  name: string;
}
const Task = () => {
  const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");


  // fetching api
  const [projectData, setData] = useState([]);
  console.log('all task data', projectData);

  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = projectData?.filter((item: { task_name: string, }) =>
    item?.task_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const progressData: any = projectData
  const filteredProgressData = progressData.filter((obj: any) => obj.status === "In Progress");
  const filteredCacelledData = progressData.filter((obj: any) => obj.status === "Cancelled");
  const filteredOnHoldData = progressData.filter((obj: any) => obj.status === "On Hold");
  const filteredNotStartedsData = progressData.filter((obj: any) => obj.status === "Not Started");
  const filteredFinishedData = progressData.filter((obj: any) => obj.status === "Finished");

  // console.log('filtered data', filteredProgressData);

  useEffect(() => {
    const data = new FormData();
    data.append('Process', 'see_all');
    data.append('admin_user_name', 'admin');
    data.append('admin_password', 'admin');

    fetch('https://pubapi.rubytech.xyz/task/find_all_task/', {
      method: 'POST',
      body: data,
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Request failed with status ' + response.status);
        }
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        // Handle any errors
        console.log('Error:', error);
      });
  },);



  // handle delete
  const handleDelete = (id: any) => {
    // console.log('delete', id);
    try {
      const data = new FormData();
      data.append('Process', 'delete');
      data.append('admin_user_name', 'admin');
      data.append('admin_password', 'admin');
      data.append('deleted_task_id', id);

      fetch('https://pubapi.rubytech.xyz/task/delete_task/', {
        method: 'POST',
        body: data,
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Request failed with status ' + response.status);
          }
        })
        .then(data => {
          data && Swal.fire({
            title: 'success!',
            text: 'Task Deleted Successfully',
            icon: 'success',
          })
          // setTimeout(function () {
          //   window.location.reload();
          // }, 1)
        })
        .catch(error => {
          // Handle any errors
          console.log('Error:', error);
        });
    } catch (err) {
      console.log('Error:', err)
    }
  }



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const singleID: any = localStorage.getItem("singleId") ? JSON.parse(localStorage.getItem("singleId")!) : null
  console.log('singleID', singleID)

  // FIND THE PARTICULAR TASK 
  const [singleData, setSingleData] = useState({
    assigner: { User_Name: '', id: '', User_Roll: '', User_Email: '', User_Phone: '', User_Joing_Date_Time: '' },
    // assigner: [],
    end_date: '',
    start_date: '',
    // followers: {User_Name: '', id: '',User_Roll:'',User_Email:'',User_Phone:'',User_Joing_Date_Time:''},
    followers: [],
    file_upload: '',
    hourly_rate: '',
    customer_name: '',
    id: '',
    priority: '',
    related_to: { billing: '', created_at: '', updated_at: '', customer_name: '', id: '', project_name: '', },
    repeat_every: '',
    tags: '',
    task_description: '',
    status: '',
    task_name: '',
    updated_at: '',

  });

  console.log('singleData', singleData)

  const Assginers: any = singleData.assigner
  const Followers: any = singleData.followers.map((item: { id: '' }) => item.id)
  console.log('Followers', Followers)


  const handleShow = (id: any) => {
    setShow(true)
    localStorage.setItem("singleId", JSON.stringify(id) ?? "notid")
  }


  useEffect(() => {
    const fetchData = async () => {
      const data = new FormData();
      data.append('Process', 'see_one');
      data.append('admin_user_name', 'admin');
      data.append('admin_password', 'admin');
      data.append('task_id', singleID);
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
  }, )


  const [task_status, setTaskStatus] = useState<string>('')
  console.log('task_status', task_status)

  const handleApproveTask = async (event: any) => {
    event.preventDefault();

    const data = new FormData();
    data.append('Process', 'update')
    data.append('admin_user_name', 'admin')
    data.append('admin_password', 'admin')
    data.append('followers_id_list', Followers)
    data.append('task_tags', singleData?.tags);
    data.append('project_name', singleData?.related_to.project_name)
    data.append('customer_name', singleData?.related_to.customer_name)
    data.append('related_project_id', '12')
    data.append('assigner_id', singleData.assigner.id)
    data.append('task_name', singleData?.task_name)
    data.append('task_description', singleData?.task_description)
    data.append('start_date', singleData?.start_date)
    data.append('end_date', singleData?.end_date)
    data.append('priority', singleData?.priority)
    data.append('task_status', task_status || singleData?.status)
    data.append('repeat_every', singleData?.repeat_every)
    data.append('file_here', singleData?.file_upload)
    data.append('updated_task_id', singleData.id)


    fetch('https://pubapi.rubytech.xyz/task/update_task/', {
      method: 'POST',
      body: data
    })
      .then(response => response.json())
      .then((response) => {
        console.log('154', response)
        if (response.massage === "Data is Updated") {
          Swal.fire({
            title: 'success!',
            text: 'Task Updated Successfully',
            icon: 'success',
          })
          // navigate("/apps/crprojects/tasks")
        } else {
          Swal.fire({
            title: 'Failed!',
            text: 'Task Updated Failed',
            icon: 'error',
          })
        }

        // setTimeout(function () {
        //     window.location.reload();
        // }, 1)
      })

      .catch(error => {
        console.log(error);
      });
  }





  return (
    <>
      {
        layout === "opened" ? <CRProjects /> : ''
      }
      <div className='mt-2 p-2 mb-4'>
        <div className="kbbtnbox d-flex justify-content-between align-items-center w-100">
          <div className="d-flex w-100">
            <Link to="/apps/crprojects/tasks/new" style={{ textDecoration: "none" }}>
              <Button type="submit" className="lgnbtn fs-4 fw-bold align-items-center">
                <FeatherIcon icon="plus" className="me-1" style={{ width: '22px' }} /> <span className="fs-5">New Task</span>
              </Button>
            </Link>
            <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border">
              <FeatherIcon icon="layers" className="me-1" style={{ width: '22px' }} /> <span className="fs-5"></span>
            </Button>
          </div>

          <div className="d-flex justify-content-end align-items-center w-100">
            <Link to="/apps/admin/knowledge/newarticle" style={{ textDecoration: "none" }}>
              <Button type="submit" className="lgnbtn fw-bold align-items-center w-100">
                Task Overview
              </Button>
            </Link>
            <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border">
              <FeatherIcon icon="filter" className="me-1" style={{ width: '22px' }} />
            </Button>
          </div>
        </div>

        <div className="bg-white mt-3">
          <Button style={{ cursor: 'none' }} className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0">
            All Task list
          </Button>
          <div className="p-3">
            <h4 className="fw-bold text-dark mb-2"><FeatherIcon icon="clipboard" style={{ width: '22px' }} /> Task Summary</h4>
            <div className="d-flex mb-3">
              <Row className='gy-2 w-100'>
                <Col>
                  <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                    <span className="fw-bold text-dark">{filteredNotStartedsData.length}</span>  <span className="fw-bold text-dark">Not Started</span>
                  </Button>
                </Col>
                <Col >
                  <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                    <span className="fw-bold text-success" >{filteredProgressData.length}</span>
                    <span className="fw-bold text-success">In Progress</span>
                  </Button>
                </Col>
                <Col >
                  <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                    <span className="fw-bold text-warning">{filteredOnHoldData.length}</span>  <span className="fw-bold text-warning">On Hold</span>
                  </Button>
                </Col>
                <Col >
                  <Button type="submit" variant="light" className="fw-bold align-items-center border-end border-5 text-dark fw-bold">
                    <span className="fw-bold text-secondary">{filteredCacelledData.length}</span>  <span className="fw-bold text-secondary">Cancel</span>
                  </Button>
                </Col>
                <Col >
                  <Button type="submit" variant="light" className="fw-bold align-items-center">
                    <span className="fw-bold text-success">{filteredFinishedData.length}</span>  <span className="fw-bold text-success">Finished</span>
                  </Button>
                </Col>
              </Row>
              {/* <Button type="submit" variant="light" className="fw-bold align-items-start justify-content-start border-end border-5 text-dark fw-bold">
                <span className="fw-bold text-dark">0</span>  <span className="fw-bold text-dark">Not Started</span> <br />
              </Button>
              <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                <span className="fw-bold text-success">0</span>  <span className="fw-bold text-success">In Progress</span> <br />
              </Button>
              <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                <span className="fw-bold text-warning">0</span>  <span className="fw-bold text-warning">On Hold</span>  <br />
              </Button>
              <Button type="submit" variant="light" className="fw-bold align-items-center ms-2 border-end border-5 text-dark fw-bold">
                <span className="fw-bold text-secondary">0</span>  <span className="fw-bold text-secondary">Cancel</span>  <br />
              </Button>
              <Button type="submit" variant="light" className="fw-bold align-items-center ms-2">
                <span className="fw-bold text-success">0</span>  <span className="fw-bold text-success">Finished</span>  <br />
              </Button> */}
            </div>
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
                  <Form.Select className="fw-bold text-secondary">
                    <option>Export</option>
                    <option>CSV</option>
                    <option>Excel</option>
                    <option>PDF</option>
                    <option>Print</option>
                  </Form.Select>
                  <Form.Select className="fw-bold text-secondary">
                    <option>Bult Actions</option>
                    <option>CSV</option>
                    <option>Excel</option>
                    <option>PDF</option>
                    <option>Print</option>
                  </Form.Select>
                  <Button variant="light" className="d-flex justify-content-center align-items-center border">
                    <FeatherIcon icon="refresh-ccw" className="me-1" style={{ width: '12px' }} />
                  </Button>
                </div>
              </div>

              <div className="staffSearch d-flex justify-content-start w-100">
                <div className="ms-auto d-flex justify-content-start">
                  <Button variant="light d-flex justify-content-center align-items-center">
                    <FeatherIcon icon="search" style={{ width: '12px' }} />
                  </Button>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      // className="me-2"
                      aria-label="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Form>
                </div>
              </div>
            </div>
            <div className="stafftable mt-2">
              <div className="table-responsive">
                <Table >
                  <thead>
                    <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                      {/* <th className="fw-bolder border-end text-muted">
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" />
                        </Form.Group>
                      </th> */}
                      <th className="fw-bolder border-end text-muted">S/N</th>
                      <th className="fw-bolder border-end text-muted">Project Name</th>
                      <th className="fw-bolder border-end text-muted">Task Name</th>
                      <th className="fw-bolder border-end text-muted">Customer Name</th>
                      <th className="fw-bolder border-end text-muted">Hourly Rate</th>
                      <th className="fw-bolder border-end text-muted">Priority</th>
                      <th className="fw-bolder border-end text-muted">Status</th>
                      <th className="fw-bolder text-center text-muted">Start Date</th>
                      <th className="fw-bolder text-center text-muted">End Date</th>
                      <th className="fw-bolder text-center text-muted">Assigned By</th>
                      <th className="fw-bolder text-center text-muted">Assigned to</th>
                      <th className="fw-bolder text-center text-muted">Tags</th>
                      <th className="fw-bolder text-center text-muted">Repeat</th>
                      <th className="fw-bolder text-center text-muted">Descriptions</th>
                      <th className="fw-bolder text-center text-muted">Actions</th>
                    </tr>
                  </thead>
                  {
                    filteredData.map((item: {
                      assigner: any,
                      start_date: any,
                      end_date: any,
                      followers: [],
                      file_upload: any,
                      hourly_rate: any,
                      priority: any,
                      status: any,
                      id: any,
                      related_to: any,
                      repeat_every: any,
                      tags: any,
                      task_description: any,
                      task_name: any,
                    }, index: number) => (
                      <tbody key={index}>
                        <tr>
                          {/* <td>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" />
                            </Form.Group>
                          </td> */}
                          <td>{index + 1}</td>
                          <td className="text-center">
                            {item.related_to.project_name}
                          </td>
                          <td>{item.task_name}</td>
                          <td> {item.related_to.customer_name}</td>
                          <td>{item.hourly_rate}TK</td>
                          <td>{item.priority}</td>
                          <td>{item.status}</td>
                          <td className="text-center">{item.start_date.slice(0, 10)}</td>
                          <td className="text-center w-100">{item.end_date.slice(0, 10)}</td>
                          <td className="text-center w-100">{item.assigner.User_Name}</td>
                          <td className="text-center">{
                            item.followers?.map((i: { User_Name: string }, index: number) => (
                              <span key={index} className="text-dark">{i.User_Name},</span>
                            ))
                          }</td>
                          <td className="text-center">{item.tags}</td>
                          <td className="text-center">{item.repeat_every}</td>

                          <td className="text-center">{item.task_description.slice(0, 25)}</td>
                          <td>
                            <div className="d-flex">
                              <Link to={`/apps/crprojects/tasks/update/${item.id}`}>
                                <Button variant="success d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                                  <i className="fa-solid fa-pen-to-square me-1"></i>  Edit
                                </Button>
                              </Link>
                              <Button variant="danger d-flex justify-content-center align-items-center ms-2"
                                onClick={() => handleDelete(item.id)}
                                style={{ height: '30px' }}
                              >
                                <i className="fa-solid fa-trash me-1"></i>  Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  }
                </Table>


              </div>
            </div>
            <div className="stafftable mt-3">
              <h4 className="fw-bold text-dark mb-2"><FeatherIcon icon="clipboard" style={{ width: '22px' }} /> Approve Task</h4>
              <div className="table-responsive">
                <Table className='w-100'>
                  <thead>
                    <tr style={{ backgroundColor: "#F3F4F7", fontWeight: 'bold' }}>
                      <th className="fw-bolder border-end text-muted">S/N</th>
                      <th className="fw-bolder border-end text-muted">Project Name</th>
                      <th className="fw-bolder border-end text-muted">Task Name</th>
                      <th className="fw-bolder border-end text-muted">Customer Name</th>
                      <th className="fw-bolder border-end text-muted">Hourly Rate</th>
                      <th className="fw-bolder border-end text-muted">Priority</th>
                      <th className="fw-bolder border-end text-muted">Task Status</th>
                      <th className="fw-bolder text-center text-muted">Start Date</th>
                      <th className="fw-bolder text-center text-muted">End Date</th>
                      <th className="fw-bolder text-center text-muted">Assigned By</th>
                      <th className="fw-bolder text-center text-muted">Assigned to</th>
                      <th className="fw-bolder text-center text-muted">Tags</th>
                      <th className="fw-bolder text-center text-muted">Repeat</th>
                      <th className="fw-bolder text-center text-muted">Descriptions</th>
                      <th className="fw-bolder text-center text-muted">Actions</th>
                    </tr>
                  </thead>
                  {
                    filteredOnHoldData.map((item: {
                      assigner: any,
                      start_date: any,
                      end_date: any,
                      followers: [],
                      file_upload: any,
                      hourly_rate: any,
                      priority: any,
                      status: any,
                      id: any,
                      related_to: any,
                      repeat_every: any,
                      tags: any,
                      task_description: any,
                      task_name: any,
                    }, index: number) => (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td className="text-center">
                            {item.related_to.project_name}
                          </td>
                          <td>{item.task_name}</td>
                          <td> {item.related_to.customer_name}</td>
                          <td>{item.hourly_rate}TK</td>
                          <td>{item.priority}</td>
                          <td>{item.status}</td>
                          {/* <td className="">
                            <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                              <div className="d-flex">
                                <Form.Select className="fw-bold" style={{ width: '150px' }} onChange={(e: any) => setTaskStatus(e.target.value)}>
                                  <option>{item.status}</option>
                                  <option>Not Started</option>
                                  <option>On Hold</option>
                                  <option>Cancelled</option>
                                  <option>In Progress</option>
                                  <option>Finished</option>
                                </Form.Select>
                              </div>
                            </Form.Group>
                          </td> */}
                          <td className="text-center">{item.start_date.slice(0, 10)}</td>
                          <td className="text-center w-100">{item.end_date.slice(0, 10)}</td>
                          <td className="text-center w-100">{item.assigner.User_Name}</td>
                          <td className="text-center">{
                            item.followers?.map((i: { User_Name: string }, index: number) => (
                              <span key={index} className="text-dark">{i.User_Name},</span>
                            ))
                          }</td>
                          <td className="text-center">{item.tags}</td>
                          <td className="text-center">{item.repeat_every}</td>

                          <td className="text-center">{item.task_description.slice(0, 25)}</td>
                          <td>
                            <div className="d-flex">
                              {
                                item.status.trim() === "On Hold" ? 
                                  <Button variant="success d-flex justify-content-center align-items-center"
                                    style={{ height: '30px' }} onClick={() => handleShow(item.id)}
                                  >
                                    <i className="fa-solid fa-check me-1"></i> Approve
                                  </Button>
                                   : 
                                   " "
                              }

                              <Button variant="danger d-flex justify-content-center align-items-center ms-2"
                                onClick={() => handleDelete(item.id)}
                                style={{ height: '30px' }}
                              >
                                <i className="fa-solid fa-trash me-1"></i>  Delete
                              </Button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    ))
                  }
                  {/* <tbody>
                    <tr>
                      <td>
                        <Form.Group controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" />
                        </Form.Group>
                      </td>
                      <td>1</td>
                      <td>css styles</td>
                      <td>css styles</td>
                      <td className="text-center">12/3/2023</td>
                      <td className="text-center">30/3/2023</td>
                      <td className="text-center">Jhony</td>
                      <td className="text-center">frontend</td>
                      <td className="text-center">20/4/2023</td>
                      <td className="text-center">High</td>
                      <td>
                        <div className="d-flex">
                          <Link to="/apps/crprojects/tasks/update">
                            <Button variant="success d-flex justify-content-center align-items-center" style={{ height: '30px' }}>

                              <i className="fa-solid fa-play me-1"></i>
                              Approve
                            </Button>
                          </Link>
                          <Button variant="danger d-flex justify-content-center align-items-center ms-2" style={{ height: '30px' }}>
                            <i className="fa-solid fa-trash me-1"></i>  Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody> */}
                </Table>
              </div>
            </div>



            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Approve This Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col md={12}>
                    <Form.Group className="mb-2 mt-2 w-100" controlId="formBasicPassword">
                      <Form.Label>
                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Task Name
                      </Form.Label>
                      <Form.Control type="text" defaultValue={singleData?.task_name} disabled className="bg-light fw-bold" />
                    </Form.Group>

                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-2 w-100" controlId="formBasicEmail">
                      <Form.Select className="fw-bold" onChange={(e: any) => setTaskStatus(e.target.value)}>
                        <option>{singleData?.status}</option>
                        <option>Not Started</option>
                        <option>On Hold</option>
                        <option>Cancelled</option>
                        <option>In Progress</option>
                        <option>Finished</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button className='lgnbtn' onClick={handleApproveTask}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

          </div>
        </div>
      </div>
    </>
  )
}

export default Task  