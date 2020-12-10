import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";


import { UserContext } from "../context/UserContext";

export default function RoutesPrivate({ path, component }) {

  const context = useContext(UserContext);
  const sessionToken = context.user.accessToken || context.loadSession().accessToken;
  const userAdmin = context.user.userAdmin || context.loadSession().userAdmin;
  // Authenticated
  if ( sessionToken && userAdmin) return (<Route path={path} component={component} />);
  // Not authenticated
  else return (<Redirect to={'/login'} />)
}
