import ProductComponent from "../../../shared/ProductComponent";
import combineRiceMill from "../../../assets/products/combine-rice-mill.jpg";

function RiceMillMachinery() {
  const dataLists = [
    {
      title: "Combine Rice Mill Machinery",
      descriptions: [
        `Our 1TPH  standard rice mill plant is a small type auto rice mill machine. It can get 800-1000kg final rice per hour, it is very suitable for small-scale rice processing businesses. This 1TPH standard rice mill machine contains combined rice cleaning machine, destoning, husking, rice separating machine, rice mill machine and broken rice grading machine.`,
        `Include Machine :feed hopper, paddy cleaner, destoner, paddy husker, paddy separator, rice whitener, rice grader, elevator`,
      ],
      image: combineRiceMill,
    },
  ];

  return <ProductComponent title="Rice Mill Machinery" dataLists={dataLists} />;
}

export default RiceMillMachinery;
