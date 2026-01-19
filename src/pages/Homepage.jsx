import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaTruck,
  FaTags,
  FaBoxOpen,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa";
import MyCarousel from "../components/MyCarousel";
import { MyThemeContext } from "../App";

const Homepage = () => {
  const theme = useContext(MyThemeContext);
  const isLight = theme === "LIGHT";

  const featureBullets = [
    "Curated, high-quality items from trusted vendors.",
    "Secure checkout & multiple payment options.",
    "Fast delivery and easy returns.",
    "Friendly support whenever you need help.",
  ];

  const quickServices = [
    {
      icon: <FaBoxOpen className="text-3xl text-primary" />,
      title: "Quality Products",
      desc: "Carefully selected items so you always get great quality and durability.",
    },
    {
      icon: <FaTags className="text-3xl text-secondary" />,
      title: "Attractive Prices",
      desc: "Fair pricing and exciting deals that give you more for your money.",
    },
    {
      icon: <FaTruck className="text-3xl text-accent" />,
      title: "Fast Delivery",
      desc: "Quick and reliable delivery straight to your doorstep.",
    },
    {
      icon: <FaHeadset className="text-3xl text-primary" />,
      title: "24/7 Support",
      desc: "We’re here to help with orders, queries, and anything in between.",
    },
  ];

  const stats = [
    { label: "Happy Customers", value: "5K+" },
    { label: "Products Listed", value: "1.2K+" },
    { label: "On-time Delivery", value: "98%" },
    { label: "Support Rating", value: "4.9/5" },
  ];

  return (
    <div
      className={`w-full ${
        isLight
          ? "bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 text-slate-900"
          : "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50"
      }`}
    >
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
        {/* LEFT: Hero Text */}
        <div className="lg:w-1/2 order-2 lg:order-1 space-y-5 md:space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/10 text-blue-600">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Welcome to Our Store
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Your one-stop shop for
            <span className="text-blue-500"> quality</span> &amp;{" "}
            <span className="text-blue-400">value</span>.
          </h1>

          <p
            className={`text-base md:text-lg leading-relaxed ${
              isLight ? "text-slate-600" : "text-slate-200/80"
            }`}
          >
            Discover handpicked products, irresistible prices, and fast delivery
            — all designed to make your shopping experience smooth and enjoyable.
            From everyday essentials to special finds, we&apos;ve got you covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <Link to="/contact" className="btn btn-primary rounded-full px-6">
              Contact Now
            </Link>
            <Link
              to="/products"
              className={`btn rounded-full px-6 ${
                isLight ? "btn-outline" : "btn-outline border-slate-400 text-slate-100"
              }`}
            >
              Browse Products
            </Link>
          </div>

          {/* Feature bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
            {featureBullets.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-blue-500" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="lg:w-1/2 order-1 lg:order-2 w-full">
          <div className="bg-base-100/80 rounded-2xl shadow-xl p-3 md:p-4">
            <MyCarousel />
          </div>
        </div>
      </section>

      {/* QUICK SERVICES PREVIEW (linked with Services page content) */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">What We Offer</h2>
            <p
              className={`mt-2 text-sm md:text-base ${
                isLight ? "text-slate-600" : "text-slate-300/90"
              }`}
            >
              The core services that make our store stand out: quality, pricing,
              delivery, and support — all tailored to you.
            </p>
          </div>
          <Link to="/services" className="btn btn-sm md:btn-md btn-outline rounded-full">
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickServices.map((service, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="card-body items-center text-center space-y-3">
                {service.icon}
                <h3 className="card-title text-lg md:text-xl">{service.title}</h3>
                <p className="text-xs md:text-sm text-base-content/70">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS / WHY CHOOSE US */}
      <section className="bg-base-100/60">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Why Customers Love Us</h2>
            <p
              className={`mt-2 text-sm md:text-base ${
                isLight ? "text-slate-600" : "text-slate-300/90"
              }`}
            >
              From Lagankhel,Lalitpur to your doorstep — we focus on trust,
              reliability, and a smooth shopping experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="stat bg-base-100 shadow-sm rounded-xl border border-base-200"
              >
                <div className="stat-title text-xs md:text-sm">{item.label}</div>
                <div className="stat-value text-lg md:text-2xl">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT TEASER SECTION */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
        <div className="card bg-base-100 shadow-md md:shadow-lg">
          <div className="card-body md:flex md:items-center md:justify-between gap-6">
            <div className="space-y-2 md:space-y-3">
              <h2 className="card-title text-xl md:text-2xl">
                Need help or want to visit?
              </h2>
              <p
                className={`text-sm md:text-base ${
                  isLight ? "text-slate-600" : "text-slate-300/90"
                }`}
              >
                You can find us at <span className="font-semibold">Lagankhel,Lalitpur</span>.
                Call us at <span className="font-semibold">5423889</span> or email{" "}
                <span className="font-semibold">kishor@evovle.com</span>.
              </p>
              <p className="text-xs md:text-sm text-base-content/60">
                We&apos;re available Sunday–Friday, 10:00 AM to 6:00 PM, and we&apos;ll
                do our best to respond within 24 hours.
              </p>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col gap-2 md:items-end">
              <Link to="/contact" className="btn btn-primary rounded-full px-6">
                Go to Contact Page
              </Link>
              <div className="flex items-center gap-2 text-xs md:text-sm text-base-content/70">
                <FaCreditCard />
                <span>Secure payments & easy returns.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
