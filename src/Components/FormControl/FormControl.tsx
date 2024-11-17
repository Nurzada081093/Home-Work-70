import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { IFormContact } from '../../types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import Box from '@mui/joy/Box';

interface Props {
  onSubmitContact: (contact: IFormContact) => void;
}

const initialState = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};

const FormControl: React.FC<Props> = ({onSubmitContact}) => {
  const [newContact, setNewContact] = useState<IFormContact>(initialState);

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

    if (newContact.name.trim().length === 0 || newContact.photo.trim().length === 0 || newContact.phone.trim().length === 0 || newContact.email.trim().length === 0) {
      toast.error('If you want to add a new contact, please fill out all fields!');
    } else {
      onSubmitContact({...newContact});
      setNewContact(initialState);
    }
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
          <Box sx={{border: '1px solid #bdbdbd', borderRadius: '5px', padding: '10px', width: '100%', display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{color: '#616161', fontSize: '17px', marginRight: '15%'}}>Photo preview</Typography>
            <img style={{width: '200px', borderRadius: '10px'}}
              src={newContact.photo}
              alt={newContact.name}
            />
          </Box>
        </Grid>
        <Grid size={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <Button sx={{width: '300px', margin: '10px'}} variant="contained" type="submit">Save</Button>
          <Button sx={{width: '300px', margin: '10px'}} variant="contained" type="button" to={'/'} component={NavLink}>Back to contacts</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormControl;