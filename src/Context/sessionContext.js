import React, { useState } from "react";

const sessionContext = React.createContext();

const SessionProvider = (props) => {

  const [userProfile, setUserProfile] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <sessionContext.Provider
      value={
        { userProfile, setUserProfile, isLogged, setIsLogged }
      }>
      {props.children}
    </sessionContext.Provider>
  );
};

export { SessionProvider, sessionContext };

