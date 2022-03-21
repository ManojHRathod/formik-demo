import React from "react";
import { useFormik } from "formik";
import Image from "next/image";

const Form = () => {
  const formik = useFormik({
    // the useFormik hook takes the three parameter 1) initialValues 2) validation 3) obsubmit
    initialValues: {
      name: "", // these are the form states, initially they are empty
      email: "", //whenever use write something in input field that will will store in this object
      channel: "",
    },
  });

  console.log("form data", formik.values.email); // the formik.values object always reflects the states of the form
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
            <form>
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
                    value={formik.values.name} // the value props has the updated value of each input field and store that value in values object
                  />
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
