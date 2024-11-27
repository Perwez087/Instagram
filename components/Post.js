import React from "react";
import { BsChatDots } from "react-icons/bs";
import { CiBookmark, CiHeart } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";

const Post = ({ post }) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          src={post.userImg}
          alt={post.username}
          className="h-12 border rounded-full p-1 object-cover"
        />
        <p className="font-bold flex-1">{post.username}</p>
        <HiDotsHorizontal className="cursor-pointer" />
      </div>
      {/* Post Image */}
      <img src={post.img} alt="" />

      {/* Post Button */}

      <div>
        <div className="flex items-center justify-between px-4 pt-4">
          <div className="flex items-center gap-4">
            <CiHeart size={25} className="btn" />
            <BsChatDots size={20} className="btn" />
          </div>
          <CiBookmark size={25} className="btn" />
        </div>
      </div>
    </div>
  );
};

export default Post;
