import React, { useState, useEffect } from "react";
import axios from "axios";
const childProcess = require("child_process").spawn;
import { Grid, Typography, FormControl, FormHelperText } from "@mui/material";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const AdminPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [image, setImage] = useState(null);
  const classes = useStyles();

  const formIsValid = email && rollNo && name && image;

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const rollNoChangeHandler = (e) => {
    setRollNo(e.target.value);
  };
  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };
  const submitData = async () => {
    axios
      .post(
        "/register/",
        {
          email: email,
          name: name,
          roll_no: rollNo,
          image: image,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(image);
        alert("Form submitted successfully");
      })
      .catch((err) => alert(err));
  };
  const studentSubmitHandler = (e) => {
    e.preventDefault();
    submitData();
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
            Student Sign Up
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            Teacher Sign Up
          </Button>
          <Typography component="h1" variant="h4">
            Student Sign Up
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={studentSubmitHandler}>
            <TextField
              margin="normal"
              onChange={nameChangeHandler}
              required
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
              onChange={emailChangeHandler}
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
              onChange={rollNoChangeHandler}
              id="rollNo"
              label="Roll No."
              name="rollNo"
              autoComplete="rollNo"
              autoFocus
              variant="filled"
              type="text"
              value={rollNo}
            />
            <FormControl
              fullWidth
              sx={{
                marginTop: "0.75rem",
                marginBottom: "0.75rem",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Button variant="contained" component="label" type="button">
                Upload Image
                <input
                  type="file"
                  name="file"
                  id="imageUpload"
                  required
                  hidden
                  onChange={imageChangeHandler}
                />
              </Button>
              <FormHelperText required error={!image} sx={{ marginLeft: 0 }}>
                {image ? image : "Please upload an image"}
              </FormHelperText>
            </FormControl>
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
          <Typography component="h1" variant="h4">
            Teacher Sign Up
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
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
              label="Subject"
              name="subject"
              autoComplete="subject"
              autoFocus
              variant="filled"
              type="text"
              value={rollNo}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="subject"
              autoComplete="password"
              autoFocus
              variant="filled"
              type="password"
              value={rollNo}
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminPage;
