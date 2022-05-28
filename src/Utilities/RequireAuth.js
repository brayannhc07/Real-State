import React, { useContext } from "react";
import { sessionContext } from '../Context/sessionContext';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = props => {
  const { children } = props;
  const { isLogged } = useContext(sessionContext);
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
