import * as React from "react";
import { useForm } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import {
  Box,
  Modal,
  Grid,
  Input,
  TextField,
  Typography,
  InputLabel,
} from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Edit({ view, handleClose1, open1, studentId }) {
  const [classname, setClassname] = React.useState("");
  const [division, setDivision] = React.useState("");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch(`https://resolute-ai.onrender.com/students/${studentId}`, {
      method: "PUT",
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
      });

    reset();
    handleClose1();
  };
  return (
    <Modal
      open={open1}
      onClose={handleClose1}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={{ fontWeight: 600 }} variant="h5">
            Edit Student info
          </Typography>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <TextField
                {...register("firstName")}
                style={{ backgroundColor: "#fff" }}
                fullWidth
                label="First Name"
                defaultValue={view.firstName}
                id="fullWidth"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("MiddleName")}
                style={{ backgroundColor: "#fff" }}
                fullWidth
                defaultValue={view.MiddleName}
                label="Middle Name"
                id="fullWidth"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ my: 1 }}
                {...register("lastName")}
                style={{ backgroundColor: "#fff" }}
                fullWidth
                defaultValue={view.lastName}
                label="Last Name"
                id="fullWidth"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl
                style={{ width: "185px", backgroundColor: "#fff" }}
                sx={{ my: 1, minWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-select-small">Class Name</InputLabel>
                <Select
                  {...register("className")}
                  label="Class Name"
                  id="fullWidth"
                  required
                  defaultValue={classname ?? ""}
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
            <Grid item xs={6}>
              <FormControl
                style={{ width: "185px", backgroundColor: "#fff" }}
                sx={{ my: 1, minWidth: 120 }}
                size="small"
              >
                <InputLabel id="demo-select-small">Select Division</InputLabel>
                <Select
                  {...register("division")}
                  label="Select Division"
                  id="fullWidth"
                  required
                  defaultValue={division ?? ""}
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

            <Grid item xs={6}>
              <TextField
                {...register("roll")}
                style={{ backgroundColor: "#fff", marginTop: "8px" }}
                fullWidth
                defaultValue={view.roll}
                label="Enter Roll No in Digits"
                id="fullWidth"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ my: 4 }}
          >
            <Grid item xs={6}>
              <TextField
                {...register("adress1")}
                style={{ backgroundColor: "#fff" }}
                fullWidth
                defaultValue={view.adress1}
                label="Address Line 1"
                id="fullWidth"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("adress2")}
                style={{ backgroundColor: "#fff" }}
                fullWidth
                defaultValue={view.adress2}
                label="Address Line 2"
                id="fullWidth"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("landmark")}
                sx={{ my: 1 }}
                defaultValue={view.landmark}
                style={{ backgroundColor: "#fff" }}
                fullWidth
                label="Landmark"
                id="fullWidth"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("city")}
                sx={{ my: 1 }}
                style={{ backgroundColor: "#fff" }}
                fullWidth
                defaultValue={view.city}
                label="City"
                id="fullWidth"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                {...register("pincode")}
                defaultValue={view.pincode}
                style={{ backgroundColor: "#fff", marginTop: "8px" }}
                fullWidth
                label="Pincode"
                id="fullWidth"
                size="small"
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
      </Box>
    </Modal>
  );
}

export default Edit;
