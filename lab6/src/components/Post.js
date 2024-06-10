import React from "react";

const Post = ({ postProp }) => {
  const { id, title, author } = postProp;
  return (
    <div className="Post">
      <p>Id: {id}</p>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default Post;
