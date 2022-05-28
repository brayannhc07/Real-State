import React from "react";
import { GoogleLogout } from "react-google-login";
import { googleClientId } from "../Config";

const LogoutGoogle = props => {

  const { onLogoutSuccess } = props;

  return (
    <GoogleLogout
      clientId={googleClientId}
      onLogoutSuccess={onLogoutSuccess}
      buttonText="Cerrar Sesión"

    />
  );
};

export default LogoutGoogle;

