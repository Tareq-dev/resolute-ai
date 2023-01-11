import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Grid,
  Input,
  TextField,
  Typography,
  InputLabel,
  Box,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import Clock from "../../components/Clock";

function AddStudent() {
  const [classname, setClassname] = useState("");
  const [division, setDivision] = useState("");
  const [pincodeValue, setPincodeValue] = useState("");
  const [rollValue, setRollValue] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://resolute-ai.onrender.com/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          toast.success("Add Complete!", {
            position: "top-center",
            autoClose: 1900,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    reset();
  };

  //text field with only 6 digit numeric input

  const handleChangePin = (event) => {
    if (event.target.value.length <= 6 && !isNaN(event.target.value)) {
      setPincodeValue(event.target.value);
    }
  };

  //text field with only 6 digit numeric input
  const handleChangeRoll = (event) => {
    if (event.target.value.length <= 2 && !isNaN(event.target.value)) {
      setRollValue(event.target.value);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600 }} variant="h5">
          Add Student
        </Typography>
        <Typography variant="h5">
          <Clock />
        </Typography>
      </Box>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4}>
          <TextField
            required
            {...register("firstName")}
            style={{ backgroundColor: "#fff" }}
            fullWidth
            label="First Name"
            id="fullWidth"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            {...register("MiddleName")}
            style={{ backgroundColor: "#fff" }}
            fullWidth
            label="Middle Name"
            id="fullWidth"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            {...register("lastName")}
            style={{ backgroundColor: "#fff" }}
            fullWidth
            label="Last Name"
            id="fullWidth"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl
            required
            style={{ width: "329px", backgroundColor: "#fff" }}
            sx={{ my: 1, minWidth: 120 }}
            size="small"
          >
            <InputLabel id="demo-select-small">Class Name</InputLabel>
            <Select
              {...register("className")}
              label="Class Name"
              id="fullWidth"
              value={classname}
              onChange={(e) => setClassname(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="I">I</MenuItem>
              <MenuItem value="II">II</MenuItem>
              <MenuItem value="III">III</MenuItem>
              <MenuItem value="IV">IV</MenuItem>
              <MenuItem value="V">V</MenuItem>
              <MenuItem value="VI">VI</MenuItem>
              <MenuItem value="VII">VII</MenuItem>
              <MenuItem value="VIII">VIII</MenuItem>
              <MenuItem value="IX">IX</MenuItem>
              <MenuItem value="X">X</MenuItem>
              <MenuItem value="XI">XI</MenuItem>
              <MenuItem value="XII">XII</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl
            required
            style={{ width: "329px", backgroundColor: "#fff" }}
            sx={{ my: 1, minWidth: 120 }}
            size="small"
          >
            <InputLabel id="demo-select-small">Select Division</InputLabel>
            <Select
              {...register("division")}
              label="Select Division"
              id="fullWidth"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="A">A</MenuItem>
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="E">E</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={4}>
          <TextField
            required
            {...register("roll")}
            style={{ backgroundColor: "#fff", marginTop: "8px" }}
            fullWidth
            label="Enter Roll No in Digits"
            id="fullWidth"
            size="small"
            type="number"
            value={rollValue}
            onChange={handleChangeRoll}
          />
        </Grid>
      </Grid>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ my: 4 }}>
        <Grid item xs={6}>
          <TextField
            required
            {...register("adress1")}
            style={{ backgroundColor: "#fff" }}
            fullWidth
            label="Address Line 1"
            id="fullWidth"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            {...register("adress2")}
            style={{ backgroundColor: "#fff" }}
            fullWidth
            label="Address Line 2"
            id="fullWidth"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            {...register("landmark")}
            sx={{ my: 1 }}
            style={{ backgroundColor: "#fff" }}
            fullWidth
            label="Landmark"
            id="fullWidth"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            {...register("city")}
            sx={{ my: 1 }}
            style={{ backgroundColor: "#fff" }}
            fullWidth
            label="City"
            id="fullWidth"
            size="small"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            {...register("pincode")}
            style={{ backgroundColor: "#fff", marginTop: "8px" }}
            fullWidth
            label="Pincode"
            id="fullWidth"
            size="small"
            value={pincodeValue}
            onChange={handleChangePin}
          />
        </Grid>
      </Grid>
      <Input
        disableUnderline={true}
        sx={{
          padding: "7px 0 7px 0px",
          backgroundColor: "#FF2108",
          color: "#fff",
          width: "380px",
          borderRadius: "8px",
        }}
        type="submit"
      >
        Add Student
      </Input>
    </form>
  );
}

export default AddStudent;
