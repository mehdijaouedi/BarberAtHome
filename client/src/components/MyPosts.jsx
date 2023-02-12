import axios from 'axios'
import React from 'react'

function MyPosts(props) {
  const del=(id)=>{
    axios.delete("/deletePost",{_id:id}).then(res=>console.log(res)).catch(err=>console.log(err))
  }
  
  return (
  
    <div className='myposts' >
    <h1> {props.post.firstName + " " + props.post.lastName}</h1>
    <img src={props.post.imageUrl} />
    <h3> {props.post.description}</h3>
    <h2>phone number: {props.post.phoneNumber} </h2>
    <h2>likes: {props.post.likes} </h2>
    <h2>range: {props.post.range} </h2>
    <h2>time: {props.post.time} </h2>
    <h2>date: {props.post.date} </h2>
    <button type='button' onClick={()=>{
      del(props.post._id)
      props.setRefreshAcc(!props.refreshAcc)
    }}>delete</button>
  </div>
  )
}

export default MyPosts