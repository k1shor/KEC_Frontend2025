import React, { useEffect, useState } from "react";

import CategoryCheckbox from "../components/CategoryCheckbox";
import PriceRadio from "../components/PriceRadio";
import ProductCard from "../components/ProductCard";
import { getAllProducts, getFilteredProducts } from "../api/productAPI";

const Products = () => {
    const [filters, setFilters] = useState({
        category: [],
        product_price: [],
    });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getFilteredProducts(filters)
            .then((data) => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProducts(data?.products)
                }
            }, [filters]);
    })

    const handleFilters = (filter, filterBy) => {
        setFilters((prev) => ({ ...prev, [filterBy]: filter }));
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-4 md:px-6 md:py-6">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                    {/* Sidebar Filters */}
                    <aside className="md:col-span-3 lg:col-span-2">
                        <div className="rounded-lg bg-white p-6 shadow-md md:sticky md:top-4">
                            {/* Deals */}
                            <h2 className="mb-4 text-xl font-bold text-green-600 underline">
                                Deals
                            </h2>

                            <div className="space-y-2">
                                <a
                                    href="#"
                                    className="block text-[18px] font-bold text-amber-600 hover:underline"
                                >
                                    Daily Deals
                                </a>
                                <a
                                    href="#"
                                    className="block text-[18px] font-bold text-purple-600 hover:underline"
                                >
                                    TOP Deals
                                </a>
                                <a
                                    href="#"
                                    className="block text-[18px] font-bold text-red-600 hover:underline"
                                >
                                    Flash Sales
                                </a>
                                <a
                                    href="#"
                                    className="block text-[18px] font-bold text-sky-600 hover:underline"
                                >
                                    Most Popular
                                </a>
                            </div>

                            {/* Departments */}
                            <h2 className="mt-6 text-xl font-bold text-green-600 underline">
                                Departments
                            </h2>

                            <div className="mt-3">
                                <CategoryCheckbox handleFilters={handleFilters} />
                            </div>

                            {/* Prices */}
                            <h2 className="mt-6 text-xl font-bold text-green-600 underline">
                                Prices
                            </h2>

                            <div className="mt-3">
                                <PriceRadio handleFilters={handleFilters} />
                            </div>

                            {/* Avg Reviews */}
                            <h2 className="mt-6 text-xl font-bold text-green-600 underline">
                                Avg. Reviews
                            </h2>

                            <div className="mt-3 space-y-2">
                                {[1, 2, 3, 4, 5].map((val) => (
                                    <a
                                        href="#"
                                        key={val}
                                        className="block hover:opacity-90"
                                    // onClick={(e)=>{e.preventDefault(); handleFilters(val, 'rating')}}
                                    >
                                        {/* Pure HTML stars (no MUI) */}
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <svg
                                                    key={i}
                                                    viewBox="0 0 20 20"
                                                    className={`h-5 w-5 ${i < val ? "text-yellow-400" : "text-gray-300"
                                                        }`}
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.374 2.452a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.538 1.118l-3.374-2.452a1 1 0 00-1.176 0l-3.374 2.452c-.783.57-1.838-.196-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product Cards */}
                    <main className="md:col-span-9 lg:col-span-10">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((product) => (
                                <ProductCard key={product?._id ?? product?.id} product={product} />
                            ))}
                        </div>

                        {products.length === 0 && (
                            <p className="mt-6 text-center text-gray-500">
                                No products found.
                            </p>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Products;
