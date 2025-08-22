import BunnyGif from "@/assets/bunny.gif";
import OverviewCards from "./overview-cards";
import { ThemeToggle } from "@/components/common/theme-toggle";

const RightColumn = () => {
  return (
    <div className="relative">
      <div className="relative bg-card px-6 pt-6 pb-4 rounded-[2rem] overflow-hidden border-primary border">
        <div className="absolute -top-1 -right-1 w-36 h-20 bg-accent rounded-bl-[4rem] z-1" />
        <div className="relative z-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Overview</h2>
            <ThemeToggle />
          </div>
          <OverviewCards />
        </div>
        <img src={BunnyGif} alt="rabit" className="absolute bottom-0 left-4 h-12 w-12 z-2" />
      </div>
    </div>
  );
};

export default RightColumn;
