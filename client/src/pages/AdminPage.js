import React, { useState, useEffect } from "react";
import axios from "axios";
// const childProcess = require("child_process").spawn;
import { Grid, Typography, FormControl, FormHelperText } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TeacherSignUp from "../components/TeacherSignUp";
import Box from "@mui/material/Box";
import StudentSignUp from "../components/StudentSignUp";

const AdminPage = () => {
  const [showStudentSignUp, setShowStudentSignUp] = useState(true);
  const showTeacherSignUpHandler = () => {
    setShowStudentSignUp(false);
  };
  const showStudentSignUpHandler = () => {
    setShowStudentSignUp(true);
  };
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            type="button"
            fullWidth
            disabled={showStudentSignUp}
            variant="contained"
            onClick={showStudentSignUpHandler}
            sx={{ mt: 1, mb: 2 }}
          >
            Student Sign Up
          </Button>
          <Button
            type="button"
            fullWidth
            disabled={!showStudentSignUp}
            onClick={showTeacherSignUpHandler}
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            Teacher Sign Up
          </Button>
          {showStudentSignUp && <StudentSignUp />}
          {!showStudentSignUp && <TeacherSignUp />}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminPage;
