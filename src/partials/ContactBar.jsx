export default function ContactBar() {
  return (
    <div className="relative isolate flex items-center overflow-hidden bg-gray-300 px-6 py-8 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="w-screen flex justify-between text-sm leading-6 text-gray-900 md:px-20 sm:px-8">
          <strong className="font-semibold">JASAR AL HEERA L.L.C</strong>
          <div className="md:flex items-center gap-10 sm:block">
            <div>
              <div className="font-bold">OPENING HOURS:</div>
              <div>Mon-Sat: 9.00 AM - 8.00 PM</div>
            </div>
            <div>
              <div className="font-bold">CALL US NOW:</div>
              <div className="text-red-600 text-2xl font-bold">050-8046072</div>
            </div>
          </div>
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
    </div>
  );
}
