import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-16">
          <div className="max-w-3xl mx-auto text-center pb-0 md:pb-2">
            <h2 className="h2 mb-4">
              Today's{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
                Blogs
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
        {/* /Heading */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://demoxml.com/html/cardinal/images/blog-6.jpg"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">February 1, 2024</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-yellow-600 active:text-yellow-600"
                >
                  "Unveiling Brilliance: The Art of Car Polishing"
                </Link>
              </h2>
              <p className="text-gray-500">
              Step into the world of automotive elegance with our Car Polishing service at Jasar Al Heera. Discover..
              </p>
              <div>
                <a
                  href="/blogs"
                  className="font-semibold text-yellow-600 transition duration-100 hover:text-yellow-600 active:text-yellow-700"
                >
                  Read more
                </a>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://demoxml.com/html/cardinal/images/blog-1.jpg"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">January 16, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-yellow-600 active:text-yellow-600"
                >"The Art of Revitalization: A Dive into our Car Washing Expertise"
                </Link>
              </h2>
              <p className="text-gray-500">
              Embark on a journey of rejuvenation as we unveil the secrets behind our exceptional Car Washing service at Jasar Al Heera. Witness...
              </p>
              <div>
                <a
                  href="/blogs"
                  className="font-semibold text-yellow-600 transition duration-100 hover:text-yellow-600 active:text-yellow-700"
                >Read more
                </a>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://www.carcarecentre.ca/wp-content/uploads/bb-plugin/cache/car-wrapping-services-1024x683-square.jpg"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">May 16, 2021</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-yellow-600 active:text-yellow-600"
                >"Wrapped in Style: The Allure of Car Wrapping"
                </Link>
              </h2>
              <p className="text-gray-500">
              Dive into the world of self-expression on wheels with our Car Wrapping service. Learn...
              </p>
              <div>
                <Link
                  to="/blog/1"
                  className="font-semibold text-yellow-500 transition duration-100 hover:text-yellow-600 active:text-yellow-700"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
          {/* /Article */}
          {/* Article */}
          <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
            <Link
              to="/blog/1"
              className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
            >
              <img
                src="https://carstylein.com/assets/csimg/creamiccoating1.jpg"
                loading="lazy"
                alt
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-400">April 2, 2022</span>
              <h2 className="text-xl font-bold text-gray-800">
                <Link
                  to="/blog/1"
                  className="transition duration-100 hover:text-yellow-600 active:text-yellow-600"
                >"Ceramic Coating: A Shield of Brilliance"
                </Link>
              </h2>
              <p className="text-gray-500">
              Delve into the world of ultimate protection with our Ceramic Coating service. Learn how Jasar Al Heera's coatings..
              </p>
              <div>
                <Link
                  to="/blog/1"
                  className="font-semibold text-yellow-500 transition duration-100 hover:text-yellow-600 active:text-yellow-700"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
          {/* /Article */}
        </div>
      </div>
    </section>
  );
}
