import React, { useEffect, useState } from 'react'
import { getAllOrders, updateOrder } from '../../api/orderApi'
import { Link } from 'react-router-dom'

const Orders = () => {
    let [orders, setOrders] = useState([])
    let [success, setSuccess] = useState(false)

    useEffect(() => {
        getAllOrders().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                setOrders(data)
                setSuccess(false)
            }
        })
    }, [success])

    const handleUpdate = (id, status) => e => {
        e.preventDefault()
        updateOrder(id, status)
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    // alert('Order Updated')
                    setSuccess(true)
                }
            })
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
                {/* Header */}
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            Orders
                        </h1>
                        <p className="text-sm text-slate-600">
                            Total: <span className="font-medium">{orders.length}</span>
                        </p>
                    </div>
                </div>

                {/* Table Card */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm">
                            <thead className="bg-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-600">
                                <tr>
                                    <td className="whitespace-nowrap px-4 py-3">SNo.</td>
                                    <td className="whitespace-nowrap px-4 py-3">Order ID</td>
                                    <td className="whitespace-nowrap px-4 py-3">Placed By</td>
                                    <td className="whitespace-nowrap px-4 py-3">Order Total</td>
                                    <td className="whitespace-nowrap px-4 py-3">Order Status</td>
                                    <td className="whitespace-nowrap px-4 py-3">Action</td>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100">
                                {orders.map((order, i) => {
                                    return (
                                        <tr
                                            key={i}
                                            className="hover:bg-slate-50/70 transition-colors"
                                        >
                                            <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                                                {i + 1}
                                            </td>

                                            <td className="whitespace-nowrap px-4 py-3">
                                                <Link
                                                    to={`/order/${order._id}`}
                                                    className="font-medium text-indigo-600 underline-offset-4 hover:underline"
                                                    title="View order details"
                                                >
                                                    {order._id}
                                                </Link>
                                            </td>

                                            <td className="whitespace-nowrap px-4 py-3 text-slate-700">
                                                {order.user?.username}
                                            </td>

                                            <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-900">
                                                Rs.{order.total}
                                            </td>

                                            <td className="whitespace-nowrap px-4 py-3">
                                                <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                                                    {order.order_status}
                                                </span>
                                            </td>

                                            <td className="px-4 py-3">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    {
                                                        order.order_status != "CANCELLED" && order.order_status != "DELIVERED" &&

                                                        <button onClick={handleUpdate(order._id, "CANCELLED")} className="rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 shadow-sm hover:bg-rose-50 active:scale-[0.99] transition">
                                                            Cancel
                                                        </button>
                                                    }
                                                    {
                                                        order.order_status == "PENDING" &&
                                                        <button onClick={handleUpdate(order._id, "PROCESSING")} className="rounded-lg border border-amber-200 bg-white px-3 py-1.5 text-xs font-semibold text-amber-700 shadow-sm hover:bg-amber-50 active:scale-[0.99] transition">
                                                            PROCESS
                                                        </button>
                                                    }
                                                    {
                                                        order.order_status == "PROCESSING" &&
                                                        <button onClick={handleUpdate(order._id, "DELIVERING")} className="rounded-lg border border-sky-200 bg-white px-3 py-1.5 text-xs font-semibold text-sky-700 shadow-sm hover:bg-sky-50 active:scale-[0.99] transition">
                                                            DELIVER
                                                        </button>
                                                    }
                                                    {
                                                        order.order_status == "DELIVERING" &&
                                                        <button onClick={handleUpdate(order._id, "DELIVERED")} className="rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 active:scale-[0.99] transition">
                                                            COMPLETE
                                                        </button>
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer (optional UI only) */}
                    <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-white px-4 py-3 text-xs text-slate-600">
                        <span className="hidden sm:inline">
                            Tip: Click an Order ID to view details
                        </span>
                        <span className="ml-auto">
                            Showing <span className="font-semibold">{orders.length}</span> order
                            {orders.length !== 1 ? 's' : ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
