import React from "react";
import {
  FaTruck,
  FaTags,
  FaHeadset,
  FaHandshake,
  FaShieldAlt,
  FaBoxOpen,
  FaRecycle,
  FaCreditCard,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Quality Products",
      desc: "We carefully select and verify every product to ensure excellent quality and durability.",
      icon: <FaBoxOpen className="text-4xl text-primary" />,
    },
    {
      title: "Attractive Prices",
      desc: "Get the best value for your money with affordable pricing and great discounts.",
      icon: <FaTags className="text-4xl text-secondary" />,
    },
    {
      title: "Fast Delivery",
      desc: "We ensure quick and reliable delivery so your products reach you on time.",
      icon: <FaTruck className="text-4xl text-accent" />,
    },
    {
      title: "24/7 Customer Support",
      desc: "Our friendly support team is here to help you anytime via phone or chat.",
      icon: <FaHeadset className="text-4xl text-primary" />,
    },
    {
      title: "Secure Payments",
      desc: "Multiple payment options protected with strong encryption and security.",
      icon: <FaCreditCard className="text-4xl text-secondary" />,
    },
    {
      title: "Easy Returns & Exchange",
      desc: "Not satisfied with your order? Enjoy hassle-free returns and exchanges.",
      icon: <FaRecycle className="text-4xl text-accent" />,
    },
    {
      title: "Trusted & Reliable",
      desc: "We believe in honesty and transparency — your trust means everything.",
      icon: <FaHandshake className="text-4xl text-primary" />,
    },
    {
      title: "Warranty & Guarantee",
      desc: "Many of our products come with warranty coverage for your peace of mind.",
      icon: <FaShieldAlt className="text-4xl text-secondary" />,
    },
  ];

  return (
    <div className="bg-base-200 py-12 md:py-20">
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold underline text-primary">
          Our Services
        </h1>

        <p className="text-base-content/70 mt-4">
          At <span className="font-semibold">Our Store</span>, we don’t just sell
          products — we provide a complete shopping experience that is safe,
          convenient, affordable, and reliable. Our goal is to make sure you
          enjoy every step of your shopping journey with us.
        </p>
      </div>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="card-body items-center text-center">
              {service.icon}
              <h2 className="card-title mt-3">{service.title}</h2>
              <p className="text-sm text-base-content/70">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Section */}
      <div className="text-center max-w-3xl mx-auto mt-12 px-4">
        <p className="text-base-content/70">
          We are constantly improving our services to give you the best
          experience possible. Thank you for choosing{" "}
          <span className="font-semibold">Our Store</span>. Your satisfaction is
          our priority.
        </p>
      </div>
    </div>
  );
};

export default Services;
