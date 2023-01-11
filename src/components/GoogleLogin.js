import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import auth from "../firebase.auth";

function GoogleLogin() {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/add-student";

  if (user) {
    navigate(from, { replace: true });
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
