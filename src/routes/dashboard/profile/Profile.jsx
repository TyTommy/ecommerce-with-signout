import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="p-4">
      <div className="card">
        <div>
          <span>Username:</span>
          <span>{user?.username}</span>
        </div>
        <div>
          <span>Password:</span>
          <span>{user?.password}</span>
        </div>
        <div>
          <span>Logged date:</span>
          <span>{user?.loggedDate}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
