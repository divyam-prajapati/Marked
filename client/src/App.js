import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import FormPage from "./FormPage";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/student_register" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
