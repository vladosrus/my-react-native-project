import { atom } from 'jotai';
import axios, { AxiosError } from 'axios';

import { authAtom } from 'entities/auth/model';
import { ProfileResponse, User, UserState } from './user.interfaces';
import { API } from '../api';

export const profileAtom = atom<UserState>({
  profile: null,
  isLoading: false,
  error: null,
});

export const updateProfile = atom(
  get => get(profileAtom),
  async (get, set, { photo }: { photo: string }) => {
    try {
      const { access_token } = await get(authAtom);
      const { data: newProfileData } = await axios.patch<User>(
        API.profile,
        { photo },
        { headers: { Authorization: `Bearer ${access_token}` } },
      );

      set(profileAtom, { isLoading: false, profile: newProfileData, error: null });
    } catch (error) {
      console.log('error');

      if (error instanceof AxiosError) {
        set(profileAtom, { isLoading: false, profile: null, error: error.response?.data.message });
      }
    }
  },
);

export const loadProfileAtom = atom(
  get => get(profileAtom),
  async (get, set) => {
    const { access_token } = await get(authAtom);
    set(profileAtom, { isLoading: true, profile: null, error: null });
    try {
      const { data: profileData } = await axios.get<ProfileResponse>(API.profile, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      set(profileAtom, { isLoading: false, profile: profileData.profile, error: null });
    } catch (error) {
      console.log('error');

      if (error instanceof AxiosError) {
        set(profileAtom, { isLoading: false, profile: null, error: error.response?.data.message });
      }
    }
  },
);
