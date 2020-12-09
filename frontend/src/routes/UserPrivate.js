import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../context/UserContext";

export default function RoutesPrivate({ path, component }) {
  const { accessToken } = useContext(UserContext);
  if (accessToken) return (<Route path={path} component={component} />);
  else return (<Redirect to='/login' />);
}
