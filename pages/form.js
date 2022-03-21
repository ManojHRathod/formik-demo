import React from "react";
import { useFormik } from "formik";
import Image from "next/image";

const Form = () => {
  const initialValues = {
    // will pass this object to useFormik hook as a parameter
    name: "manoj",
    email: "",
    channel: "",
  };

  // onSubmit function
  const onSubmit = (values) => {
    // The onSubmit get's called automatically when user submit the form
    console.log("for data", values);
  };

  // validation

  const validation = (values) => {
    // In the validation function three things important
    // 1) Error object:- ( validation function should return the error object)
    // 2) we should mention input field names 3) and should write the error message in string

    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.channel) {
      errors.channel = "Channel name is required";
    }

    return errors;
  };

  const formik = useFormik({
    // the useFormik hook takes the three parameter 1) initialValues 2) validation 3) obSubmit
    // we are going to use ES6 fiture here object Literal
    initialValues,
    onSubmit,
    validation,
  });

  // console.log("form data", formik.values); // the formik.values object always reflects the states of the form
  console.log("form errors", formik.errors); // the useFormik hooks provide errors object as it's provide the values object
  return (
    <>
      <div className="container">
        <div className="form-wrapper">
          <div className="left-grid">
            <div>
              <Image
                src="/images/planning-schedule.png"
                alt="planning-schedule"
                width={170}
                height={170}
              />
            </div>
          </div>
          <div className="right-grid">
            <span> YouTube Form </span>
            <form onSubmit={formik.handleSubmit}>
              {/* we have to mention onsubmit method here to submit data. */}
              <div className="form-container">
                <div className="fields">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="input-field"
                    onChange={formik.handleChange} // handleChange is a helper funtion the onchange event always keep track on input value whether it is changed or not and store updated value in values object
                    // value={formik.values.name} // the value props has the updated value of each input field and store that value in values object
                  />
                  {formik.errors.name ? <div>formik.errors.name </div> : null}
                </div>
                <div className="fields">
                  <label htmlFor="email">Email Id</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter the email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="input-field"
                  />
                  {formik.errors.email ? <div>formik.errors.email </div> : null}
                </div>
                <div className="fields">
                  <label htmlFor="channel">Channel Name</label>
                  <input
                    type="text"
                    id="channel"
                    name="channel"
                    placeholder="Enter the channel"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="input-field"
                  />
                  {formik.errors.channel ? (
                    <div>formik.errors.channel </div>
                  ) : null}
                </div>
                <div className="button">
                  <button type="submit"> Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
