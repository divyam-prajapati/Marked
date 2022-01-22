import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import TeacherPage from "./pages/TeacherPage";
import LoginPage from "./pages/LoginPage";
function App() {
  const role = localStorage.getItem("role");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/teacher"
          element={role === "teacher" ? <TeacherPage /> : <Navigate to="/" />}
        />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
