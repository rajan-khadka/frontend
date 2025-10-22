import { IoIosArrowForward } from "react-icons/io";
import {
  ourService,
  ourServiceBulletList,
  repairAndMaintenanceServiceBulletList,
} from "../shared/constant";

export default function OurService() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <div>
        <h3 className="text-3xl font-bold mb-7">After Sales Service</h3>

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">
          <div
            className="text-justify font-normal leading-9 w-full md:w-[500px]"
            style={{ flexGrow: 2, fontSize: "20px" }}
          >
            <p>
              {ourService.paragraph1}
              <br />
              <br />
              {ourService.paragraph2}
            </p>
          </div>
          <div
            className="bg-red-300 h-[300px] md:h-[500px] w-full md:w-[500px]"
            style={{ flexGrow: 1 }}
          >
            <img
              src={
                "https://www.skagroindustries.com/wp-content/uploads/2024/05/s1.jpg"
              }
              alt="Vishavkarma Overseas"
              className="w-full h-full object-fill rounded-lg"
            />
          </div>
        </div>

        <div className="mt-10">
          {/* Heading */}
          <h2 className="text-green-600 text-2xl font-bold mb-6">
            Spare Parts Service
          </h2>

          {/* List */}
          <ul className="space-y-4">
            {ourServiceBulletList.map((service, idx) => (
              <li key={idx} className="flex items-start">
                <IoIosArrowForward className="text-black mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-800">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          {/* Heading */}
          <h2 className="text-green-600 text-2xl font-bold mb-6">
            Repair & Maintenance Service Arts Services
          </h2>

          {/* List */}
          <ul className="space-y-4">
            {repairAndMaintenanceServiceBulletList.map((service, idx) => (
              <li key={idx} className="flex items-start">
                <IoIosArrowForward className="text-black mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-800">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
