import { create } from "zustand";

const USER_API = "https://jsonplaceholder.typicode.com/users";

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type State = {
  users: User[];
};

type Action = {
  fetchUsers: () => Promise<void>;
};

type UserStore = State & Action;

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await fetch(USER_API);
    const data = await response.json();

    set(() => ({ users: data }));
  },
}));
