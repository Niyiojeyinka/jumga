export default {
  loading: {
    label: "",
    icon: "circle-o-notch spin",
    disabled: true,
  },
  normal: {
    light: true,
    dark: true,
  },
  wishlist: {
    light: false,
    dark: true,
    add: {
      label: "Add to wishlist",
      icon: "heart",
      disabled: false,
    },
    remove: {
      label: "Remove from wishlist",
      icon: "trash",
      disabled: false,
    },
  },
  cart: {
    light: false,
    dark: true,
    add: {
      label: "Add to Cart",
      icon: "shopping-cart",
      disabled: false,
    },
    remove: {
      label: "Remove from Cart",
      icon: "trash",
      disabled: false,
    },
  },
  order: {
    light: false,
    dark: true,
    cancel: {
      label: "Cancel",
      icon: "close",
      disabled: false,
    },
    return: {
      label: "Return",
      icon: "share",
      disabled: false,
    },
  },
};
