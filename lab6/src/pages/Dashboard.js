import React, { useState } from "react";
import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";
import AddPost from "../components/AddPost";
import { PostIdConfig } from "../components/context/PostIdConfig";

const Dashboard = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [updateFlag, setUpdateFlag] = useState(false);

  return (
    <PostIdConfig.Provider value={{ selectedPost, setSelectedPost }}>
      <>
        <Posts updateFlag={updateFlag} />
        <AddPost updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} />
        <PostDetails updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} />
      </>
    </PostIdConfig.Provider>
  );
};

export default Dashboard;
