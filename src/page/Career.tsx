export default function Career() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Career</h1>
      <p className="text-gray-600 text-lg mb-8">
        Join our team and grow with us.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">
          Current Openings
        </h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Sales Executive
            </h3>
            <p className="text-gray-600">Location: Multiple Cities</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Service Engineer
            </h3>
            <p className="text-gray-600">Location: Regional Offices</p>
          </div>
          <div className="pb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Marketing Manager
            </h3>
            <p className="text-gray-600">Location: Head Office</p>
          </div>
        </div>
      </div>
    </div>
  );
}
