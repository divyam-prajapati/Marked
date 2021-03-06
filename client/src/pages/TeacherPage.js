import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const TeacherPage = () => {
  const navigate = useNavigate();

  const studentRegisterHandler = () => {
    navigate("/student_register");
  };
  const teacherLoginHandler = () => {
    navigate("/teacher_login");
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
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
            onClick={teacherLoginHandler}
          >
            Start Attendance Session
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
            onClick={studentRegisterHandler}
          >
            Generate Defaulter List
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
            onClick={studentRegisterHandler}
          >
            Generate Attendance Sheet
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TeacherPage;
