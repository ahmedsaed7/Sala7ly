import React from "react";
import { Island_Moments } from "next/font/google";

const islandMoments = Island_Moments({
  weight: "400",
  subsets: ["latin"],
});

interface SectionHeadingProps {
  title: string;
  isNormal?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, isNormal = false }) => {
  return isNormal ? (
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10">
      {title}
    </h2>
  ) : (
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-warning uppercase italic -ml-2">
      <span className={`${islandMoments.className} text-warning text-4xl md:text-5xl`}>
        #
      </span>{" "}
      {title}
    </h2>
  );
};

export default SectionHeading;
