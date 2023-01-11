import * as React from "react";
import { Box, Modal, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


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


function View({ view, handleClose, open }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography style={{textAlign:'center'}} variant="h6">
          View Student Data
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Name
                </TableCell>
                <TableCell align="left">
                  {view.firstName} {view.MiddleName} {view.lastName}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Class
                </TableCell>
                <TableCell align="left">{view.className}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Division
                </TableCell>
                <TableCell align="left">{view.division}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Roll
                </TableCell>
                <TableCell align="left">{view.roll}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Address 1
                </TableCell>
                <TableCell align="left">{view.adress1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Address 2
                </TableCell>
                <TableCell align="left">{view.adress2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  City
                </TableCell>
                <TableCell align="left">{view.city}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Landmark
                </TableCell>
                <TableCell align="left">{view.landmark}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  pincode
                </TableCell>
                <TableCell align="left">{view.pincode}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}

export default View;
