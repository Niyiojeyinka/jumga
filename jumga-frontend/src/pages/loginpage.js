import EmptyTemplate from "./empttemplate";
import { useParams, Link, Redirect, useLocation } from "react-router-dom";
import { useState } from "react";
import request from "../helpers/request";
import { useAlert } from "react-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { useDispatch, useSelector } from "react-redux";
import storeauth from "../actions/auth";
const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const [loadingBtn, setLoadingBtn] = useState(false);
  const { type } = useParams();
  const auth = useSelector((store) => store.auth);
  const alert = useAlert();
  const [redirectTo, setRedirectTo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    if (!loginData.email || !loginData.password) {
      alert.error("All fields are required");
      return;
    }
    e.target.setAttribute("disabled", "");
    setLoadingBtn(true);
    const response = await request("auth/signin", "POST", {
      email: loginData.email,
      password: loginData.password,
    });
    if (response.status != 200) {
      //error occurred
      e.target.removeAttribute("disabled");
      setLoadingBtn(false);
      alert.error(response.body.error);
    } else {
      //redirect back to dashboard
      alert.success(response.body.message);
      dispatch(
        storeauth({
          user: response.body.data.user,
          token: response.body.data.token,
          userType: type,
          loggedIn: true,
        })
      );
      setLoadingBtn(false);
      setRedirectTo(`/${type}/dashboard`);
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
    setLoginData({ ...loginData, ...data });
  };
  if (redirectTo == "") {
    return (
      <EmptyTemplate>
        <div className="row w-100 card py-3 px-4">
          <b className="text-yellow action-text">Sign in to start shopping!</b>
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
                <label className="label">Password</label>
                <div className="input-group">
                  <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="*********"
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fa fa-key"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <button
                  onClick={handleSubmit}
                  className="btn color-yellow text-white submit-btn btn-block"
                >
                  Login {loadingIcon}
                </button>
              </div>
              <div className="form-group d-flex justify-content-between col-form-label">
                Problem signing in?
                <Link
                  to={"/" + type + "/forgot"}
                  className="col-form-label text-yellow"
                >
                  Forgot Password
                </Link>
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
  } else {
    return <Redirect to={redirectTo} />;
  }
};
export default LoginPage;
