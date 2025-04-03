import React, { createContext, useState, useEffect } from "react";
import appwriteService from "../appwrite/config";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [isFetched, setIsFetched] = useState(false); // Track initial fetch

  useEffect(() => {
    if (!isFetched) {
      fetchPosts();
      setIsFetched(true);
    }

    // Subscribe to real-time updates
    const unsubscribe = appwriteService.client.subscribe(
      [`databases.${appwriteService.databaseId}.collections.${appwriteService.collectionId}.documents`], // Correct subscription path
      (response) => {
        if (["databases.documents.create", "databases.documents.update", "databases.documents.delete"].includes(response.events[0])) {
          fetchPosts(); // Refetch only if posts change
        }
      }
    );

    return () => {
      unsubscribe(); // Cleanup subscription
    };
  }, [isFetched]);

  const fetchPosts = async () => {
    try {
      const response = await appwriteService.getPosts();
      if (response && response.documents) {
        setPosts(response.documents);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
