import { Link } from "react-router-dom";
import Footer from "../partials/Footer";
import ContactBar from "../partials/ContactBar";
import HeaderSecondary from "../partials/HeaderSecondary";

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <ContactBar />
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
        {/* --------- */}
        {/* ----1---- */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://scottsfortcollinsauto.com/wp-content/uploads/CarService1-1.jpg"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                "Wrapped in Style: The Allure of Car Wrapping"
              </Link>
              <p className="mb-6 text-gray-500">
              Dive into the world of self-expression on wheels with our Car Wrapping service. Learn how our variety of finishes and textures allow you to make a bold statement, giving your vehicle a distinctive look that reflects your personality.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://d1eipm3vz40hy0.cloudfront.net/images/AMER/customerprofile1.jpg"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Duke Turns
                  </strong>
                  <span className="text-sm text-gray-400">January 29, 2024</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* ----1---- */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://bookmygarage.com/_next/image/?url=%2Fstatic%2Fseo-pages%2Fuploads%2Fcar-servicing-header-2.png&w=3840&q=75"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                "Through the Tint: The Elegance of Window Tinting"
              </Link>
              <p className="mb-6 text-gray-500">
              Experience the perfect blend of style and functionality with our Window Tinting service. Discover how tinted windows not only enhance privacy but also protect you from harmful UV rays, adding a touch of sophistication to your car's aesthetic.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQGdt2-OPxUyYVbNN9LD6EgRQ42WFOI7DERzdE2_8K457KWvqNFaEj0QA3GcBhSelbPY&usqp=CAU"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Olivia Anderson
                  </strong>
                  <span className="text-sm text-gray-400">January 23, 2024</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* ----1---- */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://grunwald.co.za/wp-content/uploads/2015/05/Car-Service-Division.jpg"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                "Ceramic Coating: A Shield of Brilliance"
              </Link>
              <p className="mb-6 text-gray-500">
              Delve into the world of ultimate protection with our Ceramic Coating service. Learn how Jasar Al Heera's coatings provide a durable, high-gloss finish, acting as a shield against contaminants and harsh weather conditions, ensuring your car maintains its brilliance.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Ethan Walker
                  </strong>
                  <span className="text-sm text-gray-400">January 12, 2024</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* ----2---- */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://www.ymfcarparts.co.uk/images/blog/full-car-service.jpg"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                "The Power of Precision: Our Advanced Suite of Tools"
              </Link>
              <p className="mb-6 text-gray-500">
              Take a glimpse into the heart of Jasar Al Heera's automotive expertise. Explore how our powerful suite of tools, featuring advanced diagnostics and precision instruments, sets the stage for unparalleled care, ensuring your vehicle receives the attention it deserves.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-smiling-millennial-male-260nw-1667439913.jpg"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Jackson Turner
                  </strong>
                  <span className="text-sm text-gray-400">Dec 26, 2023</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* ----4---- */}
        <div data-aos="zoom-in" className="px-2 my-2">
          <article className="mx-auto my-0 flex max-w-md flex-col rounded-2xl bg-white px-4 hover:shadow-lg md:max-w-5xl md:flex-row md:items-center">
            <Link to="/blog/1" className="shrink-0 my-4 md:mr-8 md:max-w-sm">
              <img
                className="rounded-2xl"
                src="https://demoxml.com/html/cardinal/images/blog-6.jpg"
                alt
              />
            </Link>
            <div className="py-4 sm:py-8">
              <Link
                to="/blog/1"
                className="mb-6 block text-2xl font-medium text-gray-700 hover:text-yellow-600"
              >
                "Unveiling Brilliance: The Art of Car Polishing"
              </Link>
              <p className="mb-6 text-gray-500">
              Step into the world of automotive elegance with our Car Polishing service at Jasar Al Heera. Discover how we bring out the true radiance of your vehicle, creating a gleaming exterior that turns heads on the road.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://demoxml.com/html/cardinal/images/client-img.png"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Darya Finger
                  </strong>
                  <span className="text-sm text-gray-400">Nov 28, 2023</span>
                </p>
              </div>
            </div>
          </article>
        </div>
        {/* ----------- */}
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
                 "A Symphony of Shades: The Art of Window Tinting"
              </Link>
              <p className="mb-6 text-gray-500">
              Experience the perfect blend of style and function through our Window Tinting service. Discover how tinted windows not only enhance privacy but also add a touch of sophistication while protecting you from the sun's rays.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUlS3GCOdYAk0kRZ-9Z7jy1WS8tzCLcyGZ82ZBtGylPA-Lz3v7dbuJpPDQyFZWIBp0tc&usqp=CAU"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Jackson Turner
                  </strong>
                  <span className="text-sm text-gray-400">July 17, 2023</span>
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
               "Precision Tools, Automotive Art: Our Advanced Suite in Focus"
              </Link>
              <p className="mb-6 text-gray-500">
              Take a closer look at the technological marvels behind our services. In this blog, we explore our advanced suite of tools – the silent heroes that contribute to the precision and innovation defining every service at Jasar Al Heera.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Liam Brooks
                  </strong>
                  <span className="text-sm text-gray-400">May 25, 2023</span>
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
               "The Car Washing Chronicles: A Refreshing Dive into Automotive Care"
              </Link>
              <p className="mb-6 text-gray-500">
              Delve into the rejuvenating experience of our Car Washing service. Discover the meticulous care and attention your cherished vehicle receives, leaving it not just clean but infused with a renewed vibrancy ready to hit the open road.Enjoy the journey through the world of automotive care at Jasar Al Heera – where every service is a brushstroke in the canvas of excellence.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://www.shutterstock.com/image-photo/headshot-portrait-smiling-millennial-male-260nw-1667439913.jpg"
                  alt="Simon Lewis"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">
                  Noah Bennett
                  </strong>
                  <span className="text-sm text-gray-400">March 13, 2024</span>
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
               "Revitalize and Renew: The Magic of Interior Cleaning"
              </Link>
              <p className="mb-6 text-gray-500">
              Step into a realm of freshness and renewal with our Interior Cleaning service. Explore how our meticulous detailing breathes new life into your car's interior, offering a rejuvenating experience every time you hit the road.
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQGdt2-OPxUyYVbNN9LD6EgRQ42WFOI7DERzdE2_8K457KWvqNFaEj0QA3GcBhSelbPY&usqp=CAU"
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
      <Footer />
    </div>
  );
}
