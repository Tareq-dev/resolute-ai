import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import auth from "../../firebase.auth";

const primary = red[500]; // #f44336
const white = red[50]; // #f44336


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/add-student";

  if (user) {
    navigate(from, { replace: true });
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
          Login
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
        <Box sx={{ pt: 1 }}>
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
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            Login
          </Button>
        </Box>
        {loading && <Typography>Loading...</Typography>}
        {error && (
          <Typography sx={{ color: "#f44336", mt: 1 }}>
            {error.message}
          </Typography>
        )}
        <Link to="/register">
          <Typography sx={{ color: "#3f51b5", mt: 2 }}>
            Don't have account ? Please Sign up
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

export default Login;
