import { useReducer, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addStudent } from "../redux/studentSlice";

const initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  grade: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function AddStudent() {
  const [form, dispatchForm] = useReducer(
    reducer,
    initialState
  );

  const [error, setError] = useState("");
  const [image, setImage] = useState("");

  const fileRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    dispatchForm({
      type: "CHANGE",
      field: event.target.name,
      value: event.target.value,
    });
  };

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.city ||
      !form.grade
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError("Phone number must contain 10 digits.");
      return;
    }

    dispatch(
      addStudent({
        ...form,
        role: "Student",
        image,
      })
    );

    dispatchForm({ type: "RESET" });

    navigate("/students");
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <p className="small-title">STUDENT MANAGEMENT</p>
        <h2>Add New Student</h2>
        <p>Enter the student details below.</p>
      </div>

      {error && <div className="form-error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone"
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>

          <div className="form-group">
            <label>Grade</label>

            <select
              name="grade"
              value={form.grade}
              onChange={handleChange}
            >
              <option value="">Select Grade</option>
              <option value="6">6th Grade</option>
              <option value="7">7th Grade</option>
              <option value="8">8th Grade</option>
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade</option>
            </select>
          </div>
        </div>

        <input
          type="file"
          ref={fileRef}
          onChange={handleImage}
          hidden
          accept="image/*"
        />

        <div className="upload-section">
          {image && (
            <img
              src={image}
              alt="Preview"
              className="image-preview"
            />
          )}

          <button
            type="button"
            className="secondary-btn"
            onClick={() => fileRef.current.click()}
          >
            Upload Student Image
          </button>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/students")}
          >
            Cancel
          </button>

          <button type="submit" className="primary-btn">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;