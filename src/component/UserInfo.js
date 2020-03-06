import React from "react";

const UserInfo = (props) => {
  return (
    <div>
        <p> UserName: {props.user.login}</p>
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
    </div>
  );
};

export default UserInfo;