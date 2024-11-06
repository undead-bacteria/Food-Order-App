export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";
export const TOGGLE_CART_MODAL = "TOGGLE_CART_MODAL";
export const OPEN_FORM_MODAL = "OPEN_FORM_MODAL";
export const CLOSE_FORM_MODAL = "CLOSE_FORM_MODAL";
export const TOGGLE_SUCCESS_MODAL = "TOGGLE_SUCCESS_MODAL";

export const addToCart = (meal) => ({
  type: ADD_TO_CART,
  payload: meal,
});

export const increaseCartItem = (id) => ({
  type: INCREASE_CART_ITEM,
  payload: id,
});

export const decreaseCartItem = (id) => ({
  type: DECREASE_CART_ITEM,
  payload: id,
});

export const toggleCartModal = () => ({
  type: TOGGLE_CART_MODAL,
});

export const openFormModal = () => ({
  type: OPEN_FORM_MODAL,
});

export const closeFormModal = () => ({
  type: CLOSE_FORM_MODAL,
});

export const toggleSuccessModal = () => ({
  type: TOGGLE_SUCCESS_MODAL,
});
