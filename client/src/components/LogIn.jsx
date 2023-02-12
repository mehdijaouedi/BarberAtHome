import React, { useState } from "react";

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
console.log("ena",props.accounts)
  return (
    <div className="loginn">
      <div>
        <h1>Email:</h1>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></input>
        <h1>Password:</h1>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <br></br>
        <button
          type="button"
          onClick={() => {
            console.log(props.accounts)
            props.accounts.filter((el) => {
              
              if (el.email === email && el.password === password) {
                console.log(el);
                props.setUser(el)
                props.setOneId(el._id);
                props.setView("list");
                props.setBarView(!props.barView);
              }
              else if(el.email===email&&el.password!=password){
                alert("wrong password or user doesn't exist")
              }
            });
          }}
        >
          {" "}
          Login
        </button>
      </div>
    </div>
  );
}

export default LogIn;
