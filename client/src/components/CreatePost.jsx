
import React, { useState } from "react";
import axios from "axios";
function CreatePost(props) {
  console.log(props.user);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [range, setRange] = useState("");
  // const [time, setTime] = useState("");
  // const [date, setDate] = useState("");
  const createPost = (
    creater,
    firstName,
    lastName,
    imageUrl,
    description,
    likes,
    phoneNumber,
    range,
    time,
    date
  ) => {
    axios.post("/barberAtHome/createPost", {
      creater: creater,
      firstName: firstName,
      lastName: lastName,
      imageUrl: imageUrl,
      description: description,
      likes: likes,
      phoneNumber:phoneNumber,
      range:range,
      time:time,
      date:date,
      
    }).then(res=>console.log(res)).catch(err=>console.log(err))
  };

  return (
    <div className="create">
      <h1>CreatePost</h1>
      <input
        type="text"
        placeholder="imageUrl"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="phoneNumber"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      
      <button
        onClick={() => {
          createPost(
            props.user.email,
            props.user.firstName,
            props.user.lastName,
            image,
            description,
            0,
            phoneNumber
          );
          props.setRefreshAcc(!props.refreshAcc)
        }}
      >
        create
      </button>
    </div>
  );
}

export default CreatePost;
