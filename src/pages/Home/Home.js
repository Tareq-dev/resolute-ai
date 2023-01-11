import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { RiListCheck2 } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { RxPerson } from "react-icons/rx";
import auth from "../../firebase.auth";


function Home() {
  const user = useAuthState(auth);
  const email = user[0]?.email;

  let activeStyle = {
    backgroundColor: "red",
    color: "#ffff",
  };
  
  const logout = () => {
    signOut(auth);
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 8,
          py: 2,
          height: "48px",
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>LOGO</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "2px solid #eae6e5",
            px: 5,
            borderRadius: "5px",
          }}
        >
          <RxPerson size={20} style={{ paddingRight: "14px" }} />
          <Typography id="outlined-disabled" size="small" disabled>
            {email}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid
          style={{
            backgroundColor: "",
            height: "520px",
            paddingRight: "7px",
            marginTop: "35px",
          }}
          item
          xs={2}
        >
          <NavLink
            className="link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/add-student"
          >
            <MdOutlinePersonAddAlt size={24} style={{ paddingRight: "12px" }} />
            Add Student
          </NavLink>
          <NavLink
            className="link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/manage-student"
          >
            <RiListCheck2 size={24} style={{ paddingRight: "12px" }} />
            Manage Student
          </NavLink>
          <Box sx={{ paddingTop: "10px", width: "100%" }}>
            <Button onClick={logout} sx={{ color: "#000" }}>
              <RiLogoutBoxRLine size={24} style={{ paddingRight: "20px" }} />
              Logout
            </Button>
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
