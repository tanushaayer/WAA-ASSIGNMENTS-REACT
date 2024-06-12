import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const Posts = ({ setSelectedPost, updateFlag }) => {
  const [post, setPost] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://localhost:8080/posts")
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPosts();
  }, [updateFlag]);

  return (
    <div className="Post-Container">
      {post.map((p) => (
        <Post postProp={p} key={p.postId} onClick={setSelectedPost} />
      ))}
    </div>
  );
};

export default Posts;
