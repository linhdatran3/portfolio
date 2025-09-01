import { Briefcase } from "lucide-react";
import GreenLogo from "@/assets/green-logo.png";
import VbiLogo from "@/assets/vbi-logo.png";
import LecleLogo from "@/assets/lecle-logo.png";

const experiences = [
  {
    logo: VbiLogo,
    company: "VBI Academy - Frontend Developer",
    date: "May 2024 — Aug 2025",
    desc: "Contributed to the early development of Openedu, an education platform with Blockchain and gamification. Collaborated with cross-functional teams and proposed new ideas while adopting modern technologies to enhance the product.",
    link: "https://vbi.openedu.net/en",
  },
  {
    logo: LecleLogo,
    company: "Lecle VietNam - Frontend Developer",
    date: "Jan 2023 — Apr 2024",
    desc: "Delivered outsourcing projects in e-commerce and social networking. Worked closely with cross-functional and overseas teams (Backend, BA, PM, Design) to build scalable features and meet client needs.",
    link: "https://www.lecle.vn/",
  },
  {
    logo: LecleLogo,
    company: "Lecle VietNam - Intern Frontend Developer",
    date: "Sep 2022 — Dec 2022",
    desc: "Simulated outsourced projects based on documentation to gain real project experience. Assisted mentor in developing an in-house company product.",
    link: "https://www.lecle.vn/",
  },
  {
    logo: GreenLogo,
    company: "Green Academy - Teaching Assistant (Part-time)",
    date: "Aug 2022 — Dec 2022",
    desc: "Supported instructors in HTML, CSS, and React classes, assisting students and clarifying course materials.",
    link: "https://www.greenacademy.edu.vn/",
  },
];

const ExperienceSection = () => {
  return (
    <div className="relative p-4 pl-16 border-l-2 ml-6 border-primary">
      <div className="absolute -left-6 -top-0 bg-primary p-3 rounded-xl">
        <Briefcase className="text-foreground" />
      </div>
      <h3 className="font-bold text-lg mb-6">Working Process</h3>

      {experiences.map((exp, index) => (
        <div key={index} className="relative mb-8 pl-4 space-y-2">
          {/* Dot */}
          <span className="absolute -left-[18px] top-4 w-3 h-3 bg-primary rounded-full border-2 border-muted" />
          <div className="flex gap-2 items-center">
            <img src={exp.logo} alt={exp.company} className="rounded-full w-8 h-8 object-cover" />
            <h4 className="font-semibold">{exp.company}</h4>
          </div>
          <p className="text-primary font-semibold text-sm">{exp.date}</p>
          <p className="text-sm">{exp.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
