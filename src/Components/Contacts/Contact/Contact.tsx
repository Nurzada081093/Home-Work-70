import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { IContact } from '../../../types';
import React, { useState } from 'react';
import ModalWindow from '../../ModalWindow/ModalWindow.tsx';
import { useAppDispatch } from '../../../app/hooks.ts';
import { deleteContact, getContacts } from '../../../store/thunks/contactThunks.ts';
import { toast } from 'react-toastify';

interface Props {
  contact: IContact;
}

const Contact: React.FC<Props> = ({contact}) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    setOpen(false);
  };

  const deleteTheContact = async (id: string) => {
    await dispatch(deleteContact(id));
    closeModal();
    await dispatch(getContacts());
    toast.success('This contact was successfully deleted!');
  };

  return (
    <>
      <ModalWindow showModal={open} contact={contact} closeModal={closeModal}  deleteTheContact={() => deleteTheContact(contact.id)}/>
      <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: '350px',
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
      onClick={() => setOpen(true)}
    >
      <AspectRatio ratio="1" sx={{ width: '120px', borderRadius: '50%'}}>
        <img
          style={{borderRadius: '50%'}}
          src={contact.photo}
          srcSet={contact.photo}
          loading="lazy"
          alt={contact.name}
        />
      </AspectRatio>
      <CardContent>
        <Typography sx={{fontSize: '18px'}} id="card-description" >
          <Typography><b>Name: </b>{contact.name}</Typography><br/>
          <Typography><b>Phone: </b>{contact.phone}</Typography>
        </Typography>
      </CardContent>
    </Card>
    </>

  );
};

export default Contact;