import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {mmkvStorage} from './storage';

interface Location {
  type: 'Point';
  coordinates: [number, number];
}

export interface User {
  _id: string;
  name: string;
  username: string;
  phoneNumber: number;
  profileImage: string;
  snugRank: number;
  snugScore: number;
  totalSnugs: number;
  chats: string[];
  groupIDs: string[];
  location: Location;
  createdAt: string;
  updatedAt: string;
  fcmToken: string;
  __v: number;
}

interface UserSettings {
  anonymousMode: boolean;
  darkMode: boolean;
  pushEnabled: boolean;
  likesNotification: boolean;
  commentsNotification: boolean;
  nearbyPostsNotification: boolean;
  soundEnabled: boolean;
  vibrationEnabled: boolean;
  locationEnabled: boolean;
  dataCollection: boolean;
}

interface AuthStore {
  user: User | null;
  settings: UserSettings;
  location: Location | null;
  setUser: (user: User) => void;
  setSettings: (settings: UserSettings) => void;
  setLocation: (latitude: number, longitude: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, _get) => ({
      user: null,
      settings: {
        anonymousMode: false,
        darkMode: false,
        pushEnabled: true,
        likesNotification: true,
        commentsNotification: true,
        nearbyPostsNotification: true,
        soundEnabled: true,
        vibrationEnabled: true,
        locationEnabled: true,
        dataCollection: true,
      },
      location: null,
      setUser: data => set({user: data}),
      setSettings: settings => set({settings}),
      setLocation: (latitude, longitude) =>
        set({location: {type: 'Point', coordinates: [latitude, longitude]}}),
      logout: () =>
        set({
          user: null,
          settings: {
            anonymousMode: false,
            darkMode: false,
            pushEnabled: true,
            likesNotification: true,
            commentsNotification: true,
            nearbyPostsNotification: true,
            soundEnabled: true,
            vibrationEnabled: true,
            dataCollection: true,
            locationEnabled: true,
          },
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => mmkvStorage),
    },
  ),
);
