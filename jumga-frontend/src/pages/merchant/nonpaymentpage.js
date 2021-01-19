import DashboardTemplate from "./template";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import InlinePayment from "../payments/inlinepayment";
import countries from "../../helpers/countriesmeta";
import convert from "../../helpers/currencyconverter";
import formatMoney from "../../helpers/formatmoney";
import request from "../../helpers/request";
import { useAlert } from "react-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
const NonPaymentPage = (props) => {
  const alert = useAlert();
  const cookies = new Cookies();
  const auth = cookies.get("auth");
  const amountToPay = 20;
  const [amount, setAmount] = useState("");
  auth.country_code = auth.user.country_code;
  useEffect(async () => {
    let amount = await convert(
      "USD",
      countries[auth.country_code]["currency"],
      amountToPay
    );
    setAmount(amount);
  }, []);

  let displayAmount = amount ? (
    countries[auth.country_code]["currency"] + "" + formatMoney(amount)
  ) : (
    <i className="fa fa-circle-o-notch spin text-success mx-2"></i>
  );

  const recordPrePayment = async (data) => {
    let res = await request("payments/record/pre", "POST", data);
    if (res.status != 201) {
      alert.error("Error couldnt record your record");
    }
  };

  const handlePostPayment = async (data) => {
    let res = await request("payments/confirm", "POST", data);
    if (res.status != 200) {
      alert.error("Error couldnt record your record");
    } else {
      alert.success("Payment Successfuul!");

      window.location.assign(`/${auth.userType}/withdrawal`);
    }
  };

  return (
    <DashboardTemplate>
      <div className="container p-5">
        <div className="">
          Before you can start selling with JUMGA please Proceed to pay $50
          securely. powered by flutterwave.
          <br></br>
          You can pay now in your home currency at{" "}
          {countries[auth.country_code]["name"]} and using all the supported
          local channel in {countries[auth.country_code]["name"]}
          <br></br>
          <br></br>
        </div>
        <div className="">
          <InlinePayment
            label={
              <i>
                Pay {displayAmount}
                Now{" "}
              </i>
            }
            className="btn btn-block bg-white border text-success"
            handleClick={(data) => {
              recordPrePayment({
                userId: auth.user.id,
                userType: auth.userType,
                type: "activation",
                ref: data.reference,
                amount: data.amount,
                pre_conv_amount: amountToPay,
              });
            }}
            handleCallback={(response) => {
              console.log(response);
              handlePostPayment(response);
              //if successfull,send server confirmation request
              //with payment type
              //and redirect
            }}
            data={{
              amount: amount,
              currency: countries[auth.country_code]["currency"],
              user: auth.user,
              description: "Merchant Acctivation Fee",
            }}
          />
        </div>
      </div>
    </DashboardTemplate>
  );
};

export default NonPaymentPage;
