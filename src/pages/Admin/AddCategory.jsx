import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addCategory } from '../../api/categoryAPI'
import { isLoggedIn } from '../../api/userAPI'
import Swal from 'sweetalert2'

const AddCategory = () => {
  const [category_name, setCategoryName] = useState('')
  const [loading, setLoading] = useState(false)

  const { token } = isLoggedIn()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!category_name.trim()) {
      return Swal.fire('Required', 'Please enter a category name', 'warning')
    }

    setLoading(true)

    const data = await addCategory(token, category_name)

    setLoading(false)

    if (data?.error) {
      Swal.fire('Error', data.error, 'error')
    } else {
      Swal.fire({
        title: 'Category Added 🎉',
        text: 'Do you want to add another category?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#dc2626'
      }).then(res => {
        if (res.isConfirmed) {
          setCategoryName('')
        } else {
          navigate('/admin/category')
        }
      })
    }
  }

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
        <div>
          <h3 className="text-2xl font-bold">Add New Category</h3>
          <p className="text-sm text-base-content/60">
            Create a new category for your products
          </p>
        </div>

        <Link to="/admin/category" className="btn btn-ghost">
          ⬅ Back to Categories
        </Link>
      </div>

      {/* Card */}
      <div className="card bg-base-100 shadow-md max-w-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text font-medium">Category Name</span>
              </label>

              <input
                type="text"
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
                  loading ? 'btn-disabled' : ''
                }`}
              >
                {loading ? 'Saving...' : 'Add Category'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
