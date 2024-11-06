import {
  ADD_TO_CART,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
  TOGGLE_CART_MODAL,
  OPEN_FORM_MODAL,
  CLOSE_FORM_MODAL,
  TOGGLE_SUCCESS_MODAL,
} from "../actions/cartActions";

const initialState = {
  count: 0,
  cartItems: [],
  isCartModalOpen: false,
  isFormModalOpen: false,
  isSuccessModalOpen: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        return {
          ...state,
          count: state.count + 1,
          cartItems: [
            ...state.cartItems,
            {
              ...action.payload,
              mealCount: 1,
              totalPrice: action.payload.price,
            },
          ],
        };
      }
      return state;
    }

    case INCREASE_CART_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload) {
            const newMealCount = item.mealCount + 1;
            return {
              ...item,
              mealCount: newMealCount,
              totalPrice: parseFloat(item.price) * newMealCount,
            };
          }
          return item;
        }),
      };
    }

    case DECREASE_CART_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.reduce((acc, item) => {
          if (item.id === action.payload) {
            if (item.mealCount === 1) {
              return acc;
            }
            const newMealCount = item.mealCount - 1;
            acc.push({
              ...item,
              mealCount: newMealCount,
              totalPrice: item.price * newMealCount,
            });
          } else {
            acc.push(item);
          }
          return acc;
        }, []),
        count:
          state.cartItems.filter(
            (item) => item.id === action.payload && item.mealCount === 1
          ).length > 0
            ? state.count - 1
            : state.count,
      };
    }

    case TOGGLE_CART_MODAL:
      return { ...state, isCartModalOpen: !state.isCartModalOpen };

    case OPEN_FORM_MODAL:
      return {
        ...state,
        isCartModalOpen: false,
        isFormModalOpen: !state.isFormModalOpen,
      };

    case CLOSE_FORM_MODAL:
      return { ...state, isFormModalOpen: false };

    case TOGGLE_SUCCESS_MODAL:
      return { ...state, isSuccessModalOpen: !state.isSuccessModalOpen };

    default:
      return state;
  }
};

export default cartReducer;
