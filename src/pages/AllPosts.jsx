import React, { useContext } from "react";
import { Container, PostCard } from "../components";
import { PostsContext } from "@/components/PostsProvider";
import { useLocation } from "react-router-dom";

function AllPosts() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q")?.toLowerCase() || "";

  const { posts } = useContext(PostsContext); // Get posts from Context

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard key={post.$id} {...post} />
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full text-lg">
              No posts found
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
