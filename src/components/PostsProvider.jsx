import React, { createContext, useState, useEffect } from "react";
import appwriteService from "../appwrite/config";

export const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      appwriteService.getPosts().then((response) => {
        if (response) {
          setPosts(response.documents);
        }
      });
    }
  }, [posts]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
