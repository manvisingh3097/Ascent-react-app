import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Endpoints from "../API/Endpoints";

const RegisterPage = () => {
  const [requestedResponse, SetRequestedResponse] = useState({
    textMessage: "",
    alertClass: "",
  });

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(Endpoints.REGISTER_URL, values)
      .then(
        (response) => {
          console.log(response);
          SetRequestedResponse({
            textMessage: response.data.meessage,
            alertClass: "alert alert-success",
          });
        },
        (error) => {
          console.log(error);
          SetRequestedResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    email: Yup.string()
      .required("Email name is required")
      .email("email must be a valid email"),
    mobile: Yup.string().required("Mobile is required"),
    password: Yup.string()
      .required("Password must be valid")
      .min(6, "Password must be at least 6 Characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div class={requestedResponse.alertClass} role="alert">
            {requestedResponse.textMessage}
          </div>
          <h2>Register</h2>
          <hr />
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstname" id="firstname"
                    className={formik.touched.firstName && formik.touched.firstName ? "form-control is-invalid" : "form-control"}
                    
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
