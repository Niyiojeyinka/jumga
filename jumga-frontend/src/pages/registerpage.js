import EmptyTemplate from "./empttemplate";

const RegisterPage = () => {
  const handleChange = () => {};
  return (
    <EmptyTemplate>
      <div className="card p-4">
        <b className="text-yellow action-text">Sign up to start shopping!</b>
        <br></br>
        <br></br>
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
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="kenya">Kenya</option>
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
        <div class="text-block text-center my-3 col-form-label">
          <span class="text-small col-form-label font-weight-semibold">
            Already have an account ?
          </span>
          <a href="register.html" class="col-form-label text-yellow ml-2">
            Sign in here
          </a>
        </div>
        <button className="btn color-yellow text-white ml-5">Register</button>
      </div>
    </EmptyTemplate>
  );
};
export default RegisterPage;