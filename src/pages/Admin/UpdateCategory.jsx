import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getCategoryDetails, updateCategory } from '../../api/categoryAPI'
import { isLoggedIn } from '../../api/userAPI'
import Swal from 'sweetalert2'

const UpdateCategory = () => {
  const [category_name, setCategoryName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  const { id } = useParams()
  const { token } = isLoggedIn()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const data = await getCategoryDetails(id)

        if (data?.error) {
          console.error(data.error)
          Swal.fire('Error', data.error, 'error')
        } else {
          setCategoryName(data.category?.category_name || '')
        }
      } catch (err) {
        console.error(err)
        Swal.fire('Error', 'Failed to fetch category details', 'error')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategory()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!category_name.trim()) {
      return Swal.fire('Required', 'Please enter a category name', 'warning')
    }

    setIsSaving(true)

    try {
      const data = await updateCategory(token, id, category_name)

      if (data?.error) {
        Swal.fire('Error', data.error, 'error')
      } else {
        Swal.fire('Success', 'Category updated successfully', 'success')
        navigate('/admin/category')
      }
    } catch (err) {
      console.error(err)
      Swal.fire('Error', 'Something went wrong while updating', 'error')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <div>
          <h3 className="text-2xl font-bold">Update Category</h3>
          <p className="text-sm text-base-content/60">
            Edit the details of your existing category
          </p>
        </div>

        <Link to="/admin/category" className="btn btn-ghost">
          ⬅ Back to Categories
        </Link>
      </div>

      {/* Card */}
      <div className="card bg-base-100 shadow-md max-w-xl">
        <div className="card-body">
          {isLoading ? (
            // Skeleton loader
            <div className="space-y-4">
              <div>
                <div className="label">
                  <span className="label-text font-medium">Category Name</span>
                </div>
                <div className="skeleton h-12 w-full" />
              </div>
              <div className="skeleton h-10 w-40" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="category_name" className="label">
                  <span className="label-text font-medium">Category Name</span>
                </label>
                <input
                  type="text"
                  id="category_name"
                  className="input input-bordered w-full"
                  placeholder="Enter category name"
                  value={category_name}
                  onChange={e => setCategoryName(e.target.value)}
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`btn btn-primary w-full md:w-auto ${
                    isSaving ? 'btn-disabled' : ''
                  }`}
                >
                  {isSaving ? 'Updating...' : 'Update Category'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default UpdateCategory
