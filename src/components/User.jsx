import React from "react";
import { useState } from "react";
function User({ user }) {
    const [age,SetAge] = useState(user.age);
    const [eligibility,setEligibility] = useState("...?");
    function checkEligibility(){
        if (age>18 && age<25){
            setEligibility("Eligible");
        }
        else{
            setEligibility("Ineligible");
        }
    }
  return (
    <>
    <h2>{user.name}</h2>
    <p>Age: {age}</p>
    <p>Date of Birth: {user.dateOfBirth}</p>
    <p>City: {user.city}</p>
    <p>Email: {user.email}</p>
    <p>Eligibility: {eligibility}</p>
    <button onClick={checkEligibility}>Check Eligibility</button>
    </>
  );
}

export default User;