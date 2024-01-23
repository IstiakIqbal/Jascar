import { Link } from "react-router-dom";

export default function Blog() {
  return (
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
            Reprehenderit illum consequatur quia doloremque! Similique eius enim
            nostrum totam.
          </p>
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  );
}
