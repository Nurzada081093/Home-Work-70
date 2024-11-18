import FormControl from '../../Components/FormControl/FormControl.tsx';
import { IFormContact } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { createContact, editContact, getOneContact } from '../../store/thunks/contactThunks.ts';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { resetContact, selectIsLoadingGetOneContact, selectOneContact } from '../../store/slices/contactSlice.ts';
import Loader from '../../Components/UI/Loader/Loader.tsx';

const ContactForm = () => {
  const oneContactFromState = useAppSelector(selectOneContact);
  const oneContactLoader = useAppSelector(selectIsLoadingGetOneContact);
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
      toast.success('This contact was edited successfully!');
    } else {
      await dispatch(createContact({...contact}));
      toast.success('This contact has been successfully added!');
    }
  };

  return (
    <>
      {oneContactLoader ? <Loader/> :
        oneContactFromState ? <FormControl isEdit onSubmitContact={onSubmitContact} contact={oneContactFromState}/> : null
      }
      {!oneContactFromState ? <FormControl onSubmitContact={onSubmitContact}/> : null}
    </>
  );
};

export default ContactForm;