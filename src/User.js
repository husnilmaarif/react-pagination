import React from "react";

function User({ user }) {
  console.log(user);
  return (
    <div>
      <p>{`fullname: ${user.name.first} ${user.name.last}`}</p>
      <p>{`phone: ${user.phone}`}</p>
      <hr />
    </div>
  );
}

export default User;
