import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";


import { UserContext } from "../context/UserContext";

export default function RoutesPrivate({ path, component }) {

  const context = useContext(UserContext);
  const sessionToken = context.user.accessToken || context.loadSession().accessToken;
  // Authenticated
  if (sessionToken) return (<Route path={path} component={component} />);
  // Not authenticated
  else return (<Redirect to={'/login'} />)
}
