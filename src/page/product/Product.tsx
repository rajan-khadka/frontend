import { Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
      <Outlet />
    </div>
  );
}
