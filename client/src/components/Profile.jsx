import axios from "axios";
import React, { useState } from "react";
import UpdateAccount from "./UpdateAcc.jsx";

function Profile(props) {
  console.log(props.user);
  const [updateView, setUpdateView] = useState(true);
  const prof = (id) => {
    axios
      .delete("/barberAtHome/deleteAccount", { _id:id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const update = (id, firstName, lastName, password) => {
    axios
      .put("/barberAtHome/accountUpdate",{
        userid:{_id: id},
        firstName: firstName,
        lastName: lastName,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="profile">
      <h2>first name :{props.user.firstName}</h2>
      <h2>last name :{props.user.lastName}</h2>
      <h2>email :{props.user.email}</h2>
      <h2>password :{props.user.password}</h2>
      {updateView || (
        <button onClick={() => setUpdateView(!updateView)}>update</button>
      )}
      {updateView && (
        <UpdateAccount
          setUpdateView={setUpdateView}
          id={props.user._id}
          updateView={updateView}
          refreshAcc={props.refreshAcc}
          setRefreshAcc={props.setRefreshAcc}
          update={update}
        />
      )}
      <button
        onClick={() => {
          props.setView("home");
          props.setBarView(!props.barView);
          console.log(props.user._id)
          prof(props.user._id);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Profile;
