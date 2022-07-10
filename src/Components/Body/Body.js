import React from "react";
import "./Body.css";
import BodyPartOne from "./Body Parts/BodyPartOne";
import BodyPartThree from "./Body Parts/BodyPartThree";
import BodyPartTwo from "./Body Parts/BodyPartTwo";

export default function Body({ isDesktop }) {
  // console.log(isDesktop);
  return (
    <section className="body-container flex flex-col gap-y-10 max-w-4xl desktop:gap-y-[10rem] max-w-full">
      <BodyPartOne desktop={isDesktop} />
      <BodyPartTwo />
      <BodyPartThree desktop={isDesktop} />
    </section>
  );
}
