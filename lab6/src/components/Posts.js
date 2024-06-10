import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = ({ title }) => {
  const [post, setPost] = useState([
    {
      id: 111,
      title: "Happiness",
      author: "John",
    },
    {
      id: 112,
      title: "MIU",
      author: "Dean",
    },
    {
      id: 113,
      title: "Enjoy Life",
      author: "Jasmine",
    },
  ]);

  useEffect(() => {
    if (title && post.length > 0) {
      const updatePost = [...post];
      updatePost[0].title = title;
      setPost(updatePost);
    }
  }, [title]);

  return (
    <div className="Post-Container">
      {post.map((p) => (
        <Post postProp={p} key={p.id} />
      ))}
    </div>
  );
};

export default Posts;
