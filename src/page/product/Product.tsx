import React from "react";
import { Outlet } from "react-router-dom";
import SeoComponent from "../../shared/SeoComponent";

export default function Products() {
  return (
    <React.Fragment>
      <SeoComponent
        title="Products | Vishavkarma Overseas"
        description="Vishavkarma Overseas (PAM) is India's premier manufacturer of PAM combine harvesters, rice mill machinery, and seed processing equipment."
        type="website"
        // name="Vishavkarma Overseas | PAM"
        path="/product"
        keywords="PAM combine harvester, Vishavkarma Overseas, agricultural machinery, rice mill equipment, seed processing machinery, farming solutions, combine harvester manufacturer, agricultural equipment India"
        // image="/pam-combine-harvester.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h1>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
