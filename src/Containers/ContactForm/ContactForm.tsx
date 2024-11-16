import FormControl from '../../Components/FormControl/FormControl.tsx';
import { IFormContact } from '../../types';
import { useAppDispatch } from '../../app/hooks.ts';
import { createContact } from '../../store/thunks/contactThunks.ts';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const dispatch = useAppDispatch();

  const onSubmitContact = async (contact: IFormContact) => {
    console.log(contact);
    await dispatch(createContact({...contact}));
    toast.success('This contact has been successfully added!');
  };

  return (
    <div>
      <FormControl onSubmitContact={onSubmitContact}/>
    </div>
  );
};

export default ContactForm;