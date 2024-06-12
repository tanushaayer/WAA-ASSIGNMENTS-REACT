import axios from "axios";
import React, { useState } from "react";

const AddPostForm = ({ closeAdd, updateFlag, setUpdateFlag }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const onSubmit = async () => {
    const post = {
      postTitle: title,
      postContent: content,
      postAuthor: author,
    };
    try {
      await axios.post("http://localhost:8080/posts", post);
      setUpdateFlag(!updateFlag);
      setTitle("");
      setAuthor("");
      closeAdd(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="Form-Container" onSubmit={onSubmit}>
      <div className="Label-Container">
        <label className="Label">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="Label-Container">
        <label className="Label">Content:</label>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="Label-Container">
        <label className="Label">Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="Label-Container">
        <button type="submit" style={{ width: "10%", color: "green" }}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddPostForm;
