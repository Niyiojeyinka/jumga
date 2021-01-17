import ProductList from "../divisions/productslist";
import Footer from "../divisions/footer";
import Header from "../divisions/header";
import TV from "../assets/images/tv.jpg";
import Breadcrumb from "../components/breadcrumb";
import NumberInput from "../components/numberinput";
import { useDispatch, useSelector } from "react-redux";
import request from "../helpers/request";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(async () => {
    const response = await request("products/" + id, "GET");
    const prdt = response.body.data?.product;
    setProduct(prdt);
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
            <img src={TV} width="80%" />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 feature-image-nav">
            <img src={TV} className="border m-1" />

            <img src={TV} className="border m-1" />
            <div>
              <NumberInput
                max={100}
                getValue={(value) => {
                  console.log(value);
                }}
              />
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
        <ProductList title="Recent Product" />
      </section>

      <Footer />
    </>
  );
};

export default ProductPage;
