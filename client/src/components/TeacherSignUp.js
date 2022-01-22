import React, { useState, Fragment } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const TeacherForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [password, setPassword] = useState("");
  const formIsValid = email && name && password && subject;
  const submitData = async () => {
    axios
      .post(
        "/register",
        {
          email: email,
          name: name,
          subject: subject,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        alert("Form submitted successfully");
      })
      .catch((err) => alert(err));
  };

  const teacherSignUpHandler = (e) => {
    e.preventDefault();
    submitData();
  };
  return (
    <Fragment>
      <Typography component="h1" variant="h4">
        Teacher Sign Up
      </Typography>
      <Box
        component="form"
        sx={{ mt: 1 }}
        onSubmit={teacherSignUpHandler}
        method="POST"
      >
        <TextField
          margin="normal"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          variant="filled"
          type="text"
          value={name}
        />
        <TextField
          margin="normal"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          fullWidth
          id="email"
          label="Email"
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
          id="subject"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          label="Subject"
          name="subject"
          autoComplete="subject"
          autoFocus
          variant="filled"
          type="text"
          value={subject}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
          variant="filled"
          type="password"
          value={password}
        />
        {/* <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Open Webcam
            </Button> */}
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
    </Fragment>
  );
};

export default TeacherForm;
