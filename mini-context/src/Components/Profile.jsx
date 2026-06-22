import React from 'react';
import UserContext from '../Context/UserContext';
function Profile() {
  const { user } = React.useContext(UserContext);
  if (!user) return <div>Please login to view your profile.</div>;

  return (
    <div>
      Welcome {user.username}
    </div>
  )
}

export default Profile