import React from 'react';

const UserInfo = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};

export default UserInfo;
