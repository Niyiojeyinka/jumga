import EmptyTemplate from "./empttemplate";

const LoginPage = () => {
  const handleChange = () => {};
  return (
    <EmptyTemplate>
      <div class="row w-100">
        <div class="col-lg-4 mx-auto">
          <div class="auto-form-wrapper">
            <b className="text-yellow action-text">
              Sign in to start shopping!
            </b>
            <br></br>
            <form action="" method="post">
              <div class="form-group">
                <label class="label">Email Address</label>
                <div class="input-group">
                  <input
                    name="email"
                    type="text"
                    class="form-control"
                    placeholder="Email Address"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="label">Password</label>
                <div class="input-group">
                  <input
                    name="password"
                    type="password"
                    class="form-control"
                    placeholder="*********"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fa fa-key"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <button class="btn color-yellow text-white submit-btn btn-block">
                  Login
                </button>
              </div>
              <div class="form-group d-flex justify-content-between col-form-label">
                Problem signing in?
                <a
                  href="#"
                  class="text-small col-form-label forgot-password text-black"
                >
                  Forgot Password
                </a>
              </div>
              <div class="text-block text-center my-3 col-form-label">
                <span class="text-small col-form-label font-weight-semibold">
                  Not a member ?
                </span>
                <a href="register.html" class="col-form-label text-yellow">
                  Create new account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </EmptyTemplate>
  );
};
export default LoginPage;
