import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import Faculty from "./pages/Faculty";
import Announcements from "./pages/Announcements";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route path="/students" element={<Students />}>
            <Route
              path="add"
              element={<AddStudent />}
            />
          </Route>

          <Route
            path="/students/:id"
            element={<StudentDetails />}
          />

          <Route
            path="/faculty"
            element={<Faculty />}
          />

          <Route
            path="/announcements"
            element={<Announcements />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;