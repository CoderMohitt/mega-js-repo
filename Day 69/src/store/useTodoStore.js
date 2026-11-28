import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set, get) => (
      {
        todos: [], // state

        // action
        addTodo: (text) =>
          set((state) => ({
            todos: [...state.todos, { id: Date.now(), title: text }],
          })),

        getTodo: () => console.log(get().todos),
      }
    ),
    {
      name: "todos",
    }
  ),
);

export default useTodoStore;
