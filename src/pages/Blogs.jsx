import { Link } from "react-router-dom";
import HeaderSecondary from "../partials/HeaderSecondary";

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <HeaderSecondary />

      <main className="flex-grow mt-28">
        <div data-aos="zoom-in" className="my-4">
          <h2 className="h2 mb-4 text-center">
            Read Our Trending{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
              Blogs
            </span>
          </h2>
          <p className="text-xl text-gray-600 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        {/* blog 1 */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1577801601678-3b379e670f9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                Long walks are helpful in decreasing stress levels
              </Link>
              <p className="mb-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit illum consequatur quia doloremque! Similique eius
                enim nostrum totam.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                    Johanson Levinsiki
                  </strong>
                  <span className="text-sm text-gray-400">Jun 26, 2022</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* blog 2 */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1498887960847-2a5e46312788?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                Long walks are helpful in decreasing stress levels
              </Link>
              <p className="mb-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit illum consequatur quia doloremque! Similique eius
                enim nostrum totam.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                    Johanson Levinsiki
                  </strong>
                  <span className="text-sm text-gray-400">Jun 26, 2022</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* blog 3 */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1569176330438-fa1ed1042542?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                Long walks are helpful in decreasing stress levels
              </Link>
              <p className="mb-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit illum consequatur quia doloremque! Similique eius
                enim nostrum totam.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                    Johanson Levinsiki
                  </strong>
                  <span className="text-sm text-gray-400">Jun 26, 2022</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* blog 4 */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                Long walks are helpful in decreasing stress levels
              </Link>
              <p className="mb-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit illum consequatur quia doloremque! Similique eius
                enim nostrum totam.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                    Johanson Levinsiki
                  </strong>
                  <span className="text-sm text-gray-400">Jun 26, 2022</span>
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
