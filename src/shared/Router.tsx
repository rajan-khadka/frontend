import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "../page/AboutUs";
import Career from "../page/Career";
import ContactUs from "../page/ContactUs";
import Footer from "../page/Footer";
import Home from "../page/Home";
import OurService from "../page/OurService";
import Product from "../page/product/Product";
import PamCombineHarvester from "../page/product/sub-page/PamCombineHarvester";
import ProductList from "../page/product/sub-page/ProductList";
import RiceMillMachinery from "../page/product/sub-page/RiceMillMachinery";
import SeedProcessingMachinery from "../page/product/sub-page/SeedProcessingMachinery";
import Navigation from "./Navigation";

export function Router() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />}>
              {/* Product Child Routes */}
              <Route index element={<ProductList />} />
              <Route
                path="pam-combine-harvester"
                element={<PamCombineHarvester />}
              />
              <Route
                path="seed-processing-machinery"
                element={<SeedProcessingMachinery />}
              />
              <Route
                path="rice-mill-machinery"
                element={<RiceMillMachinery />}
              />
            </Route>
            <Route path="/our-services" element={<OurService />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
