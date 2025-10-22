import ProductComponent from "../../../shared/ProductComponent";
import home2 from "../../../assets/home2.png";

function PamCombineHarvester() {
  const dataLists = [
    {
      title: "PAM 85HP combine harvester",
      descriptions: [
        "PAM combine harvester is a self propelled Track type combine harvester best suitable for harvesting of crops like Paddy, Wheat, Moong, Corn, Barseem etc.",
      ],
      image: home2,
    },
    // {
    //   title: "Product 2",
    //   descriptions: ["High-quality agricultural machinery 2."],
    //   image: "https://placehold.co/600x400/000000/777",
    // },
    // {
    //   title: "Product 3",
    //   descriptions: ["High-quality agricultural machinery 3."],
    //   image: "https://placehold.co/600x400/000000/456",
    // },
  ];

  const tableData = {
    headers: ["Model", "PAM 4LZ-4.0"],
    rows: [
      ["Type", "Self-propelled Whole-feeding"],
      ["Engine Power(HP)", "85"],
      ["RPM(r/min)", "2600"],
      ["Fuel Capacity(L)", "130"],
      ["Gearbox", "Hydraulic Gearbox Box "],
      ["Track Center(mm)", "1350"],
      ["Ground Clearance(mm)", "360"],
      ["Cutting Width(mm)", "2360"],
      ["Feeding Capacity (kg/s)", "4.0"],
      ["Cutting Bar Lift", "Hydraulic Control"],
      ["Threshing", "Axial Flow Type with Beat Bars"],
      ["Threshing Cylinder (mm)", "625*2000"],
      ["Filtrate Type", "Vibrating Sieves+ Centrifugal Fan"],
      ["Grain Tank Capacity(M3)", "1.6"],
      ["Work efficiency(ha./h)", "1.2-1.8"],
      ["Dimension: Length(mm)", "5150"],
      ["Width(mm)", "2620"],
      ["Height(mm)", "3030"],
      ["Weight(kg)", "3400"],
    ],
  };

  return (
    <ProductComponent
      title="PAM combine harvester"
      dataLists={dataLists}
      tableData={tableData}
    />
  );
}

export default PamCombineHarvester;
