import EmptyTemplate from "./empttemplate";
import { useParams, Redirect, Link } from "react-router-dom";
import { useState } from "react";
import request from "../helpers/request";
import { useAlert } from "react-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { FRONTEND_BASE_URL } from "../helpers/constant";
const RegisterPage = () => {
  const [regData, setRegData] = useState({});
  const [loadingBtn, setLoadingBtn] = useState(false);
  const { type } = useParams();
  const alert = useAlert();
  const [redirectTo, setRedirectTo] = useState("");

  const handleSubmit = async (e) => {
    if (regData.cpassword != regData.password) {
      alert.show("Password not same as confirmation");
      return;
    }
    if (!regData.email || !regData.country) {
      alert.error("All fields are required");
      return;
    }
    e.target.setAttribute("disabled", "");
    setLoadingBtn(true);
    let userReg;
    if (type == "customer") {
      userReg = {
        name: regData.firstname + " " + regData.lastname,
        email: regData.email,
        password: regData.password,
        user_type: type,
        country_code: regData.country,
        url: FRONTEND_BASE_URL,
      };
    } else {
      userReg = {
        name: regData.name,
        email: regData.email,
        password: regData.password,
        user_type: type,
        mobilephone: regData.mobilephone,
        country_code: regData.country,
        url: FRONTEND_BASE_URL,
      };
    }

    const response = await request("auth/create", "POST", userReg);
    if (response.status != 201) {
      //error occurred
      e.target.removeAttribute("disabled");
      setLoadingBtn(false);
      alert.error(response.body.error);
    } else {
      //redirect back to sign
      alert.success("Registration Successful ,Please Sign in");
      setLoadingBtn(false);
      setRedirectTo(`/${type}/login`);
    }
  };

  const handleChange = (e) => {
    const data = {};
    data[e.target.name] = e.target.value;

    setRegData({ ...regData, ...data });
  };

  const loadingIcon = loadingBtn ? (
    <i className="fa fa-circle-o-notch spin text-white"></i>
  ) : (
    <></>
  );

  const nameInput =
    type == "customer" ? (
      <div className="row">
        <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">First Name</label>
            <div className="col-sm-9">
              <input
                onChange={handleChange}
                placeholder="Firstname"
                name="firstname"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Last Name</label>
            <div className="col-sm-9">
              <input
                placeholder="Lastname"
                onChange={handleChange}
                name="lastname"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="row">
        <div className="col-md-6">
          <div className="form-group row">
            <span className="col-sm-3 col-form-label">
              {type.toUpperCase()} Name
            </span>

            <div className="col-sm-9">
              <input
                onChange={handleChange}
                placeholder="Business Name"
                name="mobilephone"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group row">
            <span className="col-sm-3 col-form-label">Mobile Number</span>

            <div className="col-sm-9">
              <input
                onChange={handleChange}
                placeholder="Business Name"
                name="mobilephone"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    );
  if (redirectTo == "") {
    return (
      <EmptyTemplate>
        <div className="card p-4">
          <b className="text-yellow action-text">Sign up to start shopping!</b>
          <br></br>
          <br></br>
          {nameInput}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                  <input
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">
                  Confirm Password
                </label>
                <div className="col-sm-9">
                  <input
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="cpassword"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Country</label>
                <div className="col-sm-9">
                  <select
                    onChange={handleChange}
                    name="country"
                    className="form-control"
                  >
                    <option value="">Choose Country...</option>
                    <option value="ng">Nigeria</option>
                    <option value="gh">Ghana</option>
                    <option value="ke">Kenya</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Email Address</label>
                <div className="col-sm-9">
                  <input
                    placeholder="Email Address"
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-block text-center my-3 col-form-label">
            <span className="text-small col-form-label font-weight-semibold">
              Already have an account ?
            </span>
            <Link
              to={`/${type}/login`}
              className="col-form-label text-yellow ml-2"
            >
              Sign in here
            </Link>
          </div>
          <button
            onClick={handleSubmit}
            className="btn color-yellow text-white submit-btn my-2 btn-block"
          >
            Sign Up {loadingIcon}
          </button>
        </div>
      </EmptyTemplate>
    );
  } else {
    return <Redirect to={redirectTo} />;
  }
};
export default RegisterPage;
