import removeFromProducts from "./removefromproducts";

/** remove old product from products if  exists by descreasing it and if existing
 * count is 1 ,remove whole product
 *
 * @param {*} product product to add
 * @param {*} products prev products
 * @param {*} no no of product to add default:0 it will increase prev count
 */
const removeFromCartArray = (product, products, no = 0) => {
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (product.id == products[i].id) {
      found = true;
      //increase it
      if (products[i].count > 1) {
        let count = no == 0 ? products[i].count - 1 : products[i].count - no;
        products[i].count = count;
      } else {
        //remove the product object
        products = removeFromProducts(product.id, products);
      }

      break;
    }
  }

  return products;
};

export default removeFromCartArray;
