import Cookies from "universal-cookie";
import { useState } from "react";
const TestPage = () => {
  const cookies = new Cookies();

  cookies.set(
    "myCat",
    JSON.stringify({
      name: "jogn yu",
      parts: [{ hand: 2 }, { eye: 2 }],
    }),
    { path: "/" }
  );
  const t = cookies.get("myCat").parts;
  for (let v of t) {
    // console.log(v);
  }

  return (
    <div
      className="tab-pane fade show active"
      id="home"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <div className="d-flex justify-content-between p-3 bg-white mb-3 align-items-center">
        <span className="font-weight-bold text-uppercase">Luxury Couch</span>
        <div>
          <img
            src="https://img.icons8.com/windows/100/000000/list.png"
            width="30"
          ></img>
          <img
            src="https://img.icons8.com/ios-filled/100/000000/squared-menu.png"
            width="25"
          ></img>
        </div>
      </div>
      <div className="row g-3 p-5"></div>
    </div>
  );
};

export default TestPage;
