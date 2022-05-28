import React, { useContext } from "react";
import LoginGoogle from "./LoginGoogle";
import ProfileCard from "./ProfileCard";
import { loginGoogleAsync } from "../Services/authService";
import { sessionContext } from "../Context/sessionContext";

const ProfileButton = (props) => {

  const { isLogged, userProfile, setIsLogged, setUserProfile } = useContext(sessionContext);

  const onLoginSuccess = async res => {
    const resp = await loginGoogleAsync(res.tokenId);
    setIsLogged(resp.ok);
    setUserProfile(resp.data);

  };
  const onLogoutSuccess = () => {
    setIsLogged(false);
    setUserProfile({});
  };

  const onFailure = res => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div>
      {
        isLogged === true ?
          <ProfileCard profile={userProfile} onLogoutSuccess={onLogoutSuccess} /> :
          <LoginGoogle onFailure={onFailure} onLoginSuccess={onLoginSuccess} />
      }
    </div>
  );
}

export default ProfileButton;

