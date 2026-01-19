import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductDetails, updateProduct } from '../../api/productAPI'
import { getAllCategories } from '../../api/categoryAPI'
import { API } from '../../constants'
import { isLoggedIn } from '../../api/userAPI'
import Swal from 'sweetalert2'

const UpdateProduct = () => {
  let [product, setProduct] = useState({})
  const { id } = useParams()
  let sel_ref = useRef()
  let [categories, setCategories] = useState([])
  let [product_image, setProductImage] = useState('')
  let [success, setSuccess] = useState(false)

  useEffect(() => {
    getAllCategories()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          setCategories(data.categories)
        }
      })
  }, [])

  useEffect(() => {
    getProductDetails(id)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data)
          setProduct({...data.product, category: data.product?.category?._id})
          sel_ref.current.value = data.product?.category?._id
          setProductImage(data.product.product_image)
          setSuccess(false)
        }
      })
  }, [success])

  let { product_name, product_price, product_description, count_in_stock } = product

  const handleChange = e => {
    if (e.target.name === 'product_image') {
      setProduct({ ...product, [e.target.name]: e.target.files[0] })
    }
    else {
      setProduct({ ...product, [e.target.name]: e.target.value })
    }
  }

  const { token } = isLoggedIn()
  const handleSubmit = e => {
    e.preventDefault()
    let formdata = new FormData()
    for (var key in product) {
      formdata.append(key, product[key])
    }
    updateProduct(token, id, formdata)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          Swal.fire({
            title: 'Congrats',
            text: "Product updated successfully.",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
            position: 'bottom-right',
            timerProgressBar: true
          })
          setSuccess(true)
          
        }
      })
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
            Update Product
          </h3>
          <Link
            to="/admin/products"
            className="text-sm md:text-base text-slate-600 hover:text-slate-900 underline"
          >
            Go Back
          </Link>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Product Name */}
          <div className="flex flex-col">
            <img src={`${API}/${product_image}`} alt="" className='w-40' />

            <label
              htmlFor="product_name"
              className="mb-1 text-sm font-semibold text-slate-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              value={product_name}
              onChange={handleChange}
              className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
              placeholder="Enter product name"
            />
          </div>

          {/* Price & Stock (side by side on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="product_price"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                Price
              </label>
              <input
                type="number"
                id="product_price"
                name="product_price"
                value={product_price}
                onChange={handleChange}
                className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
                placeholder="Enter price"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="count_in_stock"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                Stock
              </label>
              <input
                type="number"
                id="count_in_stock"
                name="count_in_stock"
                value={count_in_stock}
                onChange={handleChange}
                className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
                placeholder="Available quantity"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label
              htmlFor="product_description"
              className="mb-1 text-sm font-semibold text-slate-700"
            >
              Description
            </label>
            <textarea
              id="product_description"
              name="product_description"
              value={product_description}
              onChange={handleChange}
              rows="4"
              className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 resize-none"
              placeholder="Write a short description about the product"
            ></textarea>
          </div>

          {/* Category & Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div className="flex flex-col">
              <label
                htmlFor="category"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue=""
                ref={sel_ref}
                onChange={handleChange}
                className="px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50"
              >
                <option value="" disabled>
                  Choose a category
                </option>
                {/* Add your <option> items here */}
                {
                  categories.length > 0 &&
                  categories.map(category => {
                    return <option value={category._id} key={category._id}>
                      {category.category_name}
                    </option>
                  })
                }
              </select>
            </div>

            {/* Image */}
            <div className="flex flex-col">
              <label
                htmlFor="product_image"
                className="mb-1 text-sm font-semibold text-slate-700"
              >
                Image
              </label>
              <input
                type="file"
                id="product_image"
                name='product_image'
                onChange={handleChange}
                className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm md:text-base shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition-all"
              onClick={handleSubmit}
            >
              Update Product
            </button>

            <Link
              to="/admin/products"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm md:text-base hover:bg-slate-100 transition-colors"
            >
              Cancel &amp; Go Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct
