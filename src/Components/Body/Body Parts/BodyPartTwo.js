import React from "react";
import TextBox from "../../Mini Components/TextBox";
import mobileImage from "../../../Assets/images/illustration-phones.svg";

export default function BodyPartTwo() {
  return (
    <div className="body-part-two-container flex flex-col desktop:flex-row bg-indigo-900 mt-64 desktop:mt-0 desktop:px-30">

      <div className="body-part-two-image-container mx-auto desktop:w-[40%] desktop: ">
        <img
          className="body-part-two-image -mt-52 desktop:mt-0 mb-10 desktop:mb-0   desktop:object-contain desktop:w-[50%] desktop:h-[90%] desktop:-mt-12 desktop:absolute"
          src={mobileImage}
          alt=""
        />
      </div>

      <div className="body-part-two-body pb-8 desktop:pb-0 flex flex-col justify-end desktop:justify-center desktop:w-[50%] desktop: desktop: ">
        <div className="body-part-two-body-text text-white text-center flex flex-col justify-end desktop:justify-center min-h-full desktop:w-[90%]">
          <h2 className="mx-auto text-4xl font-bold desktop:mx-auto desktop:text-left desktop:max-w-full desktop:w-10/12 desktop:flex desktop:text-4xl desktop: ">State of the Art Infrastructure</h2>
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
