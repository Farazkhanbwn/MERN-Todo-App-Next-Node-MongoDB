import React from "react";
import { displayUserData } from "../services/todo-services";

const DisplayUser = async () => {
  const displayUser = await displayUserData();
  console.log("displayUser", displayUser);
  return <div>DisplayUser</div>;
};

export default DisplayUser;
