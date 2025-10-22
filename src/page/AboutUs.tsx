import { homePageAboutUs } from "../shared/constant";
import homeImg2 from "../assets/home2.png";
import { Card, CardContent } from "../components/ui/card";

export default function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-12">
      <div>
        <h3 className="text-3xl font-bold mb-7">About Vishavkarma Overseas</h3>

        <div
          className="flex flex-col md:flex-row justify-between mb-16 md:mb-20 
              gap-8 md:gap-20"
        >
          {/* Image Card */}
          <div className="flex justify-center md:justify-start">
            <Card className="w-full md:w-[500px] max-h-[600px]">
              <CardContent className="p-0">
                <img
                  className="w-full max-h-[600px] object-contain bg-[#ededed] rounded-md"
                  src={homeImg2}
                  alt="Vishavkarma Overseas"
                />
              </CardContent>
            </Card>
          </div>

          <div
            className="text-justify font-normal leading-9 w-[500px] space-y-4"
            style={{ flexGrow: 2, fontSize: "20px" }}
          >
            <p>
              {homePageAboutUs.paragraph1}
              <br />
              <br />
              {homePageAboutUs.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
