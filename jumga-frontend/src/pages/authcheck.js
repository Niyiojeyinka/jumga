import { Redirect, useParams } from "react-router-dom";
import request from "../helpers/request";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

const AuthCheck = (props) => {
  const cookies = new Cookies();

  const { type } = useParams();
  const auth = cookies.get("auth");

  const [check, setCheck] = useState(true);
  useEffect(async () => {
    if (!auth) {
      setCheck(false);
    } else {
      const res = await request(
        "merchants/confirm/user/type",
        "POST",
        {
          userId: auth.user?.id,
          userType: type,
        },
        auth.token
      );

      if (res.status != 200) {
        setCheck(false);
      }
    }
  }, [check]);
  if (auth && check) {
    return <>{props.children}</>;
  } else {
    return <Redirect to={`/${type}/login`} />;
  }
};
export default AuthCheck;
