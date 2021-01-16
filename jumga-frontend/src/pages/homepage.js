import Benefits from "../divisions/benefits";
import Reviews from "../divisions/reviews";
import ProductList from "../divisions/productslist";
import Footer from "../divisions/footer";
import Header from "../divisions/header";
import Slider from "../components/slider";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import request from "../helpers/request";
import storeslider from "../actions/storeslider";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(async () => {
    //fetch data and dispatch
    const sliderresponse = await request("page/sliders", "GET");
    dispatch(storeslider(sliderresponse.body?.data.sliders[0]));
  });

  const products = useSelector((store) => store.products);
  return (
    <>
      <Header>
        <Slider />
      </Header>
      <section className="p-5">
        <ProductList
          showAddToWishlistBtn={true}
          products={products.recents}
          title="Recent Products"
        />
      </section>
      <Benefits />

      <section className="p-5">
        <ProductList
          products={products.random}
          showAddToWishlistBtn={true}
          title="Top Products"
        />
      </section>
      <section className="p-5">
        <Reviews />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
