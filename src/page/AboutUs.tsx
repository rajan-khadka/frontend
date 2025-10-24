import { homePageAboutUs } from "../shared/constant";
import homeImg2 from "../assets/home2.png";
import { Card, CardContent } from "../components/ui/card";
import React from "react";
import SeoComponent from "../shared/SeoComponent";

export default function AboutUs() {
  return (
    <React.Fragment>
      <SeoComponent
        title="About Us | Vishavkarma Overseas"
        description="Vishavkarma Overseas (PAM) is India's premier manufacturer of PAM combine harvesters, rice mill machinery, and seed processing equipment."
        type="website"
        // name="Vishavkarma Overseas | PAM"
        path="/about"
        keywords="PAM combine harvester, Vishavkarma Overseas, agricultural machinery, rice mill equipment, seed processing machinery, farming solutions, combine harvester manufacturer, agricultural equipment India"
        // image="/pam-combine-harvester.jpg"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-12">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-7 text-center md:text-left">
            About Vishavkarma Overseas
          </h3>

          <div
            className="flex flex-col md:flex-row justify-between mb-8 md:mb-20 
              gap-6 md:gap-20"
          >
            {/* Image Card */}
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Card className="w-full max-w-[500px] md:w-[500px] max-h-[400px] md:max-h-[600px]">
                <CardContent className="p-0">
                  <img
                    className="w-full max-h-[400px] md:max-h-[600px] object-contain bg-[#ededed] rounded-md"
                    src={homeImg2}
                    alt="Vishavkarma Overseas"
                  />
                </CardContent>
              </Card>
            </div>

            <div
              className="text-justify font-normal leading-9 w-full md:w-[500px] space-y-4"
              style={{ flexGrow: 2, fontSize: "20px" }}
            >
              <p className="">
                {homePageAboutUs.paragraph1}
                <br />
                <br />
                {homePageAboutUs.paragraph2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
