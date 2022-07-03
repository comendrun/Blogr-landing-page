import React from "react";
import TextBox from "../../Mini Components/TextBox";

export default function BodyPartTwo() {
  return (
    <div className="body-part-two-container">
      <h2> Designed for the future</h2>
      <div className="body-part-two-body">
        <img className="body-part-two-image" src="" alt="" />
        <div className="body-part-two-body-text">
          <h2>State of the Art Infrastructure</h2>
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
