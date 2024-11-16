import { createSlice } from '@reduxjs/toolkit';
import { IContact } from '../../types';
import { createContact } from '../thunks/contactThunks.ts';

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
      });
  })
});

export const contactReducer = contactSlice.reducer;