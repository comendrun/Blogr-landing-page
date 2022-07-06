import React from "react";
import TextBox from "../../Mini Components/TextBox";
import editorMobile from "../../../Assets/images/illustration-editor-mobile.svg";
import editorDesktop from "../../../Assets/images/illustration-editor-desktop.svg";

export default function BodyPartOne({ desktop }) {
  return (
    <div className="body-part-one-container flex flex-col gap-10 w-screen">
      <h2 className="font-bold text-center text-3xl desktop:mb-20">
        Designed for the future
      </h2>
      <div className="body-part-one-body flex flex-col desktop:flex-row-reverse">
        <div className="body-part-one-image-container desktop:m-auto desktop:flex-1 ">
          <img
            className="body-part-one-image m-auto desktop:max-w-max"
            src={desktop ? editorDesktop : editorMobile}
            alt=""
          />
        </div>
        <div className="body-part-one-body-text w-10/12 text-center m-auto flex flex-col gap-12 desktop:my-0 desktop:mx-auto desktop:w-max desktop:justify-around desktop:gap-2 desktop:items-center desktop:p-0 desktop:flex-1 desktop:pl-44">
          <TextBox textBoxHeader="Introducing an extensible editor">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </TextBox>
          <TextBox textBoxHeader="Robust content management">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </TextBox>
          {/* end of body-part-one-body-text div */}
        </div>

        {/* end of body-part-one-body div */}
      </div>
      {/* end of body-part-one div */}
    </div>
  );
}
