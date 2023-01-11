import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import auth from "../firebase.auth";

function GoogleLogin() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/add-student");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button onClick={() => signInWithGoogle()}>
        <FcGoogle size={34} />
      </Button>
    </Box>
  );
}

export default GoogleLogin;
