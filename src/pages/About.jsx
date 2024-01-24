import Footer from "../partials/Footer";
import HeaderSecondary from "../partials/HeaderSecondary";
import ContactBar from "../partials/ContactBar";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <ContactBar />
      <HeaderSecondary />
      <main className="flex-grow mt-20">
        <div className="2xl:container 2xl:mx-auto lg:py-32 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div
              data-aos="zoom-in-right"
              className="w-full lg:w-5/12 flex flex-col justify-center"
            >
              <h1
                className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
                  US
                </span>
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">
              At Jasar Al Heera, we are not merely a car service company; we are architects of automotive dreams. Nestled in the heart of our city, our workshop is a haven where passion for cars converges with the artistry of skilled craftsmen.
Our narrative is one of commitment – a commitment to redefine the very essence of car service. From the first moment a vehicle graces our workshop to the triumphant delivery, each step is an ode to precision, care, and the pursuit of automotive excellence.
              </p>
            </div>
            <div data-aos="zoom-in-left" className="w-full lg:w-8/12 ">
              <img
                className="w-full h-full rounded-lg"
                src="https://media.istockphoto.com/id/1248187106/photo/happy-customer-and-auto-mechanic-using-touchpad-in-a-workshop.jpg?s=612x612&w=0&k=20&c=7C4TtL1wJ8LTYq0HTwhHWX9Y2NjBdqcxTt6-o3EKHEo="
                alt="A group of People"
              />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="flex lg:flex-row flex-col justify-between gap-8 pt-12"
          >
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
                Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
                  Story
                </span>
              </h1>
              <p className="font-normal text-base leading-6 text-gray-600 ">
              In the heart of the metropolis, this tale unfolds, with Jasar Al Heera as the protagonist, a beacon of automotive excellence. The story began with a vision, a dream to redefine the standards of car service, to elevate the experience from mundane to extraordinary. <br /> <br />
The journey continued with the company's commitment to care, as if each vehicle held the dreams and aspirations of its owner. From the first touch to the final bow, every service rendered at Jasar Al Heera was infused with a blend of expertise and artistry.
              </p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden rounded-xl"
                    src="https://i.ibb.co/z67cjbm/client-1.png"
                    alt="Alexa featured Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/z67cjbm/client-1.png"
                    alt="Alexa featured Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Bob haris
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden rounded-xl"
                    src="https://i.ibb.co/Sn8Nv99/client-2.png"
                    alt="Olivia featured Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/Sn8Nv99/client-2.png"
                    alt="Olivia featured Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Duke Turns
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden rounded-xl"
                    src="https://i.ibb.co/CWskf0f/client-3.png"
                    alt="Liam featued Img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/CWskf0f/client-3.png"
                    alt="Liam featued Img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Rock Lancer
                  </p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img
                    className="md:block hidden rounded-xl"
                    src="https://i.ibb.co/w4Lq6RK/client-4.png"
                    alt="Elijah featured img"
                  />
                  <img
                    className="md:hidden block"
                    src="https://i.ibb.co/w4Lq6RK/client-4.png"
                    alt="Elijah featured img"
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Chris Binva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
