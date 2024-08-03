import { React,useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { AuthContext } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { authUser } = useContext(AuthContext); // Access authUser from AuthContext
  const userProfilePicture = "/ClientAvatar.png";

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: '#F2F1FE' }}>
      <Sidebar name={authUser.firstName+" "+authUser.lastName} profilePicture={authUser.profilePic?authUser.profilePic:userProfilePicture}/>
      <div className="flex-1 ml-64 p-4">
        {children}
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
}

export default Layout;