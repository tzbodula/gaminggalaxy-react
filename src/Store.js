import {createContext, useReducer} from 'react';

/*
Context provides a way to pass data through your project without having to
pass specific properties down manually at every component.

Think of context's like global variables for react.

*/

export const Store = createContext(); //Creates a Context for the Store

console.log("Store file accessed!")

/*
The initial state for the store, will get the cartItems from the localStorage and turn them into a JSON object. 

If no cartItems exist, then return an empty array. 
*/

const initialState = { 
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
};

function reducer(state, action) {
    switch(action.type) {
        case 'CART_ADD_ITEM':
        //Add To Cart
          const newItem = action.payload;
          const itemExists = state.cart.cartItems.find(
            (item) => item._id === newItem._id
          );
          const cartItems = itemExists
          ? state.cart.cartItems.map((item) =>
            item._id === itemExists._id ? newItem : item
          )
          : [...state.cart.cartItems, newItem];
          localStorage.set('cartItems', JSON.stringify(cartItems));
          return { ...state, cart: { ...state.cart, cartItems }};
        case 'CART_REMOVE_ITEM': {
            const cartItems = state.cart.cartItems.filter(
              (item) => item._id !== action.payload._id  
            );
            localStorage.set("cartItems", JSON.stringify(cartItems));
            return {...state, cart: {...state.cart, cartItems}};
        }
        default:
          return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Store.Provider value={value}>{props.childern}</Store.Provider>
}