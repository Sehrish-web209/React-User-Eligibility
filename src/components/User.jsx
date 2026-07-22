import React from "react";
function User({ user }) {
  return (
    <>
    <h2>{user.name}</h2>
    <p>Age: {user.age}</p>
    <p>Date of Birth: {user.dateOfBirth}</p>
    <p>City: {user.city}</p>
    <p>Email: {user.email}</p>
    </>
  );
}

export default User;