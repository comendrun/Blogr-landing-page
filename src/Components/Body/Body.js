import React from "react";
import './Body.css'
import BodyPartOne from "./Body Parts/BodyPartOne";
import BodyPartThree from "./Body Parts/BodyPartThree";
import BodyPartTwo from "./Body Parts/BodyPartTwo";

export default function Body() {
  return (
    <section className="body-container flex flex-col gap-y-10 ">
      <BodyPartOne />
      <BodyPartTwo />
      <BodyPartThree />
    </section>
  );
}
