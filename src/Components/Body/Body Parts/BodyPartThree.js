import React from "react";
import TextBox from "../../Mini Components/TextBox";

export default function BodyPartThree() {
  return (
    <div className="body-part-three-container">
      <h2> Designed for the future</h2>
      <div className="body-part-three-body">
        <img className="body-part-three-image" src="" alt="" />
        <div className="body-part-three-body-text">
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
          {/* end of body-part-three-body-text div */}
        </div>

        {/* end of body-part-three-body div */}
      </div>
      {/* end of body-part-three div */}
    </div>
  );
}
