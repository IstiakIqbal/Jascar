import HeaderSecondary from "./HeaderSecondary";
import ContactBar from "../partials/ContactBar";
import Footer from "../partials/Footer";

export default function SingleBlog() {
  return (
    <div>
      <div className="pb-8">
      <ContactBar />
      <HeaderSecondary />
      </div>
      <main>
        <article>
          <header className="mx-auto mt-0 max-w-screen-lg rounded-t-lg bg-white pt-16 text-center shadow-lg">
            <p className="text-gray-500">Published April 4, 2022</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Car Repairing is an art
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              You've come way farther than you expected
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                car
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                repair
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                wash
              </button>
              <button className="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
                delivery
              </button>
            </div>
            <img
              className="-z-10 absolute top-14 left-0 mt-10 h-96 w-full object-cover"
              src="https://i.ebayimg.com/images/g/mhsAAOSwSa9kJvvG/s-l1200.jpg"
              alt
            />
          </header>
          <div className="mx-auto max-w-screen-lg space-y-12 rounded-b-lg bg-white px-8 pt-10 pb-20 font-serif text-lg tracking-wide text-gray-700 sm:shadow-lg">
            <h2 className="text-2xl font-semibold">
              First Steps to Wash Betterment
            </h2>
            <p>In the realm of automotive care, the art of car repairing emerges as a masterpiece, where skilled technicians wield tools with the precision of sculptors, and every vehicle is a canvas awaiting restoration.</p>
            
            <p><b>The Artistry in Diagnosis:</b> <br /> Car repairing begins with an intricate dance – a dance of diagnostics. Technicians, armed with advanced tools and a profound understanding of automotive intricacies, embark on a journey to decipher the language of a vehicle's ailments. Like seasoned artists, they unveil the hidden issues, bringing clarity to the canvas of mechanical puzzles.</p>
            <p><b>Precision Tools as Brushes:</b> <br /> Enter the workshop, and you'll find an array of tools that transcend their mechanical nature – they become brushes in the hands of artists. Wrenches and sockets are wielded with the finesse of a paintbrush, each turn and adjustment contributing to the creation of automotive perfection. It's a symphony of precision where every tool plays its part in crafting excellence.</p>
            <p><b>The Art of Restoration:</b> <br /> Car repairing is more than just fixing; it's about restoration. Like skilled artisans restoring a timeless painting, technicians meticulously bring vehicles back to life. From engine intricacies to bodywork, each element is approached with a discerning eye for detail, ensuring that the restored masterpiece not only functions flawlessly but also regains its aesthetic allure.</p>
            <p><b>Crafting Solutions with Expertise:</b> <br /> In the hands of these automotive artists, challenges are not roadblocks but opportunities for innovation. Every snag is met with a solution crafted from years of expertise. The art of car repairing lies in the ability to transform problems into triumphs, turning a broken-down vehicle into a revitalized chariot ready to conquer the open road.</p>
            <p><b>Attention to Detail – The Artist's Signature:</b> <br /> What distinguishes car repairing as an art form is the meticulous attention to detail. Every nut tightened, every wire secured – it's the artist's signature on the canvas of a repaired vehicle. It's an expression of dedication to perfection, ensuring that every repair stands as a testament to the commitment to excellence.</p>
            <p><b>The Unveiling – A Triumph of Art and Science:</b> <br /> As the repaired vehicle rolls out of the workshop, it's akin to the grand unveiling of a masterpiece. The engine purrs with a newfound vigor, and the vehicle stands as a symbol of the harmonious blend of art and science. It's not just a repaired car; it's a work of automotive art.</p>
            <p>In the hands of skilled technicians, car repairing transcends the mundane – it becomes a symphony of skill, a dance of precision, and an art form that shapes the very essence of automotive care. Each repaired vehicle is not just a functional machine but a testament to the artistry that resides within the heart of the workshop. Car repairing is indeed an art – an art that sculpts excellence in the world of automotive craftsmanship.</p>
          </div>
        </article>
      </main>
      <div className="w-fit mx-auto mt-10 flex space-x-2">
        <div className="h-0.5 w-2 bg-gray-600" />
        <div className="h-0.5 w-32 bg-gray-600" />
        <div className="h-0.5 w-2 bg-gray-600" />
      </div>
      <aside
        aria-label="Recent Posts"
        className="mx-auto mt-10 max-w-screen-xl py-20"
      >
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Heading */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Most Recent Posts
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              necessitatibus molestias explicabo.
            </p>
          </div>
          {/* /Heading */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* Article */}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    The Pines and the Mountains
                  </a>
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>
                <div>
                  <a
                    href="#"
                    className="active:text-yellow-700 font-semibold text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            {/* /Article */}
            {/* Article */}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  loading="lazy"
                  alt
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    The Coding Mania
                  </a>
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>
                <div>
                  <a
                    href="#"
                    className="active:text-yellow-700 font-semibold text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            {/* /Article */}
            {/* Article */}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1496395031280-4201b0e022ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  loading="lazy"
                  alt
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    Architectural Warfare
                  </a>
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>
                <div>
                  <a
                    href="#"
                    className="active:text-yellow-700 font-semibold text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            {/* /Article */}
            {/* Article */}
            <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group shrink-0 relative block h-56 w-full self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1510081887155-56fe96846e71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                  loading="lazy"
                  alt
                  className="group-hover:scale-110 absolute inset-0 h-full w-full object-cover object-center transition duration-200"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 2, 2022</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="active:text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    Blues in Architechture
                  </a>
                </h2>
                <p className="text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
                  necessitatibus molestias explicabo.
                </p>
                <div>
                  <a
                    href="#"
                    className="active:text-yellow-700 font-semibold text-yellow-600 transition duration-100 hover:text-yellow-600"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
            {/* /Article */}
          </div>
        </div>
      </aside>
      <Footer />
    </div>
    
  );
}
