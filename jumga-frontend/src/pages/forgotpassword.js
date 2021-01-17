import EmptyTemplate from "./empttemplate";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import request from "../helpers/request";
import { useAlert } from "react-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { FRONTEND_BASE_URL } from "../helpers/constant";

const ForgetPassword = () => {
  const [forgetData, setforgetData] = useState({});
  const [loadingBtn, setLoadingBtn] = useState(false);
  const { type } = useParams();
  const alert = useAlert();

  const handleSubmit = async (e) => {
    if (!forgetData.email) {
      alert.error("Email is required");
      return;
    }
    e.target.setAttribute("disabled", "");
    setLoadingBtn(true);
    const response = await request("auth/requesttoken", "POST", {
      email: forgetData.email,
      url: FRONTEND_BASE_URL + "/" + type + "/reset",
    });
    if (response.status != 200) {
      //error occurred
      e.target.removeAttribute("disabled");
      setLoadingBtn(false);
      alert.error(response.body.error);
    } else {
      //redirect back to dashboard
      alert.success(response.body.message);

      setLoadingBtn(false);
    }
  };
  const loadingIcon = loadingBtn ? (
    <i className="fa fa-circle-o-notch spin text-white"></i>
  ) : (
    <></>
  );
  const handleChange = (e) => {
    const data = {};
    data[e.target.name] = e.target.value;
    setforgetData({ ...forgetData, ...data });
  };
  return (
    <EmptyTemplate>
      <div className="row w-100 card py-3 px-4">
        <b classNameName="text-yellow action-text">Retrieve your password!</b>
        <br></br>
        <br></br>
        <div className="col-lg-4 mx-auto">
          <div className="auto-form-wrapper">
            <br></br>

            <div className="form-group">
              <label className="label">Email Address</label>
              <div className="input-group">
                <input
                  onChange={handleChange}
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="Email Address"
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <button
                onClick={handleSubmit}
                className="btn color-yellow text-white submit-btn btn-block text-small"
              >
                Send me reset Token {loadingIcon}
              </button>
            </div>

            <div className="text-block text-center my-3 col-form-label">
              <span className="text-small col-form-label font-weight-semibold">
                Not a member ?
              </span>
              <Link
                to={"/" + type + "/register"}
                className="col-form-label text-yellow"
              >
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </EmptyTemplate>
  );
};
export default ForgetPassword;
