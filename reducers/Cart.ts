export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  LOAD_CART: "LOAD_CART",
};

// Actualizar localStorage con el carrito actual
export const updateLocalStorage = (state: any) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("cart", JSON.stringify(state));
  }
};

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTIONS_TYPES.ADD_TO_CART]: (state: any, action: any) => {
    const { id } = action.payload;
    const productInCartIndex = state.findIndex((item: any) => item.id === id);

    if (productInCartIndex >= 0) {
      const newState = [
        ...state.slice(0, productInCartIndex),
        {
          ...state[productInCartIndex],
          quantity: state[productInCartIndex].quantity + 1,
        },
        ...state.slice(productInCartIndex + 1),
      ];

      updateLocalStorage(newState);
      return newState;
    }

    const newState = [...state, { ...action.payload, quantity: 1 }];

    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state: any, action: any) => {
    const { id } = action.payload;
    const newState = state.filter((item: any) => item.id !== id);

    updateLocalStorage(newState);
    return newState;
  },
  [CART_ACTIONS_TYPES.LOAD_CART]: (state: any, action: any) => {
    return action.payload;
  },
};

export const cartReducer = (state: any, action: any) => {
  const { type: actionType } = action;
  const updateState = UPDATE_STATE_BY_ACTION[actionType];
  return updateState ? updateState(state, action) : state;
};

export const cartInitialState = [];
