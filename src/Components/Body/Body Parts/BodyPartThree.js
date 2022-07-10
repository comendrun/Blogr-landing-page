import React from "react";
import TextBox from "../../Mini Components/TextBox";
import laptopMobile from "../../../Assets/images/illustration-laptop-mobile.svg";
import laptopDesktop from "../../../Assets/images/illustration-laptop-desktop.svg";

export default function BodyPartThree({ desktop }) {
  // console.log(desktop);
  return (
    <div className="body-part-three-container ">
      <div className="body-part-three-body desktop:flex">
        <img
          className="body-part-three-image m-auto desktop:flex-1 desktop:m-0"
          src={desktop ? laptopDesktop : laptopMobile}
          alt=""
        />
        <div className="body-part-three-body-text flex flex-col gap-10 m-auto text-center desktop:flex-1 desktop:max-w-[50%] desktop:mx-0">
          <div className="desktop:w-[90%]">
          <TextBox textBoxHeader="Free, open, simple">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </TextBox>
          <TextBox textBoxHeader="Powerful tooling">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </TextBox>
          </div>
          {/* end of body-part-three-body-text div */}
        </div>

        {/* end of body-part-three-body div */}
      </div>
      {/* end of body-part-three div */}
    </div>
  );
}
