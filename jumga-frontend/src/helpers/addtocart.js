/** add new product to products if not exists and if exists,increase its count
 *
 * @param object product product to add
 * @param array products prev products
 * @param integer no no of product to add default:0 it will increase prev count
 * @param boolean override if true no in cart get overide ,default is false
 */
const addToCartArray = (product, products, no = 0, override = false) => {
  let found = false;

  for (let i = 0; i < products.length; i++) {
    if (product.id == products[i].id) {
      found = true;
      //increase it
      if (!override) {
        let count = no == 0 ? products[i].count + 1 : products[i].count + no;
        products[i].count = count;
      } else {
        //override
        products[i].count = no == 0 ? 1 : no;
      }

      break;
    }
  }
  if (!found) {
    //not found add to products array
    let count = no == 0 ? 1 : no;
    product.count = count;
    products.push(product);
  }

  return products;
};

export default addToCartArray;
