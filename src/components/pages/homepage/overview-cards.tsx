import { Card, CardContent } from "@/components/ui/card";
import BlingGif from "@/assets/bling.gif";
import ProjectGif from "@/assets/project.gif";
import BunnyGif1 from "@/assets/bunny1.gif";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ExperienceSection from "./experience-section";
import { useState, type ReactNode } from "react";
import SkillsSection from "./skills-section";
import { ProjectsSection } from "./projects-section";
import AchievementsSection from "./achievements-section";
import { MeSection } from "./me-section";
type OverviewCardType = "experiences" | "skills" | "projects" | "education" | "me";

const modalContent: Record<OverviewCardType, ReactNode> = {
  experiences: <ExperienceSection />,
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  education: <AchievementsSection />,
  me: <MeSection />,
};

const modalTitleRecord = {
  experiences: "My Experiences",
  skills: "Skills",
  projects: "My Projects",
  education: "Achievements",
  me: "About Me",
};

const modalClassName = {
  experiences: "",
  skills: "sm:max-w-[60%] overflow-y-auto h-[80%] custom-scrollbar",
  projects: "sm:max-w-[60%] h-[80%] custom-scrollbar",
  education: "sm:max-w-[60%] overflow-y-auto h-[80%] custom-scrollbar",
  me: "sm:max-w-[60%] overflow-y-auto h-[80%] custom-scrollbar",
};
const OverviewCards = () => {
  const [cardType, setCardType] = useState<OverviewCardType | undefined>(undefined);

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Card
            className="relative hover:cursor-pointer flex justify-center items-center"
            onClick={() => setCardType("experiences")}
          >
            <img
              src={BlingGif}
              alt="bling"
              className="absolute h-full w-full top-0 left-0 object-center"
            />
            <p>Experiences ⚡</p>
          </Card>

          <Card
            className="bg-secondary text-secondary-foreground relative hover:cursor-pointer"
            onClick={() => setCardType("skills")}
          >
            <CardContent className="p-4">
              <div className="font-semibold">Skills</div>
              <div className="bg-white h-2 rounded-full mt-2 relative">
                <img src={BunnyGif1} alt="bunny" className="h-6 w-6 right-0 -top-5 absolute" />
              </div>
            </CardContent>
          </Card>

          <Card
            className="bg-secondary/80 text-secondary-foreground col-span-2 relative hover:cursor-pointer"
            onClick={() => setCardType("projects")}
          >
            <img
              src={ProjectGif}
              alt="project"
              className="absolute h-full w-fit top-0 right-0 object-contain rounded-2xl"
            />
            <CardContent className="p-4">
              <p className="font-semibold">Projects 🚀</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent
              className="p-4 hover:cursor-pointer"
              onClick={() => setCardType("education")}
            >
              <p className="font-semibold text-sm">Certificate - Education - Award</p>
            </CardContent>
          </Card>

          <Card className="hover:cursor-pointer">
            <CardContent className="p-4" onClick={() => setCardType("me")}>
              <p className="font-semibold text-sm">Me</p>
            </CardContent>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className={cardType ? modalClassName?.[cardType] : ""}>
        <DialogHeader>
          <DialogTitle>
            <p className="text-3xl font-bold mb-2">
              {cardType ? modalTitleRecord?.[cardType] : <></>}
            </p>
            <div className="w-10 h-1 bg-primary rounded-full"></div>
          </DialogTitle>
        </DialogHeader>
        {cardType ? modalContent?.[cardType] : <></>}
      </DialogContent>
    </Dialog>
  );
};

export default OverviewCards;
