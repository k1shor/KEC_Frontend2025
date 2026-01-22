import Swal from "sweetalert2"

export const addToCart = (product, quantity) => (dispatch, getState) => {
    let cart_items = getState().cart.cart_items
    let itemExists = cart_items.find(item => item.product === product._id)

    if (itemExists) {
        // update cart
        Swal.fire({
            title: "Attention!",
            text: "Item already in cart. Add Another?",
            showCancelButton: true,
            cancelButtonText: "No",
            confirmButtonText: "Yes",
            icon: "question"
        })
            .then(result => {
                if (result.isConfirmed) {
                    if (Number(itemExists.quantity) + Number(quantity) > itemExists.stock) {
                        Swal.fire("Warning!", 'quantity exceeded available stock', 'warning')
                    }
                    else {
                        let cart_item = {
                            product: product._id,
                            name: product.product_name,
                            quantity: Number(quantity) + Number(itemExists.quantity),
                            price: product.product_price,
                            image: product.product_image,
                            stock: product.count_in_stock
                        }
                        dispatch({ type: "UPDATE_CART", payload: cart_item })
                        localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))

                        Swal.fire('Congrats!', 'Quantity Updated', 'success')
                    }
                }
                else {
                    Swal.fire("Nothing changed")
                }
            })
    }
    else {
        // add item to cart

        let cart_item = {
            product: product._id,
            name: product.product_name,
            quantity: quantity,
            price: product.product_price,
            image: product.product_image,
            stock: product.count_in_stock
        }

        dispatch({ type: "ADD_TO_CART", payload: cart_item })
        localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))

        Swal.fire('Congrats!', 'Item added to cart.', 'success')
    }



}

export const updateCart = (cart_item) => (dispatch, getState) => {
    dispatch({ type: "UPDATE_CART", payload: cart_item })
    localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))

    Swal.fire('Congrats!', 'Item updated in cart.', 'success')
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({type: "REMOVE_FROM_CART", payload: id})
    localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))
    Swal.fire('Attention!', 'Item removed from cart.', 'warning')

}
export const clearCart = () => (dispatch, getState) => {
    dispatch({type: "CLEAR_CART"})
    localStorage.setItem('cart_items', JSON.stringify(getState().cart.cart_items))
    Swal.fire('Attention!', 'Cart has been cleared.', 'warning')

}

export const saveShippingInfo = (shipping_info) => (dispatch, getState) => {
    dispatch({type: "SAVE_SHIPPING_INFO", payload: shipping_info})
    localStorage.setItem('shipping_info', JSON.stringify(getState().cart.shipping_info))
    Swal.fire('Congrats!', 'Shipping Information Updated.', 'success')

}

