import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

const Post = ({post}) => {
  return (
    <div className='bg-white my-7 border rounded-md'>
       {/* Post Header */}
       <div className='flex items-center p-5'>
           <img src={post.userImg} alt={post.username} className='h-12 border rounded-full p-1 object-cover'/>
           <p className='font-bold flex-1'>{post.username}</p>
           <HiDotsHorizontal className='cursor-pointer' />
       </div>
       {/* Post Image */}
       <img src={post.img} alt="" />
    </div>
  )
}

export default Post
