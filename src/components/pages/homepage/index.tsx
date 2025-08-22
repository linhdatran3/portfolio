import CV from "@/assets/cv.pdf";
import LeftColumn from "./left-column";
import RightColumn from "./right-column";
import { Button } from "@/components/ui/button";
import { SocialSection } from "./social-section";

const Homepage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:justify-between h-full">
      <LeftColumn />
      <div className="w-full">
        <RightColumn />
        <div className="mt-8 flex justify-between items-center flex-wrap gap-4 border border-primary rounded-2xl p-4">
          <SocialSection />
          <a href={CV} download="[CV]Frontend_tran_linh_da" target="_blank">
            <Button>Resume ↗</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
