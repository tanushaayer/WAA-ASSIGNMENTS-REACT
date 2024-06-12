import axios from "axios";
import React, { useEffect, useState } from "react";

const PostDetails = ({ selectedPostId, updateFlag, setUpdateFlag }) => {
  const [postDetail, setPostDetail] = useState(null);

  let post = `http://localhost:8080/posts/${selectedPostId}`;

  const fetchSelectedPost = () => {
    axios
      .get(post)
      .then((response) => setPostDetail(response.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = async () => {
    try {
      await axios.delete(post);
      setUpdateFlag(!updateFlag);
      setPostDetail(null);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (selectedPostId) {
      fetchSelectedPost();
    }
  }, [selectedPostId]);

  return (
    <div className="Post-Container">
      {postDetail && (
        <div className="Post Post-Details">
          <h3> Post Details</h3>
          <p>Id: {postDetail.postId}</p>
          <p>Title: {postDetail.postTitle}</p>
          <p>Content: {postDetail.postContent}</p>
          <p>Content: {postDetail.postAuthor}</p>

          <div>
            <button style={{ color: "green" }}>Edit</button>
            <button
              style={{ color: "red", marginLeft: "5px" }}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
