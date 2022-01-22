import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./AdminPage";
import TeacherPage from "./TeacherPage";
import LoginPage from "./LoginPage";
function App() {
  const role = localStorage.getItem("role");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {role === "teacher" ? (
          <Route path="/teacher" element={<TeacherPage />} />
        ) : (
          <Navigate to="/" />
        )}
        {role === "admin" ? (
          <Route path="/admin" element={<AdminPage />} />
        ) : (
          <Navigate to="/" />
        )}
      </Routes>
    </div>
  );
}

export default App;
