import axios from "axios";
import React, { useState } from "react";

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  const onSubmitForm = (fname,lname,email,password) => {
 
    axios
      .post("/barberAtHome/signUp", {
        firstName: fname,
        lastName: lname,
        email: email,
        password: password,
      })
      .then((res) =>{
        props.accounts.push(res.data)
        console.log(res.data)})
      .catch((err) => console.log(err));
    props.setView("login");
    props.setRefreshAcc(!props.refreshAcc)
  };

  return (
    <div className="signup">
      <h3>first name:</h3>
      <input
        type="text"
        onChange={(e) => setFName(e.target.value)}
        placeholder="first name"
        required
      ></input>
      <h3>last name:</h3>
      <input
        type="text"
        onChange={(e) => setLName(e.target.value)}
        placeholder="last name"
        required
      ></input>
      <h3>email:</h3>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        required
      ></input>
      <h3>Password:</h3>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        required
      ></input>
      <br></br>
      <button type="button" onClick={()=>
      onSubmitForm(fname,lname,email,password)
      }>
        {" "}
        SignUp
      </button>
    </div>
  );
}

export default SignUp;
