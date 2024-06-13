import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import { PostIdConfig } from "./context/PostIdConfig";

const Posts = ({ updateFlag }) => {
  const [post, setPost] = useState([]);
  const { setSelectedPost } = useContext(PostIdConfig);

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
