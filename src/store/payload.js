import { create } from 'zustand';

const usePayloadStore = create((set) => ({
    userActivity: [{}],
    setUserActivity: (userActivity) => set({ userActivity }),
    addActivity: (activity) => set((state) => ({ userActivity: [...state.userActivity, activity] })),
}));

export default usePayloadStore;
