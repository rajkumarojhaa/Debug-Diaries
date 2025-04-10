import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useLocation } from "react-router-dom";

function AllPosts() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q")?.toLowerCase() || "";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from API
  useEffect(() => {
    appwriteService.getPosts().then((response) => {
      if (response) {
        setPosts(response.documents);
      }
      setLoading(false);
    });
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            // Skeleton loading cards
            Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse bg-white p-4 rounded-lg shadow-md space-y-4"
                >
                  <div className="h-44 bg-gray-300 rounded-md" />
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              ))
          ) : filteredPosts.length > 0 ? (
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
