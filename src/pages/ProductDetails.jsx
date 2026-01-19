import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductDetails, getRelatedProducts } from '../api/productAPI'
import { API } from '../constants'
import ProductCard from '../components/ProductCard'
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/Reducer/cartActions'

const ProductDetails = () => {
    const { id } = useParams()

    let [product, setProduct] = useState({})
    let [quantity, setQuantity] = useState(1)

    let [relatedProducts, setRelatedProducts] = useState([])

    const handleChange = e => {
        setQuantity(e.target.value)
    }

    const dispatch = useDispatch()

    const handleAddToCart = e => {
        e.preventDefault()
        dispatch(addToCart(product, quantity))
    }

    useEffect(() => {
        getProductDetails(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setProduct(data.product)
                    getRelatedProducts(id)
                        .then(data => {
                            if (data.error) {
                                console.log(data.error)
                            }
                            else {
                                setRelatedProducts(data.products)
                            }
                        })
                }
            })
    }, [id])

    return (
        <div className="min-h-screen bg-white">
            {/* Main */}
            <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Image */}
                    <div className="w-full">
                        <div className="aspect-square w-full bg-slate-50">
                            <img
                                src={`${API}/${product.product_image}`}
                                alt=""
                                className="h-full w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-5 lg:pt-8">
                        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            {product.product_name}
                        </h2>

                        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-slate-700">
                            <span className="text-lg font-semibold text-slate-900">
                                Rs.{product.product_price}
                            </span>
                            <span className="text-sm">
                                <span className="font-medium">Stock:</span> {product.count_in_stock}
                            </span>
                            <span className="text-sm">
                                <span className="font-medium">Rating:</span> {product.rating}
                            </span>
                        </div>

                        <div className="border-t border-slate-200 pt-5">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                                Description
                            </h3>
                            <p className="mt-2 leading-relaxed text-slate-600">
                                {product.product_description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    defaultValue={1}
                                    max={product.count_in_stock}
                                    onChange={handleChange}
                                    className="mt-1 w-28 border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
                                />
                            </div>

                            <button
                                className="w-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99] sm:w-auto"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>

                        <p className="text-sm text-slate-500">
                            Available stock may change during checkout.
                        </p>
                    </div>
                </div>
            </div>

            {/* Related */}
            <div className="border-t border-slate-200">
                <div className="mx-auto max-w-6xl px-4 py-10">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">
                            Related Products
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {relatedProducts.length > 0 &&
                            relatedProducts.slice(0, 4).map(product => {
                                return (
                                    <div key={product?._id || product?.id}>
                                        <ProductCard product={product} />
                                    </div>
                                )
                            })}
                    </div>

                    {relatedProducts.length === 0 && (
                        <p className="text-sm text-slate-500">
                            No related products found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
