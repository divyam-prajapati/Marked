import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import TeacherPage from "./pages/TeacherPage";
import AttendancePage from "./pages/AttendancePage";
import LoginPage from "./pages/LoginPage";
function App() {
  const role = localStorage.getItem("role");
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/teacher"
        element={(() => {
          if (role === "teacher") {
            return <TeacherPage />;
          } else {
            return <Navigate to="/" />;
          }
        })()}
      />
      <Route
        path="/admin"
        element={(() => {
          if (role === "admin") {
            return <AdminPage />;
          } else {
            return <Navigate to="/" />;
          }
        })()}
      />
      <Route
        path="/attendance-session"
        element={(() => {
          if (role === "teacher") {
            return <AttendancePage />;
          } else {
            return <Navigate to="/" />;
          }
        })()}
      />
    </Routes>
  );
}

export default App;
