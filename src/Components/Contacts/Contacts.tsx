import Box from '@mui/joy/Box';
import Contact from './Contact/Contact.tsx';
import { IContact } from '../../types';
import React from 'react';

interface Props {
  contacts: IContact[];
}

const Contacts: React.FC<Props> = ({contacts}) => {
  return (
    <Box sx={{display: 'flex', marginTop: '40px', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '40px'}}>
      {contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact}/>
        );
      })}
    </Box>
  );
};

export default Contacts;