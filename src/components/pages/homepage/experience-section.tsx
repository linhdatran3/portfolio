import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Openedu - Fulltime",
    date: "May 2024 — Aug 2025",
    position: "Frontend Developer",
  },
  {
    company: "Lecle VietNam - Fulltime",
    date: "Sep 2022 — Apr 2024",
    position: "Software Testing",
  },
  {
    company: "Green Academy - Partime",
    date: "Aug 2022 — Dec 2022",
    position: "Teaching Assistant",
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
        <div key={index} className="relative mb-8 pl-4">
          {/* Dot */}
          <span className="absolute -left-[18px] top-1 w-3 h-3 bg-primary rounded-full border-2 border-muted" />
          <h4 className="font-semibold">{exp.company}</h4>
          <p className="text-primary text-sm">{exp.date}</p>
          <p className="text-sm">Position: {exp.position}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
