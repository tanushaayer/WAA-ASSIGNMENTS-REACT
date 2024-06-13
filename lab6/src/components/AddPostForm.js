import axios from "axios";
import React, { useRef, useState } from "react";

const AddPostForm = ({ closeAdd, updateFlag, setUpdateFlag }) => {
  const titleRef = useRef("");
  const contentRef = useRef("");
  const authorRef = useRef("");

  const onSubmit = async () => {
    const post = {
      postTitle: titleRef.current.value,
      postContent: contentRef.current.value,
      postAuthor: authorRef.current.value,
    };
    try {
      await axios.post("http://localhost:8080/posts", post);
      setUpdateFlag(!updateFlag);
      closeAdd(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="Form-Container" onSubmit={onSubmit}>
      <div className="Label-Container">
        <label className="Label">Title:</label>
        <input ref={titleRef} type="text" />
      </div>
      <div className="Label-Container">
        <label className="Label">Content:</label>
        <input ref={contentRef} type="text" />
      </div>
      <div className="Label-Container">
        <label className="Label">Author:</label>
        <input ref={authorRef} type="text" />
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
