import indentedCylinder from "../../../assets/products/indented-cylinder.png";
import seedPreCleaner from "../../../assets/products/pre-cleaner-1.png";
import seedGrader from "../../../assets/products/seed-grader-logo.png";
import specificGravitySeparator from "../../../assets/products/seed-gravity-separator.png";
import ProductComponent from "../../../shared/ProductComponent";

function SeedProcessingMachinery() {
  const dataLists = [
    {
      title: "Seed Pre Cleaner",
      descriptions: [
        "Vishavkarma develops and manufactures solutions for pre-cleaning of 1TPH, 2TPH, 3TPH & 5TPH capacity of cereals, maize, rape seed, peas and similar products before drying or storage. Pre-cleaning differs from rough cleaning in the way that this process also is able to separate products smaller than the main crop.",
      ],
      image: seedPreCleaner,
    },
    {
      title: "Seed Grader/Fine Cleaner",
      descriptions: [
        `Seed Grader (Air-Screen Grader) is mainly suitable for the cleaning and grading of various spice seeds like Coriander, Cummins, and Fennel and Fenugreek etc. It is also suitable for cleaning and grading various cereal seeds, Oil seeds, Forestry seeds, Fodder seeds, Pulses etc. like Wheat, Paddy, Maize, Bajra, Urd, Moong, Gram, Soya bean, Sunflower, Mustard, Jowar, Barley, Coffee Seeds, etc.`,
      ],
      image: seedGrader,
    },
    {
      title: "Indented Cylinder",
      descriptions: [
        `Indented cylinder is used for additional separation or up gradation of seeds, grains of various crops on length basis after size & sieve cleaning. Also used for removing weed seeds, broken or cut, round grains, material longer than the desired crop seed.`,
      ],
      image: indentedCylinder,
    },
    {
      title: "Specific Gravity Separator",
      descriptions: [
        `It is specially meant for upgrading of the product quality i.e. Seed/Grain etc. by separating the impurities on the basis of the difference in specific gravities which are otherwise of the same shape &size. The impurities which are of the same shape & size of the required quality product but having different specific gravity cannot be separated by Air Screen Seed Cleaner (Seed Graders), Length separators because these machines work on the principle of separation (grading) on the basis of difference in physical parameters like shape & size etc.`,
      ],
      image: specificGravitySeparator,
    },
  ];

  return (
    <ProductComponent title="Seed Processing Machinery" dataLists={dataLists} />
  );
}

export default SeedProcessingMachinery;
