import {create} from 'zustand';

interface ProfileStore {
  profile: {
    name?: string;
    date?: Date;
    workout?:
      | '1 time a week'
      | '2 time a week'
      | '3 time a week'
      | '4 time a week';
  };
  setProfile: (key: 'name' | 'date' | 'workout', value: any) => void;
}

export const useProfileStore = create<ProfileStore>(set => ({
  profile: {},
  setProfile: (key, value) =>
    set(state => ({
      profile: {
        ...state.profile,
        [key]: value,
      },
    })),
}));
