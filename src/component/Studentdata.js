import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import ChangeCircleRoundedIcon from '@mui/icons-material/ChangeCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const rows = [
  {"Name":"ashish","Email":"ashishtadavupc@gmail.com","Password":1234,"Gender":"male","Home":"varanasi, India, U.P."},
  {"Name":"ashish","Email":"ashishtadavupc@gmail.com","Password":1234,"Gender":"male","Home":"varanasi"},
  {"Name":"ashish","Email":"ashishtadavupc@gmail.com","Password":1234,"Gender":"male","Home":"varanasi"}
];

export default function Studentdata() {
  
function DeleteStudent(e)
{

 let result=window.confirm("Are you sure to delete student record")
 if(result){
  const id=e.target.getAttribute("id")
   console.log(id)
 }
 else{
   console.log("No")
 }
}
  return (
    <Grid container  sx={{mt:2}}>
  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Email</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Home</TableCell>
            <TableCell align="left">Update</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={1}>
              <TableCell align="center">{row.Email}</TableCell>
              <TableCell align="left">{row.Name}</TableCell>
              <TableCell align="left">{row.Password}</TableCell>
              <TableCell align="left">{row.Gender}</TableCell>
              <TableCell align="left">{row.Home}</TableCell>
              <TableCell align="left"><Button component={Link} to="/update/2"  variant='outlined'><ChangeCircleRoundedIcon sx={{m:1}}/> Update</Button></TableCell>
              <TableCell align="left"><Button variant="outlined" color='error' id="2" onClick={DeleteStudent}><DeleteRoundedIcon sx={{m:1, color:"red"}}/>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </Grid>
  );
}