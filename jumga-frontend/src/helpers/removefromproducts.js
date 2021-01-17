/** help remove a product from products array
 *
 * @param integer productID id of product to remove
 * @param array products  products array
 */
const removeFromProducts = (productID, products) => {
  return products?.filter((product, index) => {
    return product?.id != productID;
  });
};

export default removeFromProducts;
