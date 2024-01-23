import worker1 from "../images/g1.png";
import worker2 from "../images/g2.png";
import worker3 from "../images/g3.png";
import worker4 from "../images/g4.png";
import worker5 from "../images/g5.png";

export default function Gallery() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h1 className="h2 mb-4">
          Work{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
            Gallery
          </span>
        </h1>
        <p className="text-xl text-gray-600">
          Saque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo
        </p>
      </div>
      <div className="max-w-screen">
        <div className="grid grid-rows-5 grid-cols-1 sm:grid-rows-5 sm:grid-cols-1 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-1 p-5">
          <div className="group pb-24 relative overflow-hidden">
            <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-yellow-600 z-10" />
            <img
              src={worker1}
              className="transition-all group-hover:scale-125 duration-700 mr-4 h-80 w-full"
              alt
            />
            <div className="bg-yellow-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
              <div className="z-20 absolute -top-5 w-full flex justify-center"></div>
              <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                <div className="h-6  bg-yellow-900 -rotate-45 transform origin-bottom-right" />
              </div>
              <h2 className="font-bold">Water Wash BMW</h2>
              <span className="text-white">By William Hiz</span>
            </div>
          </div>
          <div className="group pb-24 relative overflow-hidden">
            <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-yellow-600 z-10" />
            <img
              src={worker2}
              className="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-80 w-full right-0"
              alt
            />
            <div className="bg-yellow-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
              <div className="z-20 absolute -top-5 w-full flex justify-center"></div>
              <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                <div className="h-6  bg-yellow-900 -rotate-45 transform origin-bottom-right" />
              </div>
              <h2 className="font-bold">Washing Red Sedan</h2>
              <span className="text-white">By Jenny Doe</span>
            </div>
          </div>
          <div className="group pb-24 relative overflow-hidden">
            <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-yellow-600 z-10" />
            <img
              src={worker3}
              className="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-80 w-full right-0"
              alt
            />
            <div className="bg-yellow-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
              <div className="z-20 absolute -top-5 w-full flex justify-center"></div>
              <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                <div className="h-6  bg-yellow-900 -rotate-45 transform origin-bottom-right" />
              </div>
              <h2 className="font-bold">Car Breal Adjustment</h2>
              <span className="text-white">By David Martin</span>
            </div>
          </div>
          <div className="group pb-24 relative overflow-hidden">
            <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-yellow-600 z-10" />
            <img
              src={worker4}
              className="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-80 w-full right-0"
              alt
            />
            <div className="bg-yellow-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
              <div className="z-20 absolute -top-5 w-full flex justify-center"></div>
              <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                <div className="h-6  bg-yellow-900 -rotate-45 transform origin-bottom-right" />
              </div>
              <h2 className="font-bold">Nissan Tyre Changing</h2>
              <span className="text-white">By Steve Jhon</span>
            </div>
          </div>
          <div className="group pb-24 relative overflow-hidden">
            <div className="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-yellow-600 z-10" />
            <img
              src={worker5}
              className="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-80 w-full right-0"
              alt
            />
            <div className="bg-yellow-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center">
              <div className="z-20 absolute -top-5 w-full flex justify-center"></div>
              <div className="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6">
                <div className="h-6  bg-yellow-900 -rotate-45 transform origin-bottom-right" />
              </div>
              <h2 className="font-bold">Cleaning Danger Light</h2>
              <span className="text-white">By Max William</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
