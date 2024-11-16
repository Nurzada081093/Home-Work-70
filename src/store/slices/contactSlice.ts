import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../../types';
import { createContact, getContacts } from '../thunks/contactThunks.ts';
import { RootState } from '../../app/store.ts';

interface InitialContactSlice {
  contacts: IContact[];
  oneContact: IContact | null;
  isLoading: {
    isLoadingCreate: boolean;
    isLoadingGet: boolean;
    isLoadingDelete: boolean;
    isLoadingEdit: boolean;
  };
  error: boolean;
}

const initialState: InitialContactSlice = {
  contacts: [],
  oneContact: null,
  isLoading: {
    isLoadingCreate: false,
    isLoadingGet: false,
    isLoadingDelete: false,
    isLoadingEdit: false,
  },
  error: false,
};

export const selectContacts = (state: RootState) => state.contacts.contacts;

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder => {
    builder
      .addCase(createContact.pending, (state) => {
        state.isLoading.isLoadingCreate = true;
        state.error = false;
      })
      .addCase(createContact.fulfilled, (state) => {
        state.isLoading.isLoadingCreate = false;
        state.error = false;
      })
      .addCase(createContact.rejected, (state) => {
        state.isLoading.isLoadingCreate = false;
        state.error = true;
      })
      .addCase(getContacts.pending, (state) => {
        state.isLoading.isLoadingGet = true;
        state.error = false;
      })
      .addCase(getContacts.fulfilled, (state, action: PayloadAction<IContact[]>) => {
        state.isLoading.isLoadingGet = false;
        state.error = false;
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state) => {
        state.isLoading.isLoadingGet = false;
        state.error = true;
      });
  })
});


export const contactReducer = contactSlice.reducer;