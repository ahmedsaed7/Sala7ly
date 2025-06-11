
import WorkerDetails from "@/Pages/WorkerDetailsPage/WorkerDetailsPage";
import React from "react";

const WorkerDetailsPage = () => {
  return (
    <div className="sm:mt-7 bg-[#bfcad4] min-h-screen mx-auto">
      <WorkerDetails />
    </div>
  );
};

export default React.memo(WorkerDetailsPage);
