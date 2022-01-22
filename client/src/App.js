import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import FormPage from "./FormPage";
import HomePage from "./HomePage";
import TeacherLogin from "./TeacherLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student_register" element={<FormPage />} />
        <Route path="/teacher_login" element={<TeacherLogin />} />
      </Routes>
    </div>
  );
}

export default App;
