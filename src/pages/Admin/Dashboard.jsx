import React from "react";
import AdminSidebar from "../../components/layout/admin/AdminSidebar";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-base-content/70 text-sm">
            Overview & insights of your store
          </p>
        </div>
      </div>

      {/* Hero Card */}
      <div className="card bg-base-100 shadow-md mb-6">
        <div className="card-body grid md:grid-cols-2 gap-4 items-center">

          {/* Text */}
          <div>
            <h2 className="card-title text-2xl">
              Welcome Back 👋
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              Manage categories, products, users and orders —
              everything you need to keep your store running smoothly.
            </p>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <svg
              width="260"
              height="160"
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
            >
              <rect width="600" height="400" rx="18" fill="#E5E7EB" />
              <rect x="60" y="80" width="480" height="260" rx="12" fill="white" />
              <rect x="100" y="140" width="160" height="20" rx="6" fill="#CBD5F5" />
              <rect x="100" y="180" width="120" height="20" rx="6" fill="#E5E7EB" />
              <rect x="100" y="220" width="140" height="20" rx="6" fill="#E5E7EB" />
              <circle cx="440" cy="200" r="60" fill="#93C5FD" />
              <path
                d="M400 200 L430 230 L480 170"
                stroke="white"
                strokeWidth="10"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">1,230</div>
          <div className="stat-desc">↗︎ 12% since last month</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Products</div>
          <div className="stat-value">320</div>
          <div className="stat-desc">↗︎ 5 new today</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Orders</div>
          <div className="stat-value">890</div>
          <div className="stat-desc">↘︎ 2% this week</div>
        </div>

        <div className="stat bg-base-100 shadow">
          <div className="stat-title">Revenue</div>
          <div className="stat-value">Rs. 4.2L</div>
          <div className="stat-desc">↗︎ Stable growth</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
