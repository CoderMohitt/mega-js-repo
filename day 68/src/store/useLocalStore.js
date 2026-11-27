import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLocalStore = create(
    persist(
        (set) => ({
            name: "mohit",
            change: (v) => set(() =>({name: v}))
        }),
        {name: "newname"}
    )
)

export default useLocalStore