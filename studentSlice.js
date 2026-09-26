import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 1,
      name: "Ahamed",
      email: "ahamed@gmail.com",
      phone: "9876543210",
      city: "Tiruppur",
      grade: "10",
      role: "Student",
      image: "",
    },
    {
      id: 2,
      name: "Rahman",
      email: "rahman@gmail.com",
      phone: "9876543211",
      city: "Coimbatore",
      grade: "9",
      role: "Student",
      image: "",
    },
    {
      id: 3,
      name: "Fathima",
      email: "fathima@gmail.com",
      phone: "9876543212",
      city: "Chennai",
      grade: "8",
      role: "Student",
      image: "",
    },
    {
      id: 4,
      name: "Abdullah",
      email: "abdullah@gmail.com",
      phone: "9876543213",
      city: "Erode",
      grade: "10",
      role: "Student",
      image: "",
    },
    {
      id: 5,
      name: "Ayesha",
      email: "ayesha@gmail.com",
      phone: "9876543214",
      city: "Salem",
      grade: "7",
      role: "Student",
      image: "",
    },
    {
      id: 6,
      name: "Ibrahim",
      email: "ibrahim@gmail.com",
      phone: "9876543215",
      city: "Madurai",
      grade: "9",
      role: "Student",
      image: "",
    },
  ],
};

const studentSlice = createSlice({
  name: "students",
  initialState,

  reducers: {
    addStudent: (state, action) => {
      state.students.push({
        ...action.payload,
        id: Date.now(),
      });
    },

    updateStudent: (state, action) => {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },

    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const {
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;