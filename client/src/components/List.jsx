import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => {
  
  return(
  <div className=" list"> 
    {props.posts.map((post, index) => (
      <div key={index}>
        <ListItem post={post}  refreshAcc={props.refreshAcc} setRefreshAcc={props.setRefreshAcc} />
      </div>
    ))}
  </div>
);}

export default List;
