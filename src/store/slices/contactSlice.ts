import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../../types';
import { createContact, deleteContact, editContact, getContacts, getOneContact } from '../thunks/contactThunks.ts';
import { RootState } from '../../app/store.ts';

interface InitialContactSlice {
  contacts: IContact[];
  oneContact: IContact | null;
  isLoading: {
    isLoadingCreate: boolean;
    isLoadingGet: boolean;
    isLoadingDelete: boolean;
    isLoadingEdit: boolean;
    isLoadingOneContact: boolean;
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
    isLoadingOneContact: false,
  },
  error: false,
};

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectOneContact = (state: RootState) => state.contacts.oneContact;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading.isLoadingGet;
export const selectIsLoadingCreate = (state: RootState) => state.contacts.isLoading.isLoadingCreate;
export const selectIsLoadingEdit = (state: RootState) => state.contacts.isLoading.isLoadingEdit;
export const selectIsLoadingGetOneContact = (state: RootState) => state.contacts.isLoading.isLoadingOneContact;
export const selectIsLoadingDelete = (state: RootState) => state.contacts.isLoading.isLoadingDelete;

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContact(state) {
      state.oneContact = null;
    },
  },
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
      })
      .addCase(getOneContact.pending, (state) => {
        state.isLoading.isLoadingOneContact = true;
        state.error = false;
      })
      .addCase(getOneContact.fulfilled, (state, action: PayloadAction<IContact | null>) => {
        state.isLoading.isLoadingOneContact = false;
        state.error = false;
        state.oneContact = action.payload;
      })
      .addCase(getOneContact.rejected, (state) => {
        state.isLoading.isLoadingOneContact = false;
        state.error = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading.isLoadingDelete = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state) => {
        state.isLoading.isLoadingDelete = false;
        state.error = false;
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isLoading.isLoadingDelete = false;
        state.error = true;
      })
      .addCase(editContact.pending, (state) => {
        state.isLoading.isLoadingEdit = true;
        state.error = false;
      })
      .addCase(editContact.fulfilled, (state) => {
        state.isLoading.isLoadingEdit = false;
        state.error = false;
        state.oneContact = null;
      })
      .addCase(editContact.rejected, (state) => {
        state.isLoading.isLoadingEdit = false;
        state.error = true;
      });
  })
});

export const contactReducer = contactSlice.reducer;
export const {resetContact} = contactSlice.actions;