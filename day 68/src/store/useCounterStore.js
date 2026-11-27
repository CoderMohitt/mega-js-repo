import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 100,
    inc: () => set((state) => ({count: state.count + 1})),
    dec: () => set((state) => ({count: state.count - 1})),
    setCustomValue: (value) => set(() => ({count: value}))
}))

export default useCounterStore