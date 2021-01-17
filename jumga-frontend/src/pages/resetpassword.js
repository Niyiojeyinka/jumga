import EmptyTemplate from "./empttemplate";
import { useParams, Redirect } from "react-router-dom";
import { useState } from "react";
import request from "../helpers/request";
import { useAlert } from "react-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const ResetPassword = () => {
  const [resetData, setResetData] = useState({});
  const [loadingBtn, setLoadingBtn] = useState(false);
  const { type, token } = useParams();
  const alert = useAlert();
  const [redirectTo, setRedirectTo] = useState("");
  const handleSubmit = async (e) => {
    if (resetData.cpassword != resetData.password) {
      alert.show("Password not same as confirmation");
      return;
    }

    e.target.setAttribute("disabled", "");
    setLoadingBtn(true);

    const response = await request("auth/changepassword", "POST", {
      token,
      password: resetData.password,
    });
    if (response.status != 200) {
      //error occurred
      e.target.removeAttribute("disabled");
      setLoadingBtn(false);
      alert.error(response.body.error);
    } else {
      //redirect back to sign
      alert.success(response.body.message);
      setLoadingBtn(false);
      setRedirectTo(`/${type}/login`);
    }
  };

  const handleChange = (e) => {
    const data = {};
    data[e.target.name] = e.target.value;

    setResetData({ ...resetData, ...data });
  };

  const loadingIcon = loadingBtn ? (
    <i className="fa fa-circle-o-notch spin text-white"></i>
  ) : (
    <></>
  );
  if (redirectTo == "") {
    return (
      <EmptyTemplate>
        <div className="row w-100 card py-3 px-4">
          <b classNameName="text-yellow action-text">reset your password!</b>
          <br></br>
          <br></br>
          <div className="col-lg-4 mx-auto">
            <div className="auto-form-wrapper">
              <br></br>

              <div className="form-group">
                <label className="label">Password</label>
                <div className="input-group">
                  <input
                    name="password"
                    type="password"
                    onChange={handleChange}
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
                <label className="label">Password</label>
                <div className="input-group">
                  <input
                    name="cpassword"
                    type="password"
                    onChange={handleChange}
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
                  className="btn color-yellow text-white submit-btn my-2 btn-block"
                >
                  Reset Password {loadingIcon}
                </button>
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
export default ResetPassword;
