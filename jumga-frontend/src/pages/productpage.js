import ProductList from "../divisions/productslist";
import Footer from "../divisions/footer";
import Header from "../divisions/header";
import defaultImage from "../assets/images/default-product.png";
import Breadcrumb from "../components/breadcrumb";
import NumberInput from "../components/numberinput";
import { useSelector } from "react-redux";
import request from "../helpers/request";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../helpers/constant";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import WishlistToggle from "../components/wishlisttoggle";
const ProductPage = () => {
  const products = useSelector((store) => store.products);
  const [imageToShow, setImageToShow] = useState(defaultImage);
  const [product, setProduct] = useState({});
  const [imagesJSX, setImagesJSX] = useState(<></>);
  const { id } = useParams();

  useEffect(async () => {
    const response = await request("products/" + id, "GET");
    const prdt = response.body.data?.product;
    setImageToShow(
      prdt.images[0]?.slug
        ? BACKEND_BASE_URL + "" + prdt.images[0]?.slug
        : defaultImage
    );
    setProduct(prdt);
    if (prdt.images[0]?.slug) {
      const holdImagesJSX = prdt.images.map((productImg, index) => {
        console.log("hey");
        return (
          <img
            onClick={() => {
              setImageToShow(BACKEND_BASE_URL + "" + productImg.slug);
            }}
            src={BACKEND_BASE_URL + "" + productImg.slug}
            className="border m-1"
            key={"im" + index}
          />
        );
      });
      setImagesJSX(holdImagesJSX);
    }
  }, []);

  return (
    <>
      <Header>
        <div className="">
          <Breadcrumb category={"computers"} name={product?.name} />
          <br></br>
          <strong className="product-name">{product?.name}</strong>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <img src={imageToShow} width="80%" />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 feature-image-nav">
            {imagesJSX}
            <div>
              <NumberInput
                max={product.in_stock}
                getValue={(value) => {
                  console.log(value);
                }}
              />
              <button className="btn color-yellow text-white m-2">
                Add to Cart
              </button>
              <WishlistToggle product={product} />
            </div>
          </div>
        </div>
      </Header>
      <section className="row">
        <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 p-5 predefined-desc">
          <div>
            <strong>SKU</strong> :
            <i>{product.sku != null ? product.sku : "---"}</i>
          </div>
          <div>
            <strong>Model</strong> :
            <i>{product.model != null ? product.model : "---"}</i>
          </div>
          <div>
            <strong>Color</strong> :
            <i>{product.color != null ? product.color : "---"}</i>
          </div>
          <div>
            <strong>Weight</strong> :
            <i>{product.weight != null ? product.weight : "---"}</i>
          </div>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 py-1 px-5 product-description">
          <b className="desc">Description</b>
          <br></br>
          <article>
            <div
              dangerouslySetInnerHTML={{
                __html: product?.description,
              }}
            />
          </article>
        </div>
      </section>
      <section className="p-5">
        <ProductList
          products={products.random}
          showAddToWishlistBtn={true}
          title="Top Products"
        />
      </section>

      <Footer />
    </>
  );
};

export default ProductPage;
