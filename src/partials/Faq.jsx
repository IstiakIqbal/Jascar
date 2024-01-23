export default function Faq() {
  return (
    <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <div className="max-w-3xl mx-auto text-center pb-2 md:pb-2">
            <h2 className="h2 mb-4">
              Frequently Asked{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <div className="py-1">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium bg-gray-900 px-5 py-4">
                <span className="text-white">How does the billing work?</span>
                <span className="transition group-open:rotate-180 text-white">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                Springerdata offers a variety of billing options, including
                monthly and annual subscription plans, as well as pay-as-you-go
                pricing for certain services. Payment is typically made through
                a credit card or other secure online payment method.
              </p>
            </details>
          </div>
          <div className="py-1">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium bg-gray-900 px-5 py-4">
                <span className="text-white">
                  {" "}
                  Can I get a refund for my subscription?
                </span>
                <span className="transition group-open:rotate-180 text-white">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                We offer a 30-day money-back guarantee for most of its
                subscription plans. If you are not satisfied with your
                subscription within the first 30 days, you can request a full
                refund. Refunds for subscriptions that have been active for
                longer than 30 days may be considered on a case-by-case basis.
              </p>
            </details>
          </div>
          <div className="py-1">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium bg-gray-900 px-5 py-4">
                <span className="text-white">
                  {" "}
                  How do I cancel my subscription?
                </span>
                <span className="transition group-open:rotate-180 text-white">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                To cancel your subscription, you can log in to your account and
                navigate to the subscription management page. From there, you
                should be able to cancel your subscription and stop future
                billing.
              </p>
            </details>
          </div>
          <div className="py-1">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium bg-gray-900 px-5 py-4">
                <span className="text-white"> Is there a free trial?</span>
                <span className="transition group-open:rotate-180 text-white">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                We offer a free trial of our software for a limited time. During
                the trial period, you will have access to a limited set of
                features and functionality, but you will not be charged.
              </p>
            </details>
          </div>
          <div className="py-1">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium bg-gray-900 px-5 py-4">
                <span className="text-white"> How do I contact support?</span>
                <span className="transition group-open:rotate-180 text-white">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                If you need help with our platform or have any other questions,
                you can contact the company's support team by submitting a
                support request through the website or by emailing
                support@ourwebsite.com.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
