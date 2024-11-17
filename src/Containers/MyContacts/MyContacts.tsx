import Layout from '../../Components/Layout/Layout.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home.tsx';
import { Typography } from '@mui/material';
import ContactForm from '../ContactForm/ContactForm.tsx';


const MyContacts = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contacts/add" element={<ContactForm/>}></Route>
        <Route path="/contacts/:id/edit" element={<ContactForm/>}></Route>
        <Route path="*" element={<Typography variant="h1">Not found</Typography>} ></Route>
      </Routes>
    </Layout>
  );
};

export default MyContacts;