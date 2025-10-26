export interface ProfileResponse {
  profile: User | null;
}

export interface User {
  id: number;
  name: string;
  surname?: string;
  photo?: string;
}

export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}
