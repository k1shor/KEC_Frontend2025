import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
  };

  return (
    <div className="p-4 md:p-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-base-content/70 max-w-xl mx-auto">
          Have questions or need support? Reach out to us using the details
          below or send us a message through the form.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">

        {/* Contact Info Card */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body space-y-2">
            <h2 className="card-title text-2xl mb-2">Our Office</h2>

            {/* Tighter line spacing here */}
            <div className="leading-tight space-y-1">
              <p>
                <span className="font-semibold">Address:</span> Lagankhel,Lalitpur
              </p>

              <p>
                <span className="font-semibold">Phone:</span>5423889
              </p>

              <p>
                <span className="font-semibold">Email:</span>kishor@evovle.com
              </p>

              <p>
                <span className="font-semibold">Website:</span>www.ourstore.com
              </p>
            </div>

            <p className="text-sm text-base-content/70 mt-3">
              We are available Sunday–Friday, 10:00 AM to 6:00 PM. We’ll try
              our best to respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="label" htmlFor="email">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="someone@something.com"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label" htmlFor="subject">
                  <span className="label-text font-medium">Subject</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="How can we help you?"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="label" htmlFor="message">
                  <span className="label-text font-medium">Message</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your message here..."
                />
              </div>

              <button type="submit" className="btn btn-primary w-full mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="max-w-5xl mx-auto">
        <div className="card bg-base-200 shadow-inner">
          <div className="card-body">
            <h3 className="text-lg font-semibold mb-1">Find Us</h3>
            <p className="text-sm text-base-content/70 mb-3 leading-tight">
              We are located at Lagankhel,Lalitpur. You can visit our store
              during working hours or contact us for directions.
            </p>
            <div className="h-40 rounded-xl bg-base-300 flex items-center justify-center text-sm text-base-content/60">
              Map / location preview can go here.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
