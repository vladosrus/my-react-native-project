import { atom } from 'jotai';
import axios, { AxiosError } from 'axios';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthResponse, LoginRequest } from './auth.interfaces';
import { API } from '../api';

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const INITIAL_STATE: AuthState = { access_token: null, isLoading: false, error: null };

export const authAtom = atomWithStorage<AuthState>('auth', INITIAL_STATE, storage);

export const loginAtom = atom(
  get => get(authAtom),
  async (_, set, { email, password }: LoginRequest) => {
    set(authAtom, { isLoading: true, access_token: null, error: null });

    try {
      await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));

      const { data } = await axios.post<AuthResponse>(API.login, { email, password });

      set(authAtom, { isLoading: false, access_token: data.accessToken, error: null });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(authAtom, {
          isLoading: false,
          access_token: null,
          error: error.response?.data.message,
        });
      }
    }
  },
);

export const logoutAtom = atom(null, async (_, set) => set(authAtom, INITIAL_STATE));

export interface AuthState {
  access_token: string | null;
  isLoading: boolean;
  error: string | null;
}
