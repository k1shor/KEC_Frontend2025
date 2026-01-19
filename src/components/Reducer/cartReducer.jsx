const initialData = {
    cart_items: []
}

const cartReducer = (state = initialData, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {...state,
                cart_items: [...state.cart_items, action.payload]
            }

        case "REMOVE_FROM_CART":

        case "UPDATE_CART":
            console.log(action)
            return {
                ...state, 
                cart_items: state.cart_items.map(item => 
                    item.product === action.payload.product ? action.payload : item 
                )
            }

        case "CLEAR_CART":

        default:
            return state
    }
}

export default cartReducer