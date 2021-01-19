import { useParams } from "react-router-dom";
import MerchantDashboard from "../merchant/template";
import DispatcherDashboard from "../dispatchrider/template";
import CheckPayment from "../merchant/checkpayment";
import AuthCheck from "../authcheck";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import request from "../../helpers/request";

const WithdrawalContainer = (props) => {
  const cookies = new Cookies();
  const { type } = useParams();
  const auth = cookies.get("auth");
  const [banks, setBanks] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(async () => {
    const res = await request(
      "payments/banks",
      "POST",
      {
        country_code: auth.user.country_code,
      },
      auth.token
    );

    setBanks(res.body.data);
  });

  const banksJSX = banks.map((bank, index) => {
    return (
      <option value={bank.code} key={index + "b"}>
        {bank.name}
      </option>
    );
  });

  const handleChange = (e) => {
    const data = {};
    data[e.target.name] = e.target.value;
    setFormData({ ...formData, ...data });
  };

  const handleClick = async (e) => {
    e.target.setAttribute("disabled", "");
    //submit to backend
    //then use the data to create
    //sub account
    const res = await request(
      "payments/submit/bank",
      "POST",
      {
        ...formData,
        userId: auth.user.id,
      },
      auth.token
    );

    if (res.status == 200) {
      if (auth.userType == "merchant") {
        window.location.assign(`/${auth.userType}/choosedispatcher`);
      } else {
        window.location.assign(`/${auth.userType}/dashboard`);
      }
    }
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Withdrawal Settings</h4>
          <p className="card-description">
            {" "}
            Your Earnings/Sales will paid into this account{" "}
          </p>
          <div className="form-group">
            <label for="exampleInputEmail1">Account Number</label>
            <input
              onChange={handleChange}
              type="numeric"
              name="account_no"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Account Number"
            />
          </div>
          <div class="form-group">
            <label class="">Bank</label>
            <div class="">
              <select
                onChange={handleChange}
                name="bank_no"
                class="form-control"
              >
                {banksJSX}
              </select>
            </div>
          </div>

          <button
            onClick={handleClick}
            type="submit"
            className="btn color-yellow text-white mr-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const WithdrawalPage = (props) => {
  const { type } = useParams();

  if (type == "merchant") {
    return (
      <AuthCheck>
        <CheckPayment>
          <MerchantDashboard>
            <WithdrawalContainer />
          </MerchantDashboard>
        </CheckPayment>
      </AuthCheck>
    );
  } else {
    return (
      <AuthCheck>
        <DispatcherDashboard>
          <div className="text-center">Withdrawal Settings</div>
          <br></br>
          <MerchantDashboard />
        </DispatcherDashboard>
      </AuthCheck>
    );
  }
};
export default WithdrawalPage;
