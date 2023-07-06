import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import HREmployee from "../HREmployee";

interface LayoutType {
  id: number;
  name: string;
  // add more properties as needed
}

const AssetsHR = () => {
  const layout: LayoutType | null | string = JSON.parse(
    localStorage.getItem("layout") || "null"
  );

  // form data fields...
  const [Asset_Name, setAsset_Name] = useState("");
  const [Asset_Code, setAsset_Code] = useState("");
  const [Asset_Serial_Number, setAsset_Serial_Number] = useState("");
  const [Asset_Type, setAsset_Type] = useState("");
  const [Is_Working, setIs_Working] = useState("");
  const [Date, setDate] = useState("");
  const [Assigned_Employee, setAssigned_Employee] = useState("");
  const [Note, setNote] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleShowEditClose = () => setShowEdit(false);
  const handleShowEditOpen = () => setShowEdit(true);

  const handleCreateAsset: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();

    // form data - construct here for sending via api POST request...
    const data = new FormData();
    data.append("admin_user_name", "admin");
    data.append("admin_password", "admin");
    data.append("Process", "create");
    data.append("name", Asset_Name);
    data.append("code", Asset_Code);
    data.append("serial", Asset_Serial_Number);
    data.append("is_working", Is_Working);
    data.append("type", Asset_Type);
    data.append("date", Date);
    data.append("note", Note);

    // just print at console
    // console.log("name", Asset_Name);
    // console.log("code", Asset_Code);
    // console.log("serial", Asset_Serial_Number);
    // console.log("is_working", Is_Working);
    // console.log("type", Asset_Type);
    // console.log("date", Date);
    // console.log("assigned_employee", Assigned_Employee);
    // console.log("note", Note);

    const url = "https://pubapi.rubytech.xyz/asset/asset/";
    const postData = { method: "POST", body: data };

    try {
      const res = await fetch(url, postData);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log({ error });
    }

    setShow(false); // close modal
  };

  return (
    <>
      {layout === "opened" ? <HREmployee /> : ""}
      <div className="mt-2 p-3">
        <div className="kbbtnbox d-flex justify-content-between align-items-center">
          <h3>Assets</h3>
          <Button
            type="submit"
            className="lgnbtn fw-bold align-items-center"
            onClick={handleShow}
          >
            <FeatherIcon
              icon="plus"
              className="me-1"
              style={{ width: "22px" }}
            />{" "}
            <span className="fs-5">Add Asset</span>
          </Button>
        </div>

        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Asset</Modal.Title>
            </Modal.Header>
            <hr />
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">
                      <FeatherIcon
                        icon="star"
                        className="me-1"
                        style={{ width: "10px", color: "red" }}
                      />{" "}
                      Asset Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setAsset_Name(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Asset Code</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setAsset_Code(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">
                      Asset Serial Number
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setAsset_Serial_Number(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Asset Type</Form.Label>
                    <Form.Select
                      className="fw-bold"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setAsset_Type(e.target.value)
                      }
                    >
                      <option>Not Selected</option>
                      <option>1</option>
                      <option>2</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Is Working</Form.Label>
                    <Form.Select
                      className="fw-bold"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setIs_Working(e.target.value)
                      }
                    >
                      <option>Not Selected</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Maintenance</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Date</Form.Label>
                    <Form.Control
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Assigned Employee</Form.Label>
                    <Form.Select
                      className="fw-bold"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setAssigned_Employee(e.target.value)
                      }
                    >
                      <option>Not Selected</option>
                      <option>Jhony Bairstow</option>
                      <option>Brandon </option>
                      <option>Taylors</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                className="lgnbtn"
                type="submit"
                onClick={handleCreateAsset}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        <>
          <Modal
            show={showEdit}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Asset</Modal.Title>
            </Modal.Header>
            <hr />
            <Modal.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">
                      <FeatherIcon
                        icon="star"
                        className="me-1"
                        style={{ width: "10px", color: "red" }}
                      />{" "}
                      Asset Name
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Asset Code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">
                      Asset Serial Number
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Asset Type</Form.Label>
                    <Form.Select className="fw-bold">
                      <option>Not Selected</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Is Working</Form.Label>
                    <Form.Select className="fw-bold">
                      <option>Not Selected</option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Maintenance</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Assigned Employee</Form.Label>
                    <Form.Select className="fw-bold">
                      <option>Not Selected</option>
                      <option>Jhony Bairstow</option>
                      <option>Brandon </option>
                      <option>Taylors</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" />
                  </Form.Group>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleShowEditClose}>
                Close
              </Button>
              <Button className="lgnbtn">Save</Button>
            </Modal.Footer>
          </Modal>
        </>
        <div className="mt-4 bg-white">
          <Button
            className="lgnbtn w-100 fs-4 fw-bold align-items-start rounded-0"
            style={{ cursor: "none" }}
          >
            Assets List
          </Button>
          <div className="p-2">
            <div className="stafftable mt-2">
              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr
                      style={{ backgroundColor: "#F3F4F7", fontWeight: "bold" }}
                    >
                      <th className="fw-bolder border-end text-secondary">
                        S/L
                      </th>
                      <th className="fw-bolder border-end text-secondary text-center">
                        Asset Name
                      </th>
                      <th className="fw-bolder border-end text-secondary text-center">
                        Asset Type
                      </th>
                      <th className="fw-bolder border-end text-secondary text-center">
                        Asset Serial Number
                      </th>
                      <th className="fw-bolder border-end text-secondary text-center">
                        Asset Code
                      </th>
                      <th className="fw-bolder border-end text-secondary text-center">
                        Employee
                      </th>
                      <th className="fw-bolder border-end text-secondary text-center">
                        Date
                      </th>
                      <th className="fw-bolder border-end text-secondary text-center">
                        Note
                      </th>
                      <th className="fw-bolder text-center text-secondary">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                      <td className="text-center">HR</td>
                      <td className="text-center">HR</td>
                      <td className="text-center">HR</td>
                      <td className="text-center">HR</td>
                      <td className="text-center">HR</td>
                      <td className="text-center">HR</td>
                      <td className="text-center">HR</td>
                      <td className="text-center d-flex justify-content-center align-items-center">
                        <div className="d-flex">
                          <Button
                            onClick={handleShowEditOpen}
                            variant="info"
                            size="sm"
                          >
                            <i className="fa-solid fa-pen-to-square me-1"></i>{" "}
                            Edit
                          </Button>
                          <Button variant="danger" className="ms-2" size="sm">
                            <i className="fa-solid fa-trash me-1"></i> Delete
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
    </>
  );
};

export default AssetsHR;
