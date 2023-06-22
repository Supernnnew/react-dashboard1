import axios from "axios";
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dull-erin-cocoon-ring.cyclic.app/customers")
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      });
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Rangsit University
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1>RFID</h1>
      <h2>ตารางบันทึกการเข้าใช้งาน</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>IDCARD</TableCell>
              <TableCell>IDStudent</TableCell>
              <TableCell>ชื่อ</TableCell>
              <TableCell>ห้อง</TableCell>
              <TableCell>เวลา</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell component="th" scope="row">
                  {customer.id}
                </TableCell>
                <TableCell>{customer.uid_tag}</TableCell>
                <TableCell>{customer.id_student}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.action}</TableCell>
                <TableCell>{customer.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
