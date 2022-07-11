import React, { useEffect } from "react";
import "./Body.css";
import BodyPartOne from "./Body Parts/BodyPartOne";
import BodyPartThree from "./Body Parts/BodyPartThree";
import BodyPartTwo from "./Body Parts/BodyPartTwo";

// aos
import Aos from "aos";
import "aos/dist/aos.css";

export default function Body({ isDesktop }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="body-container flex flex-col gap-y-10 max-w-4xl desktop:gap-y-[10rem] max-w-full">

      <div data-aos="fade-right">
        <BodyPartOne desktop={isDesktop} />
      </div>

      <div  data-aos="zoom-out" data-aos-easing=""
    data-aos-mirror="false"
    data-aos-once="false">
        <BodyPartTwo />
      </div>

      <div data-aos="fade-left">
        <BodyPartThree desktop={isDesktop} />
      </div>
    </section>
  );
}
