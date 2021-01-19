import { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import generateShortCode from "../../helpers/random";
import countries from "../../helpers/countriesmeta";
import Cookies from "universal-cookie";

export default function InlinePaymentWithSubaccount(props) {
  const cookies = new Cookies();
  const auth = cookies.get("auth");
  const [reference, setReference] = useState(generateShortCode());
  const config = {
    public_key: "FLWPUBK_TEST-a08b0002d526ebb1925593941f7c68a3-X",
    tx_ref: reference,
    amount: props.data.amount,
    currency: props.data.currency,
    payment_options:
      "qr,card,mobilemoneyghana,mobilemoney,ussd,banktransfer,barter,credit,mobilemoneyghana,payattitude,paga,1voucher,mpesa",
    customer: {
      email: props.data.user.email,
      name: props.data.user.name,
    },
    subaccounts: props.subaccounts,
    customizations: {
      title: "Jumga Store",
      description: props.data.description,
      logo:
        "https://res.cloudinary.com/open-source/image/upload/v1611041735/logo1_afdhwx.png",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button
        className={props.className}
        onClick={() => {
          setReference(generateShortCode());
          console.log("pre", reference);
          props.handleClick({
            reference,
            amount: props.data.amount,
            currency: props.data.currency,
          });
          handleFlutterPayment({
            callback: (response) => {
              props.handleCallback({
                ref: reference,
                transaction_id: response.transaction_id,
              });
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        {props.label}
        <img
          className="m-4"
          width="35"
          src={countries[auth.user.country_code].flag}
        />
      </button>
    </div>
  );
}
