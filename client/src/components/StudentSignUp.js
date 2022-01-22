import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  FormHelperText,
  Box,
  TextField,
  FormControl,
  Button,
} from "@mui/material";

const StudentSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const formIsValid = email && rollNo && name && image;
  let base64Image;
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
    setFile(e.target.files[0]);
    console.log(file);
  };

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        // console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const studentSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(image);
    getBase64(file)
      .then((result) => {
        console.log(result);
        base64Image = result.split(";base64,").pop();
        console.log(base64Image);
        axios
          .post(
            "/student/student-register",
            {
              email: email,
              name: name,
              roll_no: rollNo,
              encoded_array: [base64Image],
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            alert("Form submitted successfully");
          })
          .catch((err) => alert(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
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
    </div>
  );
};

export default StudentSignUp;
