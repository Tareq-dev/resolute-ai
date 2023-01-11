import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import auth from "./../../firebase.auth";

const primary = red[500]; // #f44336
const white = red[50]; // #f44336
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/add-student");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", my: 15 }}>
      <Box>
        <Box
          sx={{
            bgcolor: primary,
            color: white,
            textAlign: "center",
            p: 2,
            textTransform: "uppercase",
            fontWeight: "bold",
            mb: 1,
            borderRadius: "5px",
          }}
        >
          Sign Up
        </Box>
        <Box>
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Enter Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box sx={{ pt: 2 }}>
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            sx={{ mx: "auto", mt: 2 }}
            onClick={() => createUserWithEmailAndPassword(email, password)}
          >
            Register
          </Button>
        </Box>
        {loading && <Typography>Loading...</Typography>}
        {error && (
          <Typography sx={{ color: "#f44336", mt: 1 }}>
            {error.message}
          </Typography>
        )}
        <Link to="/login">
          <Typography sx={{ color: "#3f51b5", mt: 1 }}>
            Already have an account ? Please Login
          </Typography>
        </Link>
        <Box>
          <Typography sx={{ textAlign: "center", mt: 1, color: "orangered" }}>
            Continue With Google
          </Typography>
          <GoogleLogin />
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
