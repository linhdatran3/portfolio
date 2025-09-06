import { Card, CardContent } from "@/components/ui/card";
import BlingGif from "@/assets/bling.gif";
import ProjectGif from "@/assets/project.gif";
import BunnyGif1 from "@/assets/bunny1.gif";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
import ExperienceSection from "./experience-section";
import { useState, type ReactNode } from "react";
import SkillsSection from "./skills-section";
import { ProjectsSection } from "./projects-section";
import AchievementsSection from "./achievements-section";
import { MeSection } from "./me-section";
import Modal from "@/components/common/modal";
import Image from "@/components/common/image";
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
  experiences: "sm:max-w-[60%]",
  skills: "sm:max-w-[60%]",
  projects: "sm:max-w-[80%]",
  education: "sm:max-w-[60%]",
  me: "sm:max-w-[60%]",
};
const OverviewCards = () => {
  const [cardType, setCardType] = useState<OverviewCardType | undefined>(undefined);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Card
          className="relative hover:cursor-pointer flex justify-center items-center"
          onClick={() => setCardType("experiences")}
        >
          <Image
            src={BlingGif}
            alt="bling"
            className="absolute h-full w-full top-0 left-0 object-cover"
          />
          <p className="text-center">Experiences ⚡</p>
        </Card>

        <Card
          className="bg-secondary text-secondary-foreground relative hover:cursor-pointer"
          onClick={() => setCardType("skills")}
        >
          <CardContent className="p-4">
            <p className="font-semibold text-center">Skills</p>
            <div className="bg-white h-2 rounded-full mt-2 relative">
              <Image src={BunnyGif1} alt="bunny" className="h-6 w-6 right-0 -top-5 absolute" />
            </div>
          </CardContent>
        </Card>

        <Card
          className="bg-secondary/80 text-secondary-foreground col-span-2 relative hover:cursor-pointer"
          onClick={() => setCardType("projects")}
        >
          <Image
            src={ProjectGif}
            alt="project"
            className="absolute h-full w-fit top-0 right-0 object-contain rounded-2xl hidden sm:block md:hidden lg:block"
          />
          <CardContent className="p-4">
            <p className="font-semibold text-center">Projects 🚀</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent
            className="p-4 hover:cursor-pointer"
            onClick={() => setCardType("education")}
          >
            <p className="font-semibold text-sm text-center">Certificate - Education - Award</p>
          </CardContent>
        </Card>

        <Card className="hover:cursor-pointer">
          <CardContent className="p-4" onClick={() => setCardType("me")}>
            <p className="font-semibold text-sm text-center">Me</p>
          </CardContent>
        </Card>
      </div>

      <Modal
        open={!!cardType}
        onOpenChange={() => setCardType(undefined)}
        title={
          <p className="text-3xl font-bold mb-2 after:absolute after:content[''] after:w-10 after:h-1 after:bg-primary after:rounded-full after:left-5 after:bottom-0">
            {cardType ? modalTitleRecord?.[cardType] : <></>}
          </p>
        }
        description="A11y description for screen readers"
        isShowFooter={false}
        actions={undefined}
        size="lg"
        classNames={{
          body: "sm:p-6",
          content: cardType ? modalClassName?.[cardType] : "",
          layout: "w-[inherit] md:w-[initial]",
        }}
      >
        {cardType ? modalContent?.[cardType] : <></>}
      </Modal>
    </>
  );
};

export default OverviewCards;
