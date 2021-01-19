import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import request from "../../helpers/request";
import NonPaymentPage from "./nonpaymentpage";
import SuspendedPage from "./suspended";
import Cookies from "universal-cookie";

const CheckPayment = (props) => {
  const cookies = new Cookies();
  const auth = cookies.get("auth");
  const [activationStatus, setActivationStatus] = useState("");
  useEffect(async () => {
    const res = await request(
      "merchants/check/account/activation",
      "POST",
      {
        userId: auth.user.id,
      },
      auth.token
    );

    if (res.status == 200) {
      setActivationStatus(res.body.data.status);
    }
  });
  if (!activationStatus) {
    return <p>couldn't successfully communicate with the server</p>;
  } else if (activationStatus == "active") {
    return <>{props.children}</>;
  } else if (activationStatus == "pending") {
    return <NonPaymentPage />;
  } else {
    return <SuspendedPage />;
  }
};
export default CheckPayment;
