import React from "react";
import TextBox from "../../Mini Components/TextBox";
import mobileImage from "../../../Assets/images/illustration-phones.svg";

export default function BodyPartTwo() {
  return (
    <div className="body-part-two-container">
      <div className="body-part-two-image-container">
        <img
          className="body-part-two-image -mb-52 mt-10"
          src={mobileImage}
          alt=""
        />
      </div>
      <div className="body-part-two-body bg-indigo-900 pb-8 flex flex-col justify-end">
        <div className="body-part-two-body-text text-white text-center flex flex-col justify-end pb-20 min-h-full">
          <h2 className="mx-auto">State of the Art Infrastructure</h2>
          <TextBox>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </TextBox>

          {/* end of body-part-two-body-text div */}
        </div>

        {/* end of body-part-two-body div */}
      </div>
      {/* end of body-part-two div */}
    </div>
  );
}
