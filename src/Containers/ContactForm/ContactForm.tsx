import FormControl from '../../Components/FormControl/FormControl.tsx';
import { IFormContact } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { createContact, editContact, getOneContact } from '../../store/thunks/contactThunks.ts';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { resetContact, selectOneContact } from '../../store/slices/contactSlice.ts';

const ContactForm = () => {
  const contact = useAppSelector(selectOneContact);
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  const fetchOneContact = useCallback(async () => {
    if (id) {
      await dispatch(getOneContact(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (!id) {
      dispatch(resetContact());
    }
    void fetchOneContact();
  }, [dispatch, fetchOneContact, id]);

  const onSubmitContact = async (contact: IFormContact) => {
    if (id) {
      await dispatch(editContact({contactID: id, contact}));
      navigate('/');
      toast.success('Dish was edited successfully!');
    } else {
      await dispatch(createContact({...contact}));
      toast.success('This contact has been successfully added!');
    }
  };

  return (
    <div>
      {contact ? <FormControl isEdit onSubmitContact={onSubmitContact} contact={contact}/> : null}
      {!contact ? <FormControl onSubmitContact={onSubmitContact}/> : null}
    </div>
  );
};

export default ContactForm;