import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const HomePage = () => {
  const navigate = useNavigate();

  const studentRegisterHandler = () => {
    navigate("/student_register");
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
            Student Sign Up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
