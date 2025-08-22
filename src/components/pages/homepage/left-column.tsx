import IntroCard from "./intro-card";
import EducationCard from "./education-card";

const LeftColumn = () => {
  return (
    <div className="space-y-4 w-full md:max-w-[400px] !m-auto flex flex-col h-full">
      <IntroCard />
      <EducationCard className="flex-1 overflow-y-auto" />
    </div>
  );
};

export default LeftColumn;
