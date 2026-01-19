import React, { useEffect, useState } from 'react'
import { deleteProduct, getAllProducts } from '../../api/productAPI'
import { API } from '../../constants'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isLoggedIn } from '../../api/userAPI'

const AdminProducts = () => {
  let [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(false)


  useEffect(() => {
    getAllProducts()
      .then(data => {
        if (data.error) console.log(data.error)
        else setProducts(data.products)
        setRefresh(false)
      })
  }, [refresh])

  const {token} = isLoggedIn()

  const handleDelete = id => async (e) => {
    e.preventDefault()

    const res = await Swal.fire({
      title: "Delete Category?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280"
    })

    if (res.isConfirmed) {
      const data = await deleteProduct(id, token)

      if (data?.error) {
        Swal.fire("Error", data.error, "error")
      } else {
        Swal.fire("Deleted!", "Category removed successfully.", "success")
        setRefresh(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
            Products
          </h3>

          <Link to="/admin/product/new">
            <button className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 active:bg-blue-800 transition-all">
              + Add New Product
            </button>
          </Link>
        </div>

        {/* Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-200 text-slate-700 text-sm md:text-base">
                <th className="py-3 px-3 text-left">S.No.</th>
                <th className="py-3 px-3 text-left" colSpan={2}>Product</th>
                <th className="py-3 px-3 text-left">Unit Price</th>
                <th className="py-3 px-3 text-left">Stock</th>
                <th className="py-3 px-3 text-left">Rating</th>
                <th className="py-3 px-3 text-left">Category</th>
                <th className="py-3 px-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {products?.length > 0 &&
                products.map((product, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="py-3 px-3">{i + 1}</td>

                    <td className="py-3 px-3">
                      <img
                        src={`${API}/${product.product_image}`}
                        alt={product.product_name}
                        className="w-12 h-12 object-cover rounded-md shadow"
                      />
                    </td>

                    <td className="py-3 px-3 font-semibold text-slate-800">
                      {product.product_name}
                    </td>

                    <td className="py-3 px-3 text-green-700 font-medium">
                      Rs. {product.product_price}
                    </td>

                    <td className="py-3 px-3">
                      {product.count_in_stock}
                    </td>

                    <td className="py-3 px-3">
                      ⭐ {product.rating || 0}
                    </td>

                    <td className="py-3 px-3">
                      {product?.category?.category_name}
                    </td>

                    <td className="py-3 px-3 text-center space-x-2">
                      <Link to={`/admin/product/edit/${product._id}`}>
                        <button className="px-3 py-1 rounded-lg bg-yellow-400 text-black font-medium shadow hover:bg-yellow-300">
                          Update
                        </button>
                      </Link>

                      <button className="px-3 py-1 rounded-lg bg-red-500 text-white font-medium shadow hover:bg-red-600" onClick={handleDelete(product._id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {/* No products fallback */}
          {products?.length === 0 && (
            <p className="text-center py-10 text-slate-500">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminProducts
