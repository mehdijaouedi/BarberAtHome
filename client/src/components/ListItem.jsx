import axios from "axios";
import React,{useState} from "react";

const ListItem = (props) =>{
  const[show,setShow] =useState(false);
  const updatePostLikes=(id,likes)=>{
  axios.put("/barberAtHome/updatePost",{postId:{_id:id},likes:likes}).then(res=>console.log(res)).catch(err=>console.log(res))
}
   return(
  <div>
    <h1> {props.post.firstName + " " + props.post.lastName}</h1>
    <img src={props.post.imageUrl} />
    <h3> {props.post.description}</h3>
    <h2>phone number: {props.post.phoneNumber} </h2>
<input type="time"></input>
    <input type="date"></input>
    <input type="range"></input>
    <button type="button" > take a place </button>
    
   {/* <h2>{!show ? 
        (<button type="button" > take a place </button>) :
        (<input type="time"></input> &&
        <input type="date"></input>&&
        <input type="range"></input> )
      
      }</h2>  */}
    
    
    <button type="button" onClick={()=>{
      updatePostLikes(props.post._id,props.post.likes+1)
      props.setRefreshAcc(!props.refreshAcc)
      }}>{props.post.likes} 👍 </button>

  </div>
);
   }
export default ListItem;
