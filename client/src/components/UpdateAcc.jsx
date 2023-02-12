import React, { useState } from "react";

function UpdateAccount(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFirstname(e.target.value)}
        placeholder="first name"
      />
      <input
        type="text"
        onChange={(e) => setLastname(e.target.value)}
        placeholder="last name"
      />
      <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        type="button"
        onClick={() => {
          props.update(props.id, firstname, lastname, password);
          props.setUpdateView(!props.updateView);
          props.setRefreshAcc(!props.refreshAcc);
        }}
      >
        update
      </button>
    </div>
  );
}

export default UpdateAccount;
