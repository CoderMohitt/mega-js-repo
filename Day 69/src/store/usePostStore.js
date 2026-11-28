import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    loading: false,

    fetchPosts: async () => {
        set({loading: true})

        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        const data = await res.json()

        set({posts: data, loading: false})
    }
}))

export default usePostStore