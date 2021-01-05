import ProductList from "../divisions/productslist";
import Footer from "../divisions/footer";
import Header from "../divisions/header";

const EmptyTemplate = (props) => {
  return (
    <>
      <Header>{props.children}</Header>
      <section className="p-5">
        <ProductList showAddToWishlistBtn={true} />
      </section>

      <Footer />
    </>
  );
};

export default EmptyTemplate;
