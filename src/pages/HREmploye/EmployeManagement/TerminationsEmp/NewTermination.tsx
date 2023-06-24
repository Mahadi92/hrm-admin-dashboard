import React, { useState, useEffect } from 'react'
import FeatherIcon from "feather-icons-react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Form Editor
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// styles
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { VerticalForm } from '../../../../components';
import { emails } from '../../../apps/Email/data';
import { Link } from 'react-router-dom';
import HREmployee from '../../HREmployee';

interface LayoutType {
    id: number;
    name: string;
    // add more properties as needed
}


const NewTermination = () => {
    const [editorState, setEditorState] = useState<any>();
    const [totalUnreadEmails] = useState<number>(
        emails.filter((e: any) => e.is_read === false).length
    );

    // useEffect(() => {
    //     const html = `<h3>This is an Air-mode editable area.</h3>
    //           <ul> 
    //               <li>Select a text to reveal the toolbar.</li>
    //               <li>Edit rich document on-the-fly, so elastic!</li>
    //           </ul>
    //           <p>End of air-mode area</p>`;
    //     const contentBlock = htmlToDraft(html);
    //     if (contentBlock) {
    //         const contentState = ContentState.createFromBlockArray(
    //             contentBlock.contentBlocks
    //         );
    //         setEditorState(EditorState.createWithContent(contentState));
    //     }
    // }, []);



    /**
     * Handles the save
     * @param {*} event
     * @param {*} values
     */
    const handleEmailSave = (event: any, values: any) => {
        const body = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        console.log({ ...values, body });
    };

    /**
     * On editor body change
     */
    const onEditorStateChange = (editorStates: any) => {
        setEditorState(editorStates);
    };

    const layout: LayoutType | null | string = JSON.parse(localStorage.getItem("layout") || "null");
    
    return (
        <>
         {
        layout === "opened" ? <HREmployee/> : ''
      }
  
        <div className="mt-2 p-3 mb-4">
            <div className="d-flex justify-content-center align-items-center  flex-column">
                <div className="w-50 p-3 knbarticle_box">
                    <div className="d-flex justify-content-between align-items-center ">
                        <h4 className="fw-bold text-dark">Add New Termination</h4>
                        <Link to="/apps/hremploye/Termination" style={{ textDecoration: "none" }}>
                            <Button type="submit" variant="success" className="fw-bold align-items-center">
                                Go Back
                            </Button>
                        </Link>
                    </div>

                    <Form.Group className="mb-2 mt-2" controlId="formBasicPassword">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Employee Name
                        </Form.Label>
                        <div className="d-flex">
                            <Form.Select  className="fw-bold">
                                <option>Nothing Selected</option>
                                <option>Arif</option>
                            </Form.Select>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Termination Type
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Subject
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Termination Date
                        </Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Termination by
                        </Form.Label>
                        <div className="d-flex">
                            <Form.Select  className="fw-bold">
                                <option>Nothing Selected</option>
                                <option>CEO</option>
                            </Form.Select>
                            <Button type="submit" variant="light" className="fw-bold align-items-center" >
                                <FeatherIcon icon="plus" className="me-1" style={{ width: '17px' }} />
                            </Button>
                        </div>
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label>
                            <FeatherIcon icon="star" className="me-1" style={{ width: '10px', color: 'red', }} /> Description
                        </Form.Label>
                        <div className="inbox-rightbar">
                            <div>
                                <VerticalForm
                                    onSubmit={handleEmailSave}
                                >
                                    <div className="mb-3 card border-0">
                                        <Editor
                                            editorState={editorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName border border-1 border-soft-dark mb-3 card"
                                            editorClassName="editorClassName px-2 pt-0"
                                            editorStyle={{ minHeight: "200px" }}
                                            onEditorStateChange={onEditorStateChange}
                                        />
                                    </div>
                                    <div className="mb-3 pt-2">
                                        <div className="text-end">
                                            <Button type="submit" variant='success' className='text-white'>
                                                <span>Save</span>
                                            </Button>
                                        </div>
                                    </div>
                                </VerticalForm>

                            </div>
                        </div>
                    </Form.Group>

                </div>
            </div>
        </div>
        </>
    )
}

export default NewTermination  