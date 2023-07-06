import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FeatherIcon from "feather-icons-react";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./UsersAllStyles.css";

const AddNewRoles = () => {
  const navigate = useNavigate();
  const [res, setRes] = useState();
  const [User_Roll, setUser_Roll] = useState("");
  const [User_Name, setUser_Name] = useState("");
  const [User_Password, setUser_Password] = useState("");
  const [User_Email, setUser_Email] = useState("");
  const [User_Phone, setUser_Phone] = useState("");

  console.log("User_Roll", User_Roll);
  console.log("User_Name", User_Name);
  console.log("User_Password", User_Password);
  console.log("User_Email", User_Email);
  console.log("User_Phone", User_Phone);

  console.log(res);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    const data = new FormData();
    data.append("Process", "create");
    data.append("admin_user_name", "admin");
    data.append("admin_password", "admin");
    data.append("User_Roll", User_Roll);
    data.append("User_Name", User_Name);
    data.append("User_Password", User_Password);
    data.append("User_Email", User_Email);
    data.append("User_Phone", User_Phone);

    fetch("https://pubapi.rubytech.xyz/user_info/create_user/", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("158", response);
        setRes(response);
        response &&
          Swal.fire({
            title: "success!",
            text: "User Created Successfully",
            icon: "success",
          });
        setTimeout(function () {
          navigate("/apps/admin/setup");
          // window.location.reload();
        }, 1);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-4 mb-5">
      <div className="as_container d-flex justify-content-center aligm-items-center h-100">
        <div className="w-100" style={{ backgroundColor: "#fff" }}>
          <Button
            style={{ cursor: "none" }}
            className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0"
          >
            Add New Staff
          </Button>
          <div className="p-3">
            <Tabs
              defaultActiveKey="home"
              transition={false}
              id="noanim-tab-example"
              className="mb-2 fw-bold border-bottom border-2"
            >
              <Tab eventKey="home" title="Home">
                <Form>
                  {/* <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Not Staff Member" />
                                </Form.Group>
                                <Form.Group controlId="formFileSm" className="mb-2">
                                    <Form.Label>Profile Image</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group> */}
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                          <FeatherIcon
                            icon="star"
                            className="me-1"
                            style={{ width: "10px", color: "red" }}
                          />{" "}
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setUser_Name(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                          <FeatherIcon
                            icon="star"
                            className="me-1"
                            style={{ width: "10px", color: "red" }}
                          />{" "}
                          Email
                        </Form.Label>
                        <Form.Control
                          type="email"
                          onChange={(e) => setUser_Email(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setUser_Phone(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group
                        className="mb-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>
                          <FeatherIcon
                            icon="star"
                            className="me-1"
                            style={{ width: "10px", color: "red" }}
                          />{" "}
                          Password
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => setUser_Password(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Last Name
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group> */}

                  {/* <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>
                                        <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Houly Rate
                                    </Form.Label>
                                    <div className="d-flex">
                                        <Form.Control type="number" defaultValue={0} />
                                        <Button variant="light" style={{ height: "40px" }} className="d-flex justify-content-center align-items-center border">
                                            <FeatherIcon icon="dollar-sign" className="me-1" style={{ width: '16px' }} />
                                        </Button>
                                    </div>
                                </Form.Group> */}

                  {/* <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>
                                        <i className="fa-brands fa-facebook-f"></i> Facebook
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>
                                        <i className="fa-brands fa-linkedin-in"></i> Linkedin
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>
                                        <i className="fa-brands fa-skype"></i> Skype
                                    </Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>
                                        Default Language
                                    </Form.Label>
                                    <Form.Select className="fw-bold">
                                        <option>Syestem Default</option>
                                        <option>English</option>
                                        <option>Arabic</option>
                                        <option>Bangla</option>
                                        <option>Hindi</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>
                                        <i className="fa-solid fa-signature"></i> Email Signature
                                    </Form.Label>
                                    <Form.Control as="textarea" type="text" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicPassword">
                                    <Form.Label>
                                        Direction
                                    </Form.Label>
                                    <Form.Select className="fw-bold">
                                        <option>Syestem Default</option>
                                        <option>LTR</option>
                                        <option>RTL</option>
                                    </Form.Select>
                                </Form.Group> */}
                  <hr />
                  {/* <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Administrator" />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Send welcome email" />
                                </Form.Group> */}

                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      type="submit"
                      className="lgnbtn fw-bold"
                      onClick={handleSubmit}
                    >
                      Save
                    </Button>
                    <Link
                      to="/apps/admin/setup"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        type="submit"
                        className="lgnbtn fw-bold align-items-center"
                      >
                        <span>Go Back</span>
                      </Button>
                    </Link>
                  </div>
                </Form>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Role</Form.Label>
                  <Form.Select
                    className="fw-bold"
                    onChange={(e: any) => setUser_Roll(e.target.value)}
                  >
                    <option>Not Selected</option>
                    <option>Employee</option>
                    <option>Manager</option>
                    <option>Admin</option>
                    <option>Accountant</option>
                  </Form.Select>
                </Form.Group>
                <hr />
                {/* <h6 className='fw-bold'>Permission</h6>
                            <div className="staffPermisuu">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Capabilities</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Bulk PDF Export</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Contracts</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Create" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Delete" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Credit Notes</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Create" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Delete" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Customers</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Create" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Delete" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Email Templates</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Expenses</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Create" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Delete" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Invoices</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Own)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Create" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Delete" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Items</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Create" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Delete" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Items</td>
                                            <td>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="View(Global)" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Create" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Edit" />
                                                </Form.Group>
                                                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Delete" />
                                                </Form.Group>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div> */}
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewRoles;
