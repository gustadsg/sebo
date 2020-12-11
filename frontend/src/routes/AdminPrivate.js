import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import api from "../services/backend";

import { UserContext } from "../context/UserContext";

export default function RoutesPrivate({ path, component }) {
  const context = useContext(UserContext);
  const sessionToken =
    context.user.accessToken || context.loadSession().accessToken;
  const userAdmin = context.user.userAdmin || context.loadSession().userAdmin;

  const config = {
    headers: {
      authorization: 'BEARER ' + sessionToken,
    },
  };

  async function validToken() {
    const response = await api.post("/token/verify", {}, config)
    const data = response.data

    // save user infos in context
    delete response.data.validToken;
    context.setSession(response.data)

    return data.validToken;
  }

  return validToken() ? (
    <Route path={path} component={component} />
  ) : (
    <Redirect to={"/login"} />
  );
}
