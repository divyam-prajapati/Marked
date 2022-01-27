import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, CssBaseline, Button, Box } from "@mui/material";

const AttendancePage = () => {
  const navigate = useNavigate();

  const stopAttendanceSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
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
            onClick={stopAttendanceSession}
          >
            Stop Attendance Session
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AttendancePage;
