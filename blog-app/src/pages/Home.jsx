import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService
      .getPosts()
      .then((response) => {
        if (response !== false && response.documents) {
          // Check if response is not false and it has documents
          setPosts(response.documents);
        } else {
          console.log("No posts found or error occurred.");
        }
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        // Handle errors appropriately
      });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 ">
        <Container>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              No posts found
            </h1>
            <p className="text-white mb-8">Login to create posts</p>
            {/* Add login button or link here */}
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
