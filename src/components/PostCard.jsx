import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="group">
      <div className="relative w-full p-4 rounded-2xl bg-white/10  shadow-lg border border-white/20 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Image Container with Fixed Height */}
        <div className="overflow-hidden rounded-xl h-[200px] md:h-[240px] lg:h-[260px]">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Title - Always Visible on Small Screens */}
        <h2 className="text-base md:text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mt-3 text-center">
  {title}
</h2>


      </div>
    </Link>
  );
}

export default PostCard;
