import { useParams } from "react-router-dom";
import MerchantDashboard from "../merchant/template";
import CheckPayment from "../merchant/checkpayment";
import AuthCheck from "../authcheck";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import request from "../../helpers/request";

const ChooseContainer = (props) => {
  const cookies = new Cookies();
  const auth = cookies.get("auth");
  const [dispatchers, setDispatchers] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(async () => {
    const res = await request("dispatchers/all", "GET", {}, auth.token);

    setDispatchers(res.body.data);
  });

  const dispatchersJSX = dispatchers.map((bank, index) => {
    return (
      <option value={bank.email} key={index + "b"}>
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
    console.log(formData);
    const res = await request(
      "dispatchers/set",
      "POST",
      {
        ...formData,
        userId: auth.user.id,
      },
      auth.token
    );

    if (res.status == 200) {
      window.location.assign(`/${auth.userType}/dashboard`);
    }
    e.target.removeAttribute("disabled");
  };

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Dispatcher Settings</h4>
          <p className="card-description">
            {" "}
            if you have your private dispatcher, you can send them our link to
            register as dispatcher and after which you add them to your shop by
            entering their email.{" "}
          </p>
          <div className="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Dispatcher Email Address"
            />
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="btn color-yellow text-white mr-2"
          >
            Add Dispatcher
          </button>
          <br></br>
          Or<br></br>
          choose from existing dispatchers
          <br></br>
          <div class="form-group">
            <label class="">Dispatchers</label>
            <div class="">
              <select onChange={handleChange} name="email" class="form-control">
                <option value="">Choose Dispatcher</option>
                {dispatchersJSX}
              </select>
            </div>
          </div>
          <button
            onClick={handleClick}
            type="submit"
            className="btn color-yellow text-white mr-2"
          >
            Add Dispatcher
          </button>
        </div>
      </div>
    </div>
  );
};

const ChooseDispatcher = (props) => {
  return (
    <AuthCheck>
      <CheckPayment>
        <MerchantDashboard>
          <ChooseContainer />
        </MerchantDashboard>
      </CheckPayment>
    </AuthCheck>
  );
};
export default ChooseDispatcher;
