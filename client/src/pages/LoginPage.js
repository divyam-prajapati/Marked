import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const TeacherLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formIsValid = email && password;

  const submitData = async () => {
    axios
      .post(
        "http://localhost:5000/login/",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        if (res.data.role === "admin") {
          navigate("/admin");
        } else if (res.data.role === "teacher") {
          navigate("/teacher");
        }
      })
      .catch((err) => alert(err));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitData();
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
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
          <Typography component="h1" variant="h4">
            Login
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={submitHandler}>
            <TextField
              margin="normal"
              required
              onChange={emailChangeHandler}
              fullWidth
              id="email"
              label="Enter email"
              name="email"
              autoComplete="email"
              autoFocus
              variant="filled"
              type="email"
              value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={passwordChangeHandler}
              id="password"
              label="Enter password"
              name="password"
              autoComplete="password"
              autoFocus
              variant="filled"
              type="password"
              value={password}
            />
            <Button
              type="submit"
              fullWidth
              disabled={!formIsValid}
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TeacherLogin;
