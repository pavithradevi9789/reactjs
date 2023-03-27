import { useState, useEffect } from "react";
import "./App.css";


function App() {

  const [formValues, setFormValues] = useState({ firstname: "", lastname: "", rollno: "", department:"", email: "", password: "" , dob:"" , currentsemester: "", course:"", language:""});
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
    if (!values.rollno) {
      errors.rollno = "Rollno is required!";
    }
    if (!values.department) {
      errors.department = "Department is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.dob) {
      errors.dob = "DateOfBirth is required!";
    }
    if (!values.currentsemester) {
      errors.currentsemester = "Current Semester is required!";
    }
    if (!values.course) {
      errors.course = "Course is required!";
    }
    if (!values.language) {
      errors.language = "Language is required!";
    }

    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre></pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>REGISTRATION FORM</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <b><label>Firstname</label></b>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.firstname}</p>
          <div className="field">
            <b><label>Lastname</label></b>
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.lastname}</p>
          <div className="field">
            <b><label>Rollno</label></b>
            <input
              type="text"
              name="rollno"
              placeholder="Rollno"
              value={formValues.rollno}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.rollno}</p>
          <div className="field">
            <b><label>Department</label></b>
            <select
              name="department"
              value={formValues.department}
              onChange={handleChange}
            >
            <option value="">Select Department</option>
            <option value="CSBS">CSBS</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="AIML">AIML</option>
            <option value="AIDS">AIDS</option>
            </select>
          </div>
          <p>{formErrors.department}</p>
          <div className="field">
            <b><label>Email</label></b>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <b><label>Password</label></b>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <b><label>DateOfBirth</label></b>

            <input
              type="date"
              name="dob"
              placeholder="DateOfBirth"
              value={formValues.dob}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.dob}</p>
          <div className="field">
           <b><label>Current Semester</label></b>
            <select
              name="currentsemester"
              value={formValues.currentsemester}
              onChange={handleChange}
            >
            <option value="">Select Current Semester</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            </select>
          </div>
          <p>{formErrors.currentsemester}</p>
          <div className="field">
            <b><label>Course</label></b>
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formValues.course}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.course}</p>
          <div className="field">
            <b><label>Language</label></b>
            <input
              type="text"
              name="language"
              placeholder="Language"
              value={formValues.language}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.language}</p>
          <button className="fluid ui button blue">Submit</button>

        </div>
      </form>

    </div>


  );
}

export default App;