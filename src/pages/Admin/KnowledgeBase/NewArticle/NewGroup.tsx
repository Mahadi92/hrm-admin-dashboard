import React from 'react';
import './NewGroup.css';
import { Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";
import Form from 'react-bootstrap/Form';

interface ModalProps {
    onClose: () => void;
    show: boolean;
}

const NewGroup: React.FC<ModalProps> = ({ onClose, show }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="modal-groups-conten ">
                <div className="modal_box w-75 bg-light p-2 rounded shadow">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold text-dark">New Group</h4>
                        <Button type="submit" variant="light" className="fw-bold align-items-center" onClick={onClose}>
                            <FeatherIcon icon="x" className="me-1" style={{ width: '22px' }} />
                        </Button>
                    </div>
                    <Form.Group className="mb-2 mt-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Group Name
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Color
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Short Description
                        </Form.Label>
                        <Form.Control as="textarea" type="text" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Order
                        </Form.Label>
                        <Form.Control type="number" defaultValue={0} />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Disabled" />
                    </Form.Group>
                    <p className="text-muted">Note: All articles in this group will be hidden if disabled is checked</p>
                    <div className="align-items-center d-flex justify-content-end">
                        <Button type="submit" variant="primary" className="fw-bold">
                            save
                        </Button>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default NewGroup;
