/** help remove a product from products array
 *
 * @param {*} productID id of product to remove
 * @param {*} products  products array
 */
const removeFromProducts = (productID, products) => {
  return products?.filter((product, index) => {
    return product?.id != productID;
  });
};

export default removeFromProducts;
