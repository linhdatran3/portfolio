import { useMemo } from "react";

import LogoUIT from "@/assets/logo-uit.png";
import LogoR2S from "@/assets/logo-r2s.png";
import LogoDevera from "@/assets/logo-devera.png";
import LogoAISC from "@/assets/logo-aisc.jpg";
import LogoDBC from "@/assets/logo-dbc.png";
import { AchievementCard, type AchievementItem } from "./achievement-card";

const eduTimelineItems: AchievementItem[] = [
  {
    type: "Education",
    title: "Bachelor of E‑commerce",
    subtitle: "University of Information Technology (VNU-HCM)",
    date: "2019–2023",
    image: LogoUIT as unknown as string,
    description: "Top 2 GPA. Graduated with Good classification.",
  },
  {
    type: "Education",
    title: "Master of Information Systems",
    subtitle: "University of Information Technology (VNU-HCM)",
    date: "2025–Present",
    image: LogoUIT as unknown as string,
    description: "Admitted with the highest entrance score.",
  },
];

const certItems: AchievementItem[] = [
  {
    type: "Certificate",
    title: "ReactJS Development Course",
    subtitle: "Devera Academy",
    date: "Sep 2022",
    image: LogoDevera as unknown as string,
    linkLabel: "View Certificate",
  },
  {
    type: "Certificate",
    title: "Web Development",
    subtitle: "Resource Software Solution Academy",
    date: "Dec 2021",
    image: LogoR2S as unknown as string,
    linkLabel: "View Certificate",
  },
];

const awardItems: AchievementItem[] = [
  {
    type: "Award",
    title: "Winner – Digital Business Contest 2021",
    subtitle: "Vietnam E‑Commerce Association",
    date: "Oct 2021",
    image: LogoDBC as unknown as string,
  },
  {
    type: "Award",
    title: "Top 2 – Advanced Information Systems Contest",
    subtitle: "Department of Information Systems, UIT",
    date: "Dec 2021",
    image: LogoAISC as unknown as string,
  },
];

const AchievementsSection = () => {
  const sections = useMemo(
    () => [
      { title: "Education", items: eduTimelineItems },
      { title: "Certificates", items: certItems },
      { title: "Awards", items: awardItems },
    ],
    []
  );

  return (
    <section aria-labelledby="achievements-heading" className="relative space-y-8">
      {sections.map((section) => (
        <div key={section.title} className="space-y-3">
          <h3 className="font-semibold text-lg">{section.title}</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {section.items.map((item, idx) => (
              <AchievementCard key={`${section.title}-${idx}-${item.title}`} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default AchievementsSection;
