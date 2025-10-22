import { useNavigate } from "react-router-dom";
import CustomCard from "../../../shared/CustomCard";
import seedGrader from "../../../assets/products/seed-grader-logo.png";
import riceMillMachinery from "../../../assets/products/rice-mill-logo.png";
import pamCombineHarvester from "../../../assets/products/PAM-harvester-india.png";

function ProductList() {
  const productLists = [
    {
      title: "PAM combine harvester",
      description: "Self propelled track type combine harvester.",
      image: pamCombineHarvester,
      link: "/product/pam-combine-harvester",
    },
    {
      title: "Seed Processing Machinery",
      description: "Post harvest seed processing, cleaning and grading.",
      image: seedGrader,
      link: "/product/seed-processing-machinery",
    },
    {
      title: "Rice Mill Machinery",
      description:
        "Complete sets of equipment for cost effective paddy processing machinery.",
      image: riceMillMachinery,
      link: "/product/rice-mill-machinery",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <p className="text-gray-600 text-lg mb-8">
        Explore our range of agricultural machinery.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productLists.map((product, index) => (
          <CustomCard
            key={index + 1}
            title={product.title}
            description={product.description}
            image={product.image}
            handler={() => {
              navigate(product.link);
            }}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
