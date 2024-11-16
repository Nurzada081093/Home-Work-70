export interface IFormContact {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

export interface IContact {
  name: string;
  phone: string;
  email: string;
  photo: string;
  id: string;
}

export type ContactAPI = Omit<IFormContact, 'id'>

export interface IContactFromAPI {
  [id: string] : ContactAPI;
}

