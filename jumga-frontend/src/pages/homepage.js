import Benefits from "../divisions/benefits";
import Reviews from "../divisions/reviews";
import ProductList from "../divisions/productslist";
import Footer from "../divisions/footer";
import Header from "../divisions/header";

const HomePage = () => {
  return (
    <>
      <Header>
        <Slider />
      </Header>
      <section className="p-5">
        <ProductList />
      </section>
      <Benefits />

      <section className="p-5">
        <ProductList />
      </section>
      <section className="p-5">
        <Reviews />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
