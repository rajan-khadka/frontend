import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import homeImg1 from "../assets/home.jpg";
import product3 from "../assets/pam-combine-harvester.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import AboutUs from "./AboutUs";

export default function InfiniteCarousel() {
  const imgLists = [product3, homeImg1]; // Add more images if needed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Infinite loop handlers
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % imgLists.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + imgLists.length) % imgLists.length);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <Carousel>
          <CarouselContent
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imgLists.map((img, idx) => (
              <CarouselItem
                key={idx}
                className="flex-shrink-0 w-full h-[770px] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`Carousel ${idx + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <IoIosArrowRoundBack size={20} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <IoIosArrowRoundForward size={20} />
        </button>
      </div>

      <AboutUs />
    </div>
  );
}
