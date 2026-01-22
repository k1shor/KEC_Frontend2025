import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingInfo } from '../components/Reducer/cartActions'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    let [shipping_info, setShippingInfo] = useState(useSelector(store => store.cart.shipping_info))

    let {street, alternate_street, city, state, postal_code, country, phone} = shipping_info

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(saveShippingInfo(shipping_info))
        navigate('/payment')
    }
    const handleChange = e => {
        setShippingInfo({...shipping_info, [e.target.name]: e.target.value})
    }
  return (
    <div className="min-h-screen bg-slate-50 py-6">
      <form className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 sm:p-6 md:p-8">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Shipping Information
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Please fill in your address details to continue.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          <div className="sm:col-span-2">
            <label htmlFor="street" className="mb-1 block text-sm font-medium text-slate-700">
              Street
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100" name='street' onChange={handleChange} value={street}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="alternate_street"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Alternate Street
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100" name='alternate_street' onChange={handleChange} value={alternate_street}
            />
          </div>

          <div>
            <label htmlFor="city" className="mb-1 block text-sm font-medium text-slate-700">
              City
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100" name='city' onChange={handleChange} value={city}
            />
          </div>

          <div>
            <label htmlFor="state" className="mb-1 block text-sm font-medium text-slate-700">
              State
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100" name='state' onChange={handleChange} value={state}
            />
          </div>

          <div>
            <label
              htmlFor="postal_code"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Postal Code
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100" name='postal_code' onChange={handleChange} value={postal_code}
            />
          </div>

          <div>
            <label htmlFor="country" className="mb-1 block text-sm font-medium text-slate-700">
              Country
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100" name='country' onChange={handleChange} value={country}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-slate-700">
              Phone
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100" name='phone' onChange={handleChange} value={phone}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Make sure your phone number is reachable for delivery updates.
          </p>

          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99] sm:w-auto"
            onClick={handleSubmit}
          >
            Save Shipping Info and Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  )
}

export default Checkout
