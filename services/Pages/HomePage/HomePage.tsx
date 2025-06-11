import ApplySection from "./Sections/ApplySection";
import MainSection from "./Sections/MainSection";
import OurPartnersSection from "./Sections/OurPartnersSection";
import OurServices from "./Sections/OurServices";
import StatsSection from "./Sections/StatsSection";
import TestimonialsSection from "./Sections/TestimonialsSection";
import WorkersSection from "./Sections/WorkersSection";
export default function HomePage() {
  return (
    <>
      <MainSection/>
      <OurServices/>
      <StatsSection/>
      <WorkersSection />
      {/* <UpcomingEventsSection /> */}
      <OurPartnersSection/>
      <TestimonialsSection/>
      <ApplySection/>
      {/* <ProjectsSection /> */}
    </>
  );
}
