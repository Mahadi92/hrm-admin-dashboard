import React, { useContext, useState } from 'react';
import logo from '../../assets/images/publicitix.png';
import rtImg from '../../assets/images/auth-bg.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './LoginNew.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const LoginNew = () => {
    const { disspatch } = useContext(AuthContext)
    // console.log(disspatch)

    const [user_name, setUserName] = useState(" ")
    const [password, setUser_Password] = useState(" ")
    const [role, setRole] = useState(" ")
    const [res, setRes] = useState(" ")

    const navigate = useNavigate()

    // console.log('user_name',user_name)
    // console.log('password',password)
    // console.log(role)

    // const userRole: any = localStorage.getItem("role") ? JSON.parse(localStorage.getItem("role")!) : null
    // const userRole: any = JSON.parse( localStorage.getItem('role'))
    // console.log('user_role', userRole === 'Admin')


    const handleLogin = (e: any) => {

        e.preventDefault()
        localStorage.setItem("username", JSON.stringify(user_name) ?? null)
        localStorage.setItem("passwd", JSON.stringify(password) ?? null)

        // const localStorageUsR: any = localStorage.getItem("role") ? JSON.parse(localStorage.getItem("role")!) : null
        // const userR = localStorageUsR // "Admin"
        // const userRole = userR.trim() === "Admin" 
        // console.log('userRole',userR)




        const data = new FormData()
        data.append('Process', 'see_one')
        // data.append('user_name', 'admin')
        // data.append('Process', 'admin')
        data.append('user_name', user_name)
        data.append('password', password)

        fetch('https://pubapi.rubytech.xyz/user_info/find_user/', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then((response) => {
                console.log('158', response)
                setRes(response);
                localStorage.setItem("role", JSON.stringify(response.User_Roll) ?? "not")
                if (response.massage === 'NOT VALID') {
                    Swal.fire({
                        title: 'Failed!',
                        text: 'Login Failed',
                        icon: 'error',
                    })
                } else {
                    navigate("/");
                    disspatch({ type: "LOGIN_SUCCESS", payload: response });
                    Swal.fire({
                        title: "Success!",
                        text: "Login Successful",
                        icon: "success",
                    });
                    setTimeout(function () {
                        window.location.reload();
                    }, 500)
                }



                // if (userRole === true) {
                //     navigate("/");
                //     disspatch({ type: "LOGIN_SUCCESS", payload: response });
                //     Swal.fire({
                //         title: "Success!",
                //         text: "Login Successful",
                //         icon: "success",
                //     });
                // } else {
                //     Swal.fire({
                //         title: "Failed!",
                //         text: "Login Failed",
                //         icon: "error",
                //     });
                // }

                // disspatch({ type: "LOGIN_SUCCESS", payload: response });
                // localStorage.setItem("role", JSON.stringify(response.User_Roll) ?? null)
                // response && Swal.fire({
                //     title: 'success!',
                //     text: 'Login Successfull',
                //     icon: 'success',
                // })
                // navigate("/")
                // setTimeout(function () {
                //     navigate("/apps/crprojects/projects")
                //     window.location.reload();
                // }, 1)
            })

            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div>
            <div className="mt-5 pt-2 d-flex justify-content-center align-items-center ">
                <div className="p-4 bg-white w-75 h-50">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="w-100 h-100">
                                <div className="w-100 d-flex justify-content-center align-items-center">
                                    <img src={logo} alt="" className="logo" style={{ height: "75px", objectFit: "cover" }} />
                                </div>
                                <div className=" d-flex justify-content-center align-items-center mt-2">
                                    <Form>
                                        <h5 className="fw-bold">Welcome back!</h5>
                                        <p>Enter your username and password to access.</p>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <i className="fa-solid fa-envelope"></i>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    placeholder="Username"
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => setUserName(e.target.value)}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <InputGroup className="mb-2">
                                                <InputGroup.Text id="basic-addon1">
                                                    <i className="fa-solid fa-lock"></i>
                                                </InputGroup.Text>
                                                <Form.Control
                                                    placeholder="Password"
                                                    aria-label="Username"
                                                    type='password'
                                                    aria-describedby="basic-addon1"
                                                    onChange={(e) => setUser_Password(e.target.value)}
                                                    required
                                                />
                                            </InputGroup>
                                        </Form.Group>
                                        <Button className="w-100 fw-bold lgnbtn" type="submit" onClick={handleLogin}
                                        >
                                            Login
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="rtimg" >

                                <div className="overlay ">
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <h2 className="fw-bold text-white">I simply love it!</h2>
                                        <p className="text-white fs-4 p-2 fw-bold">"A Express way of marketing!"</p>
                                        {/* <h5 className="fw-bold text-white">- CEO</h5> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginNew