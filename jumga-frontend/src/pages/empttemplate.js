import ProductList from "../divisions/productslist";
import Footer from "../divisions/footer";
import Header from "../divisions/header";
import OverlayLoading from "../components/overlayloading";
import { useState, useEffect } from "react";
const EmptyTemplate = (props) => {
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
        <ProductList showAddToWishlistBtn={true} />
      </section>

      <Footer />
    </OverlayLoading>
  );
};

export default EmptyTemplate;
