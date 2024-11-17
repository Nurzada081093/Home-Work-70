import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import React from 'react';
import { ModalClose } from '@mui/joy';
import { IContact } from '../../types';
import { FaPhoneVolume } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

interface Props {
  showModal: boolean;
  contact: IContact;
  closeModal: React.MouseEventHandler;
  deleteTheContact: React.MouseEventHandler;
}

const ModalWindow: React.FC<Props> = ({showModal, contact, closeModal, deleteTheContact}) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal open={showModal} onClose={closeModal}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset',
            },
          })}
        >
          <ModalClose />
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box>
              <img style={{width: '130px', height: '130px', marginTop: '15px', borderRadius: '50%'}} src={contact.photo} alt={contact.name} />
            </Box>
            <Box>
              <Box sx={{margin: '10px 20px'}}>
                <Typography sx={{fontSize: '25px', fontWeight: '600'}}>{contact.name}</Typography>
                <Box sx={{display: 'flex', alignItems: 'center', margin: '5px  0'}}>
                  <FaPhoneVolume />
                  <Typography sx={{marginLeft: '10px'}} id="nested-modal-description" textColor="text.tertiary">{contact.phone}</Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <TfiEmail />
                  <Typography sx={{marginLeft: '10px'}} id="nested-modal-description" textColor="text.tertiary">{contact.email}</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: 1,
                  display: 'flex',
                  gap: 1,
                  flexDirection: { display: 'flex', marginLeft: '20px' },
                }}
              >
                <Button variant="solid" startDecorator={<GrEdit />} color="primary" sx={{width: '100px'}} onClick={() => navigate(`/contacts/${contact.id}/edit`)}>
                  Edit
                </Button>
                <Button
                  variant="solid"
                  color="danger"
                  startDecorator={<RiDeleteBin6Fill />}
                  sx={{width: '100px', marginLeft: '10px'}}
                  onClick={deleteTheContact}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default ModalWindow;