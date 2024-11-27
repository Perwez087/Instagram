import React from 'react'
import Post from './Post'

const Posts = () => {
    const posts = [
        {
            id: 1,
            username: "Perwez Alam",
            userImg:"https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
            image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "Nature at dawn",
            likes: 200,
            comments: 50
        },
        {
            id: 2,
            username: "Masood Alam",
            userImg:"https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
            image: 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            caption: "New music picture",
            likes: 200,
            comments: 50
        },
    ]
  return (
    <div>
        {posts.map(post => (
            <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}

export default Posts
