import React, { useState } from "react";
import AddPostForm from "./AddPostForm";

const AddPost = ({ updateFlag, setUpdateFlag }) => {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <div>
      <button
        style={{ width: "15%", padding: "5px", marginTop: "10px" }}
        onClick={() => setIsAdd(true)}
      >
        Add Post
      </button>
      {isAdd && (
        <AddPostForm
          updateFlag={updateFlag}
          setUpdateFlag={setUpdateFlag}
          closeAdd={setIsAdd}
        />
      )}
    </div>
  );
};

export default AddPost;
