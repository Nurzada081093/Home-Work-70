import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { IFormControl } from '../../types';
import React, { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};

const FormControl = () => {
  const [newContact, setNewContact] = useState<IFormControl>(initialState);

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setNewContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newContact);
  };

  return (
    <form onSubmit={onSubmit} style={{
      border: '1px solid lightgrey',
      width: '70%',
      margin: '0 auto 70px',
      padding: '50px 0',
      borderRadius: '20px',
      backgroundColor: 'white',
      marginTop: '30px'
    }}>
      <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center', marginBottom: '20px'}}>
        {/*{postToEdit ? 'Edit ' : 'Add new '} */}
        Contact
      </Typography>
      <Grid container spacing={2} sx={{mx: 'auto', width: '80%'}}>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Name"
            name="name"
            variant="outlined"
            value={newContact.name}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Phone"
            name="phone"
            variant="outlined"
            value={newContact.phone}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            value={newContact.email}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            sx={{width: '100%'}}
            id="outlined-basic"
            label="Photo"
            name="photo"
            variant="outlined"
            value={newContact.photo}
            onChange={onChangeField}
          />
        </Grid>
        <Grid size={12}>
          <Box sx={{textAlign: 'center'}}>
            <img style={{width: '50%', borderRadius: '10px'}}
              src={newContact.photo}
              alt={newContact.name}
            />
          </Box>
        </Grid>
        <Grid size={12}>
          <Button sx={{width: '100%'}} variant="contained" type="submit">Save</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormControl;