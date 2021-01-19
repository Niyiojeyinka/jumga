import DashboardTemplate from "./template";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import InlinePayment from "../payments/inlinepayment";
import countries from "../../helpers/countriesmeta";
import convert from "../../helpers/currencyconverter";
import formatMoney from "../../helpers/formatmoney";
const NonPaymentPage = (props) => {
  const cookies = new Cookies();
  const auth = cookies.get("auth");
  const amountToPay = 50;
  const [amount, setAmount] = useState("");
  auth.country_code = auth.user.country_code;
  useEffect(async () => {
    let amount = await convert(
      "USD",
      countries[auth.country_code]["currency"],
      amountToPay
    );
    setAmount(amount);
  });

  let displayAmount = amount ? (
    countries[auth.country_code]["currency"] + "" + formatMoney(amount)
  ) : (
    <i className="fa fa-circle-o-notch spin text-success mx-2"></i>
  );
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
              console.log(data);
            }}
            handleCallback={(response) => {
              console.log(response);
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
