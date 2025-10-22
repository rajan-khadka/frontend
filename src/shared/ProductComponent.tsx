// import React from "react";
// import { Card, CardContent } from "../components/ui/card";

// interface IProps {
//   title: string;
//   dataLists: {
//     title: string;
//     descriptions: string[];
//     image: string;
//   }[];
//   tableData?: {
//     headers: string[];
//     rows: string[][];
//   };
// }

// function ProductComponent({ dataLists, title, tableData }: IProps) {
//   return (
//     <div>
//       <h3 className="text-2xl  mb-8">{title}</h3>

//       <div>
//         {dataLists.map((list, index) => (
//           <div key={index + 1} className="flex flex-row justify-between mb-20">
//             <div>
//               <Card className="w-[600px]">
//                 <CardContent className="p-0">
//                   <img
//                     className="w-full h-[400px] object-contain bg-[#ededed]"
//                     src={list.image}
//                     alt={list.title}
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="flex justify-center w-full ml-20">
//               <div className="text-justify flex-1">
//                 <h1 className="text-2xl font-bold">{list.title}</h1>
//                 <div className="mt-7 ">
//                   {list.descriptions.map((description, index) => (
//                     <React.Fragment key={index + 1}>
//                       <p className="font-normal leading-7">{description}</p>
//                       <br />

//                       {tableData && (
//                         <table className="border-collapse w-full">
//                           <thead>
//                             <tr>
//                               {tableData.headers.map((header, index) => (
//                                 <th
//                                   className="border-2 border-gray-300 text-left p-2"
//                                   key={index + 1}
//                                 >
//                                   {header}
//                                 </th>
//                               ))}
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {tableData.rows.map((row, index) => (
//                               <tr className="even:bg-gray-300" key={index + 1}>
//                                 {row.map((cell, index) => (
//                                   <td
//                                     className="border-2 border-gray-300 text-left p-2"
//                                     key={index + 1}
//                                   >
//                                     {cell}
//                                   </td>
//                                 ))}
//                               </tr>
//                             ))}
//                           </tbody>
//                         </table>
//                       )}
//                     </React.Fragment>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductComponent;

import React from "react";
import { Card, CardContent } from "../components/ui/card";

interface IProps {
  title: string;
  dataLists: {
    title: string;
    descriptions: string[];
    image: string;
  }[];
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

function ProductComponent({ dataLists, title, tableData }: IProps) {
  return (
    <div className="px-4 md:px-10">
      {/* Section Title */}
      <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-left">
        {title}
      </h3>

      <div>
        {dataLists.map((list, index) => (
          <div
            key={index + 1}
            className="
              flex flex-col md:flex-row justify-between mb-16 md:mb-20 
              gap-8 md:gap-20
            "
          >
            {/* Image Card */}
            <div className="flex justify-center md:justify-start">
              <Card className="w-full md:w-[500px] max-h-[400px]">
                <CardContent className="p-0">
                  <img
                    className="w-full max-h-[400px] object-contain bg-[#ededed] rounded-md"
                    src={list.image}
                    alt={list.title}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Text + Table Section */}
            <div className="flex justify-center w-full">
              <div className="text-justify flex-1">
                <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
                  {list.title}
                </h1>

                <div className="mt-5 md:mt-7 space-y-4">
                  {list.descriptions.map((description, descIndex) => (
                    <React.Fragment key={descIndex + 1}>
                      <p className="font-normal leading-7">{description}</p>

                      {/* Responsive Table */}
                      {tableData && (
                        <div className="overflow-x-auto mt-4">
                          <table className="border-collapse w-full min-w-[400px] text-sm md:text-base">
                            <thead>
                              <tr>
                                {tableData.headers.map(
                                  (header, headerIndex) => (
                                    <th
                                      className="border border-gray-300 text-left p-2 font-semibold bg-gray-100"
                                      key={headerIndex + 1}
                                    >
                                      {header}
                                    </th>
                                  )
                                )}
                              </tr>
                            </thead>
                            <tbody>
                              {tableData.rows.map((row, rowIndex) => (
                                <tr
                                  className="even:bg-gray-100"
                                  key={rowIndex + 1}
                                >
                                  {row.map((cell, cellIndex) => (
                                    <td
                                      className="border border-gray-300 text-left p-2"
                                      key={cellIndex + 1}
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductComponent;
