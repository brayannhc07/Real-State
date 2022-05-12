import React from "react";
import { GoogleLogin } from "react-google-login";
import { googleClientId } from "../Config/firebase";

const LoginGoogle = props => {

  const { onLoginSuccess, onFailure } = props;

  return (
    <div>
      <GoogleLogin
        clientId={googleClientId}
        buttonText="Ingresar"
        onSuccess={onLoginSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;

