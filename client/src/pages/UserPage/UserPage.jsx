import React from "react";
import { useLocation } from "react-router-dom";

const UserPage = () => {
  const locatinon = useLocation();
  return (
    <>
      {locatinon.state.id}
      <div>user page</div>
    </>
  );
};

export default UserPage;
