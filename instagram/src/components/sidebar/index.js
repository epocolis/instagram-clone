import React from 'react';
import useUser from '../../hooks/use-user';

export default function Sidebar() {
  const {
    user: { docId, userId, following, username, fullName } = {},
  } = useUser();

  console.log(userId);

  return (
    <div className="p-4">
      <p>I am the Sidebar</p>
    </div>
  );
}
