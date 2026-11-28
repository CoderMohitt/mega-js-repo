import React, { useEffect } from 'react'
import usePostStore from '../store/usePostStore'

function Post() {
    const posts = usePostStore((state) => state.posts)
    const fetchPosts = usePostStore((state) => state.fetchPosts)
    const loading = usePostStore((state) => state.loading)

    useEffect(() => {
        fetchPosts()
    }, [])

    // console.log(posts)
    // console.log(loading)
  return (
    <div>
        {loading ? "loading" : posts.map((p) => (
            <div>{p.title}</div>
        )) }
    </div>
  )
}

export default Post