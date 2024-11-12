import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat"
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
function profilePage() {
  const navigate=useNavigate()
  const handleLogOut=async () => {
    try{
      const res=apiRequest.post("/auth/logout");
      navigate("/")
      localStorage.removeItem("user")
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div> 
          <div className="info">
            <span>
              Avatar:
              <img src="" alt="img" />
            </span>
            <span> 
              Username: <b>Aditya</b>
            </span>
            <span>
              Email: <b>adityasharmavats281210@gmail.com</b>
            </span>
            <button onClick={handleLogOut}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}
export default profilePage;
