import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import api from "../services/backend";
import Loading from '../Pages/Components/Loading/Loading'
import { UserContext } from "../context/UserContext";

export default function RoutesPrivate({ path, component }) {
  const context = useContext(UserContext);
  const sessionToken = context.loadSession().accessToken;
  const userAdmin = context.loadSession().userAdmin;
  const userId = context.loadSession().userId;

  const [userIsAdmin, setUserIsAdmin] = useState(userAdmin)
  const [renderComponent, setRenderComponent] = useState(<Loading />);




  const config = {
    headers: {
      authorization: "BEARER " + sessionToken,
      userAdmin: userAdmin,
      userId: userId,
    },
  };

  useEffect(() => {
    api.post("/token/verify", {}, config).then((res) => {
      const data = res.data;
  
      setUserIsAdmin(data.admin)

      if (data.validToken == true) {
        setRenderComponent(<Route path={path} component={component} />);
      } else {
        setRenderComponent(<Redirect to={"/login"} />);
      }
    });
  }, [])



  

  return renderComponent
}
