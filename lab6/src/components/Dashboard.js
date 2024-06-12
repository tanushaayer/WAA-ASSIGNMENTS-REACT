import React, { useState } from "react";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";

const Dashboard = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [updateFlag, setUpdateFlag] = useState(false);

  return (
    <div>
      <Posts setSelectedPost={setSelectedPost} updateFlag={updateFlag} />
      <AddPost updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} />
      <PostDetails
        selectedPostId={selectedPost}
        updateFlag={updateFlag}
        setUpdateFlag={setUpdateFlag}
      />
    </div>
  );
};

export default Dashboard;
