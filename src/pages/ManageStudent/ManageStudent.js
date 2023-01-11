import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { FiEye } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import View from "../../components/View";
import Edit from "../../components/Edit";
import Clock from "../../components/Clock";
import swal from "sweetalert";

function ManageStudent() {
  const [view, setView] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [studentData, setStudentData] = React.useState([]);
  const [studentId, setStudentId] = React.useState("");

  React.useEffect(() => {
    fetch("https://resolute-ai.onrender.com/students")
      .then((res) => res.json())
      .then((data) => {
        setStudentData(data);
      });
  }, [open1, setOpen1]);

  // Open view modal
  const handleOpen = (stu) => {
    setView(stu);
    setOpen(true);
  };

  //Open Edit modal
  const handleOpenEdit = (stu) => {
    setStudentId(stu._id);
    setView(stu);
    setOpen1(true);
  };

  // Delete student data
  const handleDelete = (student) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover it!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
        fetch(`https://resolute-ai.onrender.com/students/${student._id}`, {
          method: "DELETE",
        }).then((data) => {
          if (data) {
            const filterData = studentData.filter(
              (stu) => stu._id !== student._id
            );
            setStudentData(filterData);
          }
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  //Close modal
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);

  //Table style

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F33823",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#FFF6F5",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600 }} variant="h5">
          Manage Student
        </Typography>
        <Typography variant="h5">
          <Clock />
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Class</StyledTableCell>
              <StyledTableCell align="left">Roll No</StyledTableCell>
              <StyledTableCell style={{ paddingRight: "38px" }} align="center">
                View/Edit/Delete
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentData.map((student) => (
              <StyledTableRow key={student._id}>
                <StyledTableCell component="th" scope="row">
                  {student.firstName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {student.className}
                </StyledTableCell>
                <StyledTableCell align="left">{student.roll}</StyledTableCell>
                <StyledTableCell align="center">
                  <FiEye
                    onClick={() => handleOpen(student)}
                    size={20}
                    style={{ paddingRight: "22px", color: "#F33823" }}
                  />
                  <View view={view} open={open} handleClose={handleClose} />
                  <BiEditAlt
                    onClick={() => handleOpenEdit(student)}
                    size={20}
                    style={{ paddingRight: "22px", color: "#F33823" }}
                  />
                  <Edit
                    view={view}
                    open1={open1}
                    handleClose1={handleClose1}
                    studentId={studentId}
                  />
                  <RiDeleteBin6Line
                    onClick={() => handleDelete(student)}
                    size={20}
                    style={{ paddingRight: "22px", color: "#F33823" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ManageStudent;
