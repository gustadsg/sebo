import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";


import { UserContext, ContextProvider } from "../context/UserContext";

export default function RoutesPrivate({ path, component }) {

  const context = useContext(UserContext);
  if (context.user.accessToken && context.user.userAdmin) return (<Route path={path} component={component} />);
  else return (<Redirect to={{pathname: '/login', state:{redirect: {path}}}} />)
}
