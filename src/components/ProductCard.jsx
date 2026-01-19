import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../constants'

const ProductCard = ({ product }) => {
  return (
    <div className="w-full">
      <div className="group w-full overflow-hidden border border-slate-200 bg-white transition hover:border-slate-300">
        {/* Image */}
        <Link to={`/product/${product._id}`} className="block">
          <div className="aspect-[4/3] w-full bg-slate-50">
            <img
              src={`${API}/${product.product_image}`}
              alt={product.product_name || 'Product'}
              className="h-full w-full object-contain p-3 transition group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="p-4">
          <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold text-slate-900 sm:text-base">
            {product.product_name}
          </h3>

          <p className="mt-2 text-base font-bold text-slate-900">
            Rs.{product.product_price}
          </p>

          <div className="mt-4">
            <Link
              to={`/product/${product._id}`}
              className="inline-flex w-full items-center justify-center bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
