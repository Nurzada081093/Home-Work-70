import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectContacts, selectIsLoading } from '../../store/slices/contactSlice.ts';
import { useCallback, useEffect } from 'react';
import { getContacts } from '../../store/thunks/contactThunks.ts';
import Contacts from '../../Components/Contacts/Contacts.tsx';
import Loader from '../../Components/UI/Loader/Loader.tsx';

const Home = () => {
  const contacts = useAppSelector(selectContacts);
  const loading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  const getAllContacts = useCallback(async () => {
    await dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    void getAllContacts();
  }, [getAllContacts]);

  return (
    <>
      {loading ? <Loader/> : <Contacts contacts={contacts}/>}
    </>
  );
};

export default Home;