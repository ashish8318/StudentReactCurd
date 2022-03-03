import React from 'react'
import { Paper, Avatar, Grid, TextField, Button, Container, FormControl, FormLabel, RadioGroup, Radio } from '@mui/material'
import UpdateIcon from '@mui/icons-material/Update';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
export default function Update() {
    const id=useParams()
    console.log(id)
    const [data, setData] = useState({
        Name: "---",
        Email: "----",
        Password: "1111",
        DOB:"2222-02-02",
        Gender:"Male",
        Address:"---------"
      });  
  const avatarstyle = { backgroundColor: "#34b690" }
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  return (
    <>
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} >
          <Grid align="center">
            <Avatar style={avatarstyle}><UpdateIcon /></Avatar>
            <h2>Update</h2>
          </Grid>
          <Grid component="form" onSubmit={handleSubmit}>
            <TextField id="outlined-basic1" label="Name" placeholder='Eneter Name' variant="outlined" fullWidth required sx={{ mt: 5 }} name="Name" value={data.Name} onChange={inputHandle}/>
            <TextField id="outlined-basic2" label="Email" placeholder='Eneter Email' variant="outlined" fullWidth required sx={{ mt: 2 }} name="Email" value={data.Email} onChange={inputHandle}/>
            <TextField id="outlined-basic3" label="Password" placeholder='Eneter Password' type="password" variant="outlined" fullWidth required sx={{ mt: 2 }} name="Password" value={data.Password} onChange={inputHandle} />
            <TextField
              id="date"
              label="Birthday"
              type="date"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              required
              sx={{ mt: 2 }}
              value={data.DOB}
              onChange={inputHandle}
              name="DOB"
            />
            <FormControl sx={{ mt: 2 }} >
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                value={data.Gender}
                name="Gender"
                onChange={inputHandle}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <TextField id="outlined-basic5" label="Address" placeholder='Eneter Address' type="text" multiline variant="outlined" fullWidth required sx={{ mt: 2 }} name="Address" value={data.Address} onChange={inputHandle}/>
            <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">Register</Button>
          </Grid>
        </Paper>
      </Container>
 
    </>
  );
}