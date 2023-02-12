import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import LogIn from "./components/LogIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Profile from "./components/Profile.jsx";
import CreatePost from "./components/CreatePost.jsx";
import MyPosts from "./components/MyPosts.jsx";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [oneId, setOneId] = useState("");
  const [user, setUser] = useState({});
  const [view, setView] = useState("home");
  const [barView, setBarView] = useState(false);
  const [refreshAcc, setRefreshAcc] = useState(true);
  const [myPosts,setMyPosts]=useState([])

  // const changeView = (view) =>{
  //   setView(view)
  // }

  useEffect(() => {
    $.ajax({
      url: "/barberAtHome",
      success: (data) => {
    
        setPosts(data);
        posts.filter(el=>el.creater===email?myPosts.push(el):null)
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  }, [refreshAcc]);
  useEffect(() => {
   
    $.ajax({
      url: "/barberAtHome/accounts",
      success: (data) => {
       
        setAccounts(data);
        
      },
      error: (err) => {
        console.log("err", err);
      },
    });
  }, [refreshAcc]);
  const getOneUser=(id)=>{
    axios.post("/barberAtHome/one/",{_id:id}).then(res=>setUser(res.data)).catch(err=>console.log(err))
  }
  useEffect(()=>{
   getOneUser(oneId)
  },[refreshAcc])

  // const renderView =()=> {
  //   if (view === "home") {
  //     return <LogIn  changeView={changeView} />
  //   } else if (view==="login") {
  //     return  <LogIn
  //     setUser={setUser}
  //      accounts={accounts}
  //       setOneId={setOneId}
  //       setView={setView}
  //       setBarView={setBarView}
  //       barView={barView}
  //     />;
      
  //   } else if (view === "signUp") {
  //     return <SignUp setView={setView}  accounts={accounts} setRefreshAcc={setRefreshAcc} refreshAcc={refreshAcc} />;
  //     }
  //     else if (view === "profile"){
  //       return <Profile
  //       refreshAcc={refreshAcc}
  //       setRefreshAcc={setRefreshAcc}
  //       user={user}
  //       setView={setView}
  //       barView={barView}
  //       setBarView={setBarView}
  //     />
  //     }
  //     else if (view === "list"){
  //       return <List posts={posts}  refreshAcc={refreshAcc} setRefreshAcc={setRefreshAcc} />
  //     }else if (view === "createPost"){
  //       return<CreatePost user={user}  refreshAcc={refreshAcc} setRefreshAcc={setRefreshAcc} />
  //     }else if (view==="myPosts"){
  //       return posts.filter((el)=>el.creater===user.email).map((post, index) => (
  //         <div key={index}>
  //           <MyPosts post={post}  refreshAcc={refreshAcc} setRefreshAcc={setRefreshAcc}/>
  //         </div>
  //       ))
  //     }
  // }
  const footer = () => (
    <footer>
    <p>HELP: if you need anything just make sure to contact the us<br/>
    <a href="mailto:mehdijaouedi9@gmail.com">click here please</a></p>
  </footer>
  )
  
  return (
    <div className="inline">
    <nav >
        <div  onClick={() => {
          if(view!="home"){
        if((view==="signIn"||view==="login")){
          setView("home")
        }
          else{
            setView("list")
          
          }}
        }}>
          <img className='logo' src="./assests/logo.png" />
        </div>
        {barView || (
          <div>
            <div onClick={() => setView("login")}>
              Login
            </div>
            <div onClick={() => setView("signUp")}>
             SignUp
            </div>
          </div>
        )}
        {barView && (
          <div>
            <div
              onClick={() => {
          
                setView("profile");
              }}
            >
              Profile
            </div>
            <div
              onClick={() => {
                setBarView(!barView);
                setView("home");
              }}
            >
              SignOut
            </div>
            <div onClick={() => {
    
              setView("createPost")}}>
              Create Post
            </div>
            <div onClick={() => setView("myPosts")}>
              My Posts
            </div>
          </div>
        )}
      
    </nav>
    
    <div >
    
      {view === "login" && (
        <LogIn
        setUser={setUser}
         accounts={accounts}
          setOneId={setOneId}
          setView={setView}
          setBarView={setBarView}
          barView={barView}
        />
      )}
      {view === "signUp" && <SignUp setView={setView}  accounts={accounts} setRefreshAcc={setRefreshAcc} refreshAcc={refreshAcc} />}
      {view === "profile" && (
        <Profile
          refreshAcc={refreshAcc}
          setRefreshAcc={setRefreshAcc}
          user={user}
          setView={setView}
          barView={barView}
          setBarView={setBarView}
        />
      )}
      
      {view === "list" && <List posts={posts}  refreshAcc={refreshAcc} setRefreshAcc={setRefreshAcc} />}
      {view === "createPost" && <CreatePost user={user}  refreshAcc={refreshAcc} setRefreshAcc={setRefreshAcc} />}
      {view==="myPosts"&&posts.filter((el)=>el.creater===user.email).map((post, index) => (
    <div key={index}>
      <MyPosts post={post}  refreshAcc={refreshAcc} setRefreshAcc={setRefreshAcc}/>
    </div>
    ))}
    </div>
    {footer()}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
