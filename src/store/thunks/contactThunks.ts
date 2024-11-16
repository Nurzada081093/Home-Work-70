import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../axiosRequest.ts';
import { IContact, IContactFromAPI, IFormContact } from '../../types';

export const createContact = createAsyncThunk<void, IFormContact>(
  'contact/createContact',
  async (contact) => {
    await axiosRequest.post('contacts.json', {...contact});
  }
);

export const getContacts = createAsyncThunk<IContact[], void>(
  'contact/getContacts',
  async () => {
    const response: {data: IContactFromAPI | null} = await axiosRequest('contacts.json');
    const contacts = response.data;

    if (contacts === null) {
      return [];
    }

    return Object.keys(contacts).map((contact) => {
      return {
        ...contacts[contact],
        id: contact,
      };
    });
  }
);