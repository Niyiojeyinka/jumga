import ProductList from "../divisions/productslist";
import Footer from "../divisions/footer";
import Header from "../divisions/header";
import { useSelector } from "react-redux";
import OverlayLoading from "../components/overlayloading";
import { useState, useEffect } from "react";
const EmptyTemplate = (props) => {
  const products = useSelector((store) => store.products);
  const [loaded, setLoaded] = useState(false);
  useEffect(async () => {
    //fetch data and dispatch
    if (!loaded) {
      setTimeout(() => setLoaded(true), 600); // 10초 뒤에
    }
  }, [loaded]);
  return (
    <OverlayLoading loaded={loaded}>
      <Header>{props.children}</Header>
      <section className="p-5">
        <ProductList
          products={products.random}
          productListingPageType={true}
          title="Top Products"
        />
      </section>

      <Footer />
    </OverlayLoading>
  );
};

export default EmptyTemplate;
