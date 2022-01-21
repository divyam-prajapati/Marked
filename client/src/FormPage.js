import React, { useState, useEffect } from "react";
import axios from "axios";
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

const FormPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState("");
  const [image, setImage] = useState(null);
  const classes = useStyles();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const IDChangeHandler = (e) => {
    setID(e.target.value);
  };
  const imageChangeHandler = (e) => {
    setImage(e.target.value);
  };
  const submitData = async () => {
    axios
      .post(
        "localhost:5000/register/",
        {
          email: email,
          name: name,
          ID: ID,
          image: image,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        alert("Form submitted successfully");
      })
      .catch(alert("There was some problem"));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitData();
  };

  useEffect(() => {
    submitData();
  }, []);

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
            Register
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={submitHandler}>
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
              onChange={IDChangeHandler}
              id="ID"
              label="ID"
              name="ID"
              autoComplete="ID"
              autoFocus
              variant="filled"
              type="text"
              value={ID}
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

export default FormPage;
