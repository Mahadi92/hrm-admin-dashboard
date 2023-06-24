import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Link } from "react-router-dom";
import { Button, Alert, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FeatherIcons from "feather-icons-react";

//actions
import { resetAuth, signupUser } from "../../redux/actions";

import { RootState, AppDispatch } from "../../redux/store";

// components
import { VerticalForm, FormInput } from "../../components/";

import AuthLayout from "./AuthLayout";

// images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";
import logoRby from "../../assets/images/logo_ruby.png";

interface UserData {
  name: string;
  email: string;
  password: string;
}

/* bottom links */
const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <p className="text-muted">
          {t("Already have account?")}{" "}
          <Link to={"/auth/login"} className="text-primary fw-bold ms-1">
            {t("Login")}
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Register = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, userSignUp, error } = useSelector((state: RootState) => ({
    loading: state.Auth.loading,
    error: state.Auth.error,
    userSignUp: state.Auth.userSignUp,
  }));

  useEffect(() => {
    dispatch(resetAuth());
  }, [dispatch]);

  /*
   * form validation schema
   */
  const schemaResolver = yupResolver(
    yup.object().shape({
      name: yup.string().required(t("Please enter Name")),
      email: yup
        .string()
        .required("Please enter Email")
        .email("Please enter valid Email"),
      password: yup.string().required(t("Please enter Password")),
      checkboxsignup: yup.bool().oneOf([true]),
    })
  );

  /*
   * handle form submission
   */
  const onSubmit = (formData: UserData) => {
    dispatch(
      signupUser(formData["name"], formData["email"], formData["password"])
    );
  };

  return (
    <>
      {userSignUp ? <Navigate to={"/auth/confirm"}></Navigate> : null}

      <AuthLayout bottomLinks={<BottomLink />}>
        <div className="auth-logo mx-auto">
          <Link to="/" className="logo logo-dark text-center">
            <span className="logo-lg">
              <img src={logoRby} alt="" style={{width:'200px'}}/>
            </span>
          </Link>

          <Link to="/" className="logo logo-light text-center">
            <span className="logo-lg">
              <img src={logoRby} alt="" style={{width:'200px'}}/>
            </span>
          </Link>
        </div>

        <h6 className="h5 mb-0 mt-3">{t("Create your account")}</h6>
        <p className="text-muted mt-1 mb-4">
          {t("Create a free account and start using your dashboard")}
        </p>

        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData>
          onSubmit={onSubmit}
          resolver={schemaResolver}
          // defaultValues={{}}
          formClass="authentication-form"
        >
          <FormInput
            label={t("Name")}
            type="text"
            name="name"
            startIcon={<FeatherIcons icon={"user"} className="icon-dual" />}
            placeholder={t("Your full name")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Email Address")}
            type="email"
            name="email"
            startIcon={<FeatherIcons icon={"mail"} className="icon-dual" />}
            placeholder={t("hello@rubytech123.com")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("Password")}
            type="password"
            name="password"
            startIcon={<FeatherIcons icon={"lock"} className="icon-dual" />}
            placeholder={t("Enter your Password")}
            containerClass={"mb-3"}
          />
          <FormInput
            label={t("I accept Terms and Conditions")}
            type="checkbox"
            name="checkboxsignup"
            containerClass={"mb-3"}
            defaultChecked
          />

          <div className="mb-3 text-center d-grid">
            <Button type="submit" disabled={loading}>
              {t("Sign Up")}
            </Button>
          </div>
        </VerticalForm>
      </AuthLayout>
    </>
  );
};

export default Register;


// import React from 'react';
// import { useForm } from 'react-hook-form';

// interface RegistrationFormData {
//   username: string;
//   password: string;
//   profileImage: FileList;
// }

// const RegistrationForm: React.FC = () => {
//   const { register, handleSubmit, errors } = useForm<RegistrationFormData>();

//   const onSubmit = async (data: RegistrationFormData) => {
//     const { username, password, profileImage } = data;

//     // Send registration request to the server
//     const formData = new FormData();
//     formData.append('username', username);
//     formData.append('password', password);
//     formData.append('profileImage', profileImage[0]);

//     try {
//       const response = await api.post('/register', formData);
//       console.log(response.data); // Registration successful
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           ref={register({ required: true })}
//         />
//         {errors.username && <span>Username is required</span>}
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           ref={register({ required: true })}
//         />
//         {errors.password && <span>Password is required</span>}
//       </div>
//       <div>
//         <label htmlFor="profileImage">Profile Image</label>
//         <input
//           type="file"
//           id="profileImage"
//           name="profileImage"
//           accept=".jpg, .png, .jpeg"
//           ref={register({ required: true })}
//         />
//         {errors.profileImage && <span>Profile image is required</span>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegistrationForm;
