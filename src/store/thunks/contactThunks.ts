import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../axiosRequest.ts';
import { IFormContact } from '../../types';

export const createContact = createAsyncThunk<void, IFormContact>(
  'contact/createContact',
  async (contact) => {
    await axiosRequest.post('contacts.json', {...contact});
  }
);