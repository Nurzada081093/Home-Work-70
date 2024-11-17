import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectContacts } from '../../store/slices/contactSlice.ts';
import { useCallback, useEffect } from 'react';
import { getContacts } from '../../store/thunks/contactThunks.ts';
import Contacts from '../../Components/Contacts/Contacts.tsx';

const Home = () => {
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();

  const getAllContacts = useCallback(async () => {
    await dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    void getAllContacts();
  }, [getAllContacts]);

  return (
    <div>
      <Contacts contacts={contacts}/>
    </div>
  );
};

export default Home;