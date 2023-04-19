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
  const [products, setProducts] = useState([]);
  const [topproducts, setTopProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dull-erin-cocoon-ring.cyclic.app/customers")
      .then((res) => {
        console.log(res.data);
        setCustomers(res.data);
      });
    axios.get("https://dull-erin-cocoon-ring.cyclic.app/stocks").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
    axios
      .get("https://dull-erin-cocoon-ring.cyclic.app/top_products")
      .then((res) => {
        console.log(res.data);
        setTopProducts(res.data);
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
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1>6403019 Dashboard</h1>
      <h2>ตารางลูกค้า</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>ชื่อจริง</TableCell>
              <TableCell>นามสกุล</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Tel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell component="th" scope="row">
                  {customer.customer_id}
                </TableCell>
                <TableCell>{customer.firstname}</TableCell>
                <TableCell>{customer.lastname}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.address}</TableCell>
                <TableCell>{customer.tel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>ตารางสินค้า</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>IDสินค้า</TableCell>
              <TableCell>รุ่นคอม</TableCell>
              <TableCell>รูปแบบ</TableCell>
              <TableCell>ราคา</TableCell>
              <TableCell>สี</TableCell>
              <TableCell>ยี่ห้อ</TableCell>
              <TableCell>ขนาดจอ</TableCell>
              <TableCell>น้ำหนัก</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell component="th" scope="row">
                  {product.com_id}
                </TableCell>
                <TableCell>{product.com_name}</TableCell>
                <TableCell>{product.com_type}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.color}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.size}</TableCell>
                <TableCell>{product.weight}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <h2>ตารางสินค้าขายดี</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>IDสินค้า</TableCell>
              <TableCell>ชื่อสินค้า</TableCell>
              <TableCell>รูปแบบ</TableCell>
              <TableCell>ราคา</TableCell>
              <TableCell>จำนวน</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topproducts.map((topproduct) => (
              <TableRow key={topproduct.id}>
                <TableCell component="th" scope="row">
                  {topproduct.com_id}
                </TableCell>
                <TableCell>{topproduct.com_name}</TableCell>
                <TableCell>{topproduct.com_type}</TableCell>
                <TableCell>{topproduct.price}</TableCell>
                <TableCell>{topproduct.color}</TableCell>
                <TableCell>{topproduct.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
