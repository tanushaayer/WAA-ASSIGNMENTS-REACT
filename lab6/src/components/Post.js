import React from "react";

const Post = ({ postProp, onClick }) => {
  const { postId, postTitle, postAuthor } = postProp;
  return (
    <div className="Post" onClick={(e) => onClick(postProp.postId)}>
      <p>Id: {postId}</p>
      <p>Title: {postTitle}</p>
      <p>Author: {postAuthor}</p>
    </div>
  );
};

export default Post;
