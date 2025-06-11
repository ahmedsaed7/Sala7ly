import AboutUs from "@/Pages/AboutPage/aboutPage";
import React from "react";

const AboutPage = () => {
  return (
    <div className="sm:mt-7 bg-[#bfcad4] min-h-screen mx-auto">
      <AboutUs />
    </div>
  );
};

export default React.memo(AboutPage);
