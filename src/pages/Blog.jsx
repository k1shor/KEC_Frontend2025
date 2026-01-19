import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaTag } from "react-icons/fa";

const Blogs = () => {
  const featuredPost = {
    id: 1,
    title: "How to Choose the Best Products for Your Home",
    author: "Admin",
    date: "Jan 5, 2026",
    category: "Shopping Tips",
    excerpt:
      "Picking the right products can be confusing. Here are easy tips to help you compare quality, price, and reliability without getting overwhelmed.",
    readTime: "5 min read",
  };

  const posts = [
    {
      id: 2,
      title: "Top 10 Must-Have Gadgets in 2026",
      author: "Store Team",
      date: "Jan 3, 2026",
      category: "Tech",
      excerpt:
        "From smart home devices to everyday carry gadgets, here are ten items that can make your daily life smarter and more convenient.",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "How We Ensure Quality in Every Order",
      author: "Quality Control",
      date: "Dec 28, 2025",
      category: "Behind the Scenes",
      excerpt:
        "Get a peek into our quality check process and how we work with suppliers to make sure you receive only the best products.",
      readTime: "3 min read",
    },
    {
      id: 4,
      title: "Simple Ways to Save Money While Shopping Online",
      author: "Admin",
      date: "Dec 20, 2025",
      category: "Shopping Tips",
      excerpt:
        "Using wishlists, checking deals, and timing your purchases can save you more than you think. Here are some beginner-friendly strategies.",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Fast Delivery: How Your Order Reaches You",
      author: "Logistics Team",
      date: "Dec 10, 2025",
      category: "Delivery",
      excerpt:
        "We work with reliable partners and smart routing systems to get your package delivered on time, every time.",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "Caring for Your Products So They Last Longer",
      author: "Support Team",
      date: "Nov 30, 2025",
      category: "Care Guide",
      excerpt:
        "Maintenance tips and simple care routines that can extend the life of your electronics, clothing, and more.",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold underline text-primary">
            Blog
          </h1>
          <p className="mt-3 text-sm md:text-base text-base-content/70 max-w-2xl mx-auto">
            Read helpful tips, store updates, guides, and behind-the-scenes
            stories from our team. Stay informed and shop smarter.
          </p>
        </div>

        {/* Featured Post */}
        <section className="mb-10">
          <div className="card bg-base-100 shadow-lg md:shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500/80 to-indigo-500/80 text-white p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="badge badge-outline border-white text-white">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold">
                  {featuredPost.title}
                </h2>
                <p className="text-sm md:text-base text-slate-100/90">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-xs md:text-sm text-slate-100">
                <span className="inline-flex items-center gap-1">
                  <FaUser /> {featuredPost.author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <FaCalendarAlt /> {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <FaTag /> {featuredPost.category}
                </span>
                <span>{featuredPost.readTime}</span>
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <p className="text-sm md:text-base text-base-content/80 mb-4">
                Learn how to compare products, understand specifications, and
                make confident decisions while shopping online or offline. This
                guide is perfect for anyone who wants to avoid confusion and
                get the best value from every purchase.
              </p>
              <div className="flex justify-end">
                {/* Later you can replace `to="#"` with real blog detail routes */}
                <Link to="#" className="btn btn-primary btn-sm md:btn-md">
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog List */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Latest Posts</h2>
            {/* Placeholder for future filters/search */}
            <span className="text-xs md:text-sm text-base-content/60">
              Showing {posts.length} posts
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="card-body flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-xs text-base-content/60 mb-2">
                    <span className="inline-flex items-center gap-1">
                      <FaCalendarAlt /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FaUser /> {post.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FaTag /> {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="card-title text-base md:text-lg mb-1">
                    {post.title}
                  </h3>

                  <p className="text-sm text-base-content/70 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <Link
                      to="#"
                      className="text-xs md:text-sm font-semibold text-primary hover:underline"
                    >
                      Read more
                    </Link>
                    <span className="badge badge-outline text-[10px] md:text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
