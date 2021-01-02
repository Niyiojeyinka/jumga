import "./assets/css/colors.css";
import "./assets/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductList from "./divisions/productslist";
import Footer from "./divisions/footer";
import Header from "./divisions/header";
import TV from "./assets/images/tv.jpg";
import Breadcrumb from "./components/breadcrumb";
function App() {
  return (
    <>
      <Header>
        <div className="">
          <Breadcrumb />
          <br></br>
          <strong className="product-name">
            All in one disinfectant spray - 400ml 2020.
          </strong>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <img src={TV} width="80%" />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 feature-image-nav">
            <img src={TV} className="border m-1" />

            <img src={TV} className="border m-1" />
            <div>
              <button className="btn color-yellow text-white m-2">
                Add to Cart
              </button>
              <button className="btn color-yellow text-white">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </Header>
      <section className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 p-5 predefined-desc">
          <div>
            <strong>SKU</strong> : <i></i>
          </div>
          <div>
            <strong>Model</strong> : <i></i>
          </div>
          <div>
            <strong>Color</strong> : <i></i>
          </div>
          <div>
            <strong>Weight</strong> : <i></i>
          </div>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 py-1 px-5 product-description">
          <b className="desc">Description</b>
          <br></br>
          <article>
            FeaturesApple-designed M1 chip for a giant leap in CPU, GPU, and
            machine learning performanceGet more done with up to 20 hours of
            battery life, the longest ever in a Mac²8-core CPU delivers up to
            2.8x faster performance to fly through workflows quicker than
            ever¹8-core GPU with up to 5x faster graphics for graphics-intensive
            apps and games¹16-core Neural Engine for advanced machine
            learning8GB of unified memory so everything you do is fast and
            fluidSuperfast SSD storage launches apps and opens files in an
            instantActive cooling system sustains incredible
            performance13.3-inch Retina display with 500 nits of brightness for
            vibrant colors and incredible image detail³FaceTime HD camera with
            advanced image signal processor for clearer, sharper video
            callsStudio-quality three-microphone array captures your voice more
            clearlyNext-generation Wi-Fi 6 for faster connectivityTwo
            Thunderbolt / USB 4 ports for charging and accessoriesBacklit Magic
            Keyboard with Touch Bar and Touch ID for secure unlock and
            paymentsmacOS Big Sur with a bold new design and major app updates
            for Safari, Messages, and Maps¹ Compared with previous generation.²
            Battery life varies by use and configuration. See
            apple.com/batteries for more information.³ Display size is measured
            diagonally.
          </article>
        </div>
      </section>
      <section className="p-5">
        <ProductList />
      </section>

      <Footer />
    </>
  );
}

export default App;
