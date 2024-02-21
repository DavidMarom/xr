"use client";
import { create } from 'zustand';

const useEventStackStore = create((set) => ({
    userActivity: [],
    addActivity: (activity) => set((state) => ({ userActivity: [...state.userActivity, activity] })),
    clearActivityStack: () => set({ userActivity: [] }),
}));

export const getUserActivityStack = () => useEventStackStore.getState().userActivity;
export const addUserActivity = (activity) => useEventStackStore.getState().addActivity(activity);

export default useEventStackStore;

