import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearCart, removeFromCart, updateCart } from "../components/Reducer/cartActions";

const Cart = () => {
    const cart_items = useSelector((store) => store.cart.cart_items);

    const subtotal = cart_items.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.quantity),
        0
    );

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const proceedToCheckout = e => {
        e.preventDefault()
        sessionStorage.setItem('amount', subtotal)
        navigate('/checkout')
    }

    const update_cart = (cart_item, choice) => e => {
        e.preventDefault()
        if (choice === '-') {
            let newQty = Number(cart_item.quantity) - 1
            if (newQty <= 0) {
                Swal.fire('Attention!', 'Cannot decrease quantity. Try removing instead.', 'warning')
            }
            else {
                dispatch(updateCart({ ...cart_item, quantity: newQty }))
            }
        }
        else {
            let newQty = Number(cart_item.quantity) + 1
            console.log(cart_item, newQty)
            if (newQty > cart_item.stock) {
                Swal.fire('Attention!', 'Cannot increase quantity. Quantity exceeds stock.', 'warning')
            }
            else {
                dispatch(updateCart({ ...cart_item, quantity: newQty }))
            }
        }
    }

    const remove_from_cart = (id) => e => {
        e.preventDefault()
        dispatch(removeFromCart(id))
    }

    const clear_cart = e => {
        e.preventDefault()
        dispatch(clearCart())
    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="mx-auto max-w-6xl p-4 md:p-6">

                {/* Header */}
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold md:text-3xl">Cart</h1>
                        <p className="text-sm opacity-70">
                            {cart_items.length} item{cart_items.length !== 1 ? "s" : ""}
                        </p>
                    </div>

                    <div className="stats bg-base-100 shadow">
                        <div className="stat py-3">
                            <div className="stat-title">Subtotal</div>
                            <div className="stat-value text-lg md:text-2xl">
                                Rs. {subtotal}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Empty state */}
                {cart_items.length === 0 ? (
                    <div className="card bg-base-100 shadow">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Your cart is empty</h2>
                            <p className="opacity-70">
                                Add some products to see them here.
                            </p>
                            <div className="card-actions">
                                <button className="btn btn-primary">
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid gap-4 lg:grid-cols-12">

                        {/* Cart Items */}
                        <div className="lg:col-span-8">
                            <div className="card bg-base-100 shadow">
                                <div className="card-body p-0">
                                    <div className="overflow-x-auto">
                                        <table className="table table-zebra">
                                            <thead>
                                                <tr className="text-center">
                                                    <th className="w-16">SNO</th>
                                                    <th className="text-left">Product</th>
                                                    <th className="w-32">Unit Price</th>
                                                    <th className="w-40">Qty</th>
                                                    <th className="w-32">Total</th>
                                                    <th className="w-28">Remove</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {cart_items.map((item, i) => {
                                                    const itemTotal =
                                                        Number(item.quantity) *
                                                        Number(item.price);

                                                    return (
                                                        <tr
                                                            key={item.product}
                                                            className="align-middle"
                                                        >
                                                            <td className="text-center font-semibold">
                                                                {i + 1}
                                                            </td>

                                                            <td className="text-left">
                                                                <div className="flex items-center gap-3">
                                                                    <div className="avatar">
                                                                        <div className="h-16 w-16 rounded-xl ring-1 ring-base-300">
                                                                            <img
                                                                                src={`${API}/${item.image}`}
                                                                                alt={item.name}
                                                                                className="object-cover"
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="min-w-0">
                                                                        <div className="font-semibold line-clamp-2">
                                                                            {item.name}
                                                                        </div>
                                                                        <div className="text-xs opacity-60">
                                                                            ID: {item.product}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Mobile quantity */}
                                                                <div className="mt-2 flex flex-wrap gap-2 lg:hidden">
                                                                    <span className="badge badge-ghost">
                                                                        Rs. {item.price} / unit
                                                                    </span>

                                                                    <span className="badge badge-ghost flex items-center gap-2">
                                                                        Qty:
                                                                        <button className="btn btn-xs btn-outline btn-error px-2 transition-all" onClick={update_cart(item, '-')}>
                                                                            −
                                                                        </button>

                                                                        <span className="font-semibold">
                                                                            {item.quantity}
                                                                        </span>

                                                                        <button className="btn btn-xs btn-outline btn-success px-2 transition-all" onClick={update_cart(item, '+')}>
                                                                            +
                                                                        </button>
                                                                    </span>

                                                                    <span className="badge badge-ghost">
                                                                        Total: Rs. {itemTotal}
                                                                    </span>
                                                                </div>
                                                            </td>

                                                            <td className="text-center hidden lg:table-cell">
                                                                Rs. {item.price}
                                                            </td>

                                                            {/* Desktop quantity */}
                                                            <td className="text-center hidden lg:table-cell">
                                                                <div className="inline-flex items-center gap-2 justify-center">
                                                                    <button className="btn btn-xs btn-outline btn-error px-2 transition-all" onClick={update_cart(item, '-')}>
                                                                        −
                                                                    </button>

                                                                    <span className="font-semibold">
                                                                        {item.quantity}
                                                                    </span>

                                                                    <button className="btn btn-xs btn-outline btn-success px-2 transition-all" onClick={update_cart(item, '+')}>
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </td>

                                                            <td className="text-center font-semibold hidden lg:table-cell">
                                                                Rs. {itemTotal}
                                                            </td>

                                                            <td className="text-center">
                                                                <button
                                                                    className="btn btn-error btn-sm btn-outline"
                                                                    title="Remove item"
                                                                    onClick={remove_from_cart(item.product)}
                                                                >
                                                                    ✕
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>

                                            <tfoot>
                                                <tr>
                                                    <td colSpan={3}>
                                                        <button className="btn btn-error" onClick={clear_cart}>
                                                            Clear Cart
                                                        </button>
                                                    </td>

                                                    <td colSpan={3}>
                                                        <div className="flex items-center justify-between px-4 py-3">
                                                            <span className="font-semibold">
                                                                Subtotal
                                                            </span>
                                                            <span className="text-lg font-bold">
                                                                Rs. {subtotal}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-4">
                            <div className="card bg-base-100 shadow lg:sticky lg:top-6">
                                <div className="card-body">
                                    <h2 className="card-title">Order Summary</h2>

                                    <div className="mt-2 space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="opacity-70">Items</span>
                                            <span>
                                                {cart_items.length} item
                                                {cart_items.length !== 1 ? "s" : ""}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="opacity-70">Subtotal</span>
                                            <span className="font-semibold">
                                                Rs. {subtotal}
                                            </span>
                                        </div>
                                        <div className="divider my-2" />
                                        <div className="flex justify-between text-base">
                                            <span className="font-semibold">Total</span>
                                            <span className="font-bold">
                                                Rs. {subtotal}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="card-actions mt-4">
                                        {/* <Link to="/checkout" className="w-full"> */}
                                        <button className="btn btn-primary btn-block" onClick={proceedToCheckout}>
                                            Proceed to Checkout
                                        </button>
                                        {/* </Link> */}
                                        <Link to="/products" className="w-full">
                                            <button className="btn btn-ghost btn-block">
                                                Continue Shopping
                                            </button>
                                        </Link>
                                    </div>

                                    <div className="mt-3 text-xs opacity-60">
                                        Taxes/shipping (if any) will be calculated at
                                        checkout.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile bottom bar */}
                {cart_items.length > 0 && (
                    <div className="btm-nav lg:hidden">
                        <button className="active" onClick={proceedToCheckout}>
                            <span className="btm-nav-label font-semibold">
                                Total: Rs. {subtotal}
                            </span>
                        </button>
                        <button>
                            <span className="btm-nav-label">Checkout</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
