import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest from '../../axiosRequest.ts';
import { ContactAPI, IContact, IContactFromAPI, IFormContact } from '../../types';

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

export const getOneContact = createAsyncThunk<IContact | null, string>(
  'contact/getOneContact',
  async (contactId) => {
    const response = await axiosRequest<IContact | null>(`contacts/${contactId}.json`);
    return response.data || null;
  }
);

export const deleteContact = createAsyncThunk<void, string>(
  'contact/deleteContact',
  async (contactId) => {
    await axiosRequest.delete(`contacts/${contactId}.json`);
  }
);

export const editContact = createAsyncThunk<void, {contactID: string, contact: ContactAPI}>(
  'contact/editContact',
  async ({contactID, contact}) =>  {
    await axiosRequest.put(`contacts/${contactID}.json`, {...contact});
  }
);