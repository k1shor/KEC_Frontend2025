import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./cartReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    cart: cartReducer
})

const initialData = {
    cart: {
        cart_items: localStorage.getItem('cart_items') ?
            JSON.parse(localStorage.getItem('cart_items')) : []
    }
}

export const store = createStore(rootReducer, initialData, applyMiddleware(thunk))