import React, { useEffect, useState } from 'react'
import { deleteCategory, getAllCategories } from '../../api/categoryAPI'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { isLoggedIn } from '../../api/userAPI'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const { token } = isLoggedIn()

  useEffect(() => {
    setIsLoading(true)
    getAllCategories()
      .then(data => {
        if (!data?.error) {
          setCategories(data.categories || [])
        } else {
          console.error(data.error)
        }
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
        setRefresh(false)
      })
  }, [refresh])

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
      const data = await deleteCategory(id, token)

      if (data?.error) {
        Swal.fire("Error", data.error, "error")
      } else {
        Swal.fire("Deleted!", "Category removed successfully.", "success")
        setRefresh(true)
      }
    }
  }

  // Skeleton rows for loading state
  const renderSkeletonRows = () => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <tr key={idx}>
        <td>
          <div className="skeleton h-4 w-10 mx-auto" />
        </td>
        <td>
          <div className="skeleton h-4 w-32 mx-auto" />
        </td>
        <td>
          <div className="flex justify-center gap-2">
            <div className="skeleton h-8 w-16" />
            <div className="skeleton h-8 w-20" />
          </div>
        </td>
      </tr>
    ))
  }

  return (
    <div className="p-4 md:p-6">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <div>
          <h2 className="text-2xl font-bold">Categories</h2>
          <p className="text-sm text-base-content/60">
            Manage your product categories
          </p>
        </div>

        <Link to="/admin/category/new" className="btn btn-primary">
          + Add New Category
        </Link>
      </div>

      {/* Card wrapper */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body p-0">
          {/* Responsive scroll */}
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full text-center">
              <thead className="bg-base-200">
                <tr>
                  <th>#</th>
                  <th>Category Name</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {isLoading ? (
                  renderSkeletonRows()
                ) : categories?.length > 0 ? (
                  categories.map((category, i) => (
                    <tr key={category._id}>
                      <td>{i + 1}</td>
                      <td className="font-medium">
                        {category.category_name}
                      </td>
                      <td>
                        <div className="flex gap-2 justify-center">
                          <Link
                            to={`/admin/category/edit/${category._id}`}
                            className="btn btn-sm btn-warning"
                          >
                            Edit
                          </Link>

                          <button
                            onClick={handleDelete(category._id)}
                            className="btn btn-sm btn-error"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">
                      <div className="py-10 text-base-content/60">
                        No categories found. Click{" "}
                        <span className="font-semibold">"Add New Category"</span>{" "}
                        to create one.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Categories
