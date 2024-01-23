import React from "react";

import HeaderSecondary from "../partials/HeaderSecondary";

function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <HeaderSecondary />
      <main data-aos="zoom-in" className="flex-grow">
        <section className="bg-">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 mb-4">
                  Let’s get you{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
                    back up on your feet
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  Enter the email address you used when you signed up for your
                  account, and we’ll email you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-800 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="form-input w-full text-gray-800"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn rounded-none text-white bg-yellow-600 hover:bg-yellow-500 hover:text-black w-full">
                        Send reset link
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResetPassword;
