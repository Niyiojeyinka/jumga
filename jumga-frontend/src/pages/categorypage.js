import Benefits from "../divisions/benefits";
import Reviews from "../divisions/reviews";
import ProductList from "../divisions/productslist";
import ProductListing from "../divisions/productlisting";
import Footer from "../divisions/footer";
import Header from "../divisions/header";
import Slider from "../components/slider";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import request from "../helpers/request";
import storeslider from "../actions/storeslider";
import OverlayLoading from "../components/overlayloading";
import { useParams } from "react-router-dom";
const CategoryPage = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { category } = useParams();
  useEffect(async () => {
    //fetch data and dispatch
    if (!loaded) {
      setTimeout(() => setLoaded(true), 1000); // 10초 뒤에
    }
    const sliderresponse = await request("page/sliders", "GET");
    dispatch(storeslider(sliderresponse.body?.data.sliders[0]));
    const res = await request("products/" + category + "/9/0", "GET");
    if (res.status == 200) {
      const products = res.body.data.products;
      setCategoryProducts(products);
    } else {
      setCategoryProducts([]);
    }
  }, [loaded]);

  return (
    <OverlayLoading loaded={loaded}>
      <Header>
        <Slider />
      </Header>
      <section className="p-5">
        <ProductList
          productListingPageType={true}
          products={categoryProducts}
          title={category}
        />
      </section>

      <Footer />
    </OverlayLoading>
  );
};

export default CategoryPage;
