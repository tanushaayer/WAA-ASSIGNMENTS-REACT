import React, { useState } from "react";
import Posts from "./Posts";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");

  const handleOnClick = () => {
    setName(title);
    setTitle("");
  };

  return (
    <div>
      <Posts title={name} />
      <input
        type="text"
        value={title}
        style={{ marginTop: "10px" }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <button style={{ marginTop: "10px" }} onClick={handleOnClick}>
        Change Name
      </button>
    </div>
  );
};

export default Dashboard;
