import Image from "@/components/common/image";
import OEThumbnail from "@/assets/oe-thumbnail.png";
import LivereThumbnail from "@/assets/livere-thumbnail.png";
import LecleMeetThumbnail from "@/assets/lecle-meet-thumbnail.png";
import { useState } from "react";

const projects = [
  {
    id: 2,
    title: "Openedu",
    thumbnail: OEThumbnail,
    date: "May 2024 — Aug 2025 | 5 front-end, 5 back-end |",
    description:
      " An educational platform with 190,000+ users, 30+ educators, B2B clients, and 20+ active courses – powered by Blockchain, AI, and Gamification",
    techStack: ["Nextjs", "TypeScript", "Shadcn UI"],
    link: "https://openedu.net/en",
    responsibles: [
      "Built educator‑facing features to create and publish courses.",
      "Implemented multi‑format lesson support (text, video, PDF, quiz, image)",
      "Integrated certificate templates with APIs for automated issuing",
      "Developed dynamic form modules with triggers and response tracking",
      "Implemented admin workflows for course preview, approval, and rejection",
      "Built UI customization tools for organizations (section templates, fonts, primary colors)",
      "Developed multilingual management and landing‑page embedding features",
    ],
    type: "Product",
  },
  {
    id: 3,
    title: "Livere Social Comment",
    thumbnail: LivereThumbnail,
    date: "Sep 2023 — Mar 2024 | 5 front-end, 3 back-end |",
    description:
      "Manage totaly comment by login with SNS account. By using 'Lit' lets you create reusable components that work on any website by simply adding a <script> tag to the DOM.",
    techStack: ["Lit", "SCSS", "Jotai", "ReactJS", "Material UI"],
    link: "https://livere.com/city-demo/city?livereVersion=new",
    responsibles: [
      "Contributed to a mono‑repo architecture for both client and admin sites.",
      "Built an embeddable comment system and an admin dashboard for moderation and analytics.",
      "Implemented customizable UI settings (color schemes, section visibility).",
      "Added comment sorting features and maintained profile components for performance.",
    ],
    type: "Outsource",
  },
  {
    id: 1,
    title: "Cheeko-sell",
    thumbnail: undefined,
    date: "May 2024 — Aug 2025 | 3 front-end, 3 back-end |",
    description:
      " An application that allows administrators to collect and compare E-commerce platform data, such as promotions and discounts.",
    techStack: ["React", "Styled Component", "Antd Design"],
    link: "https://cheekosell.com",
    responsibles: [
      "Created product search and data comparison features for e-commerce analytics.",
      "Integrated APIs in collaboration with back-end teams.",
      " Built and maintained a promotions page with searchable tables and detailed pop-ups",
    ],
    type: "Outsource",
  },
  {
    id: 4,
    title: "Lecle Meet",
    thumbnail: LecleMeetThumbnail,
    date: "Sep 2022 — Dec 2022 |",
    description:
      "A web application built for collaborative workflows. It offers integrated team messaging, audio and screen sharing, workflow automation, and project management such as booking meetings and sending requests.",
    techStack: ["React", "Typescript", "SCSS"],
    link: "https://meet.lecle.vn",
    responsibles: [
      "Contributed to updating the new version of the design, and fix bugs that occur during use to improve user experience.",
      "Coordinated with QC to test quality before releasing the product.",
    ],
    type: "Product",
  },
];

export const ProjectsSection = () => {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="flex gap-6 overflow-y-hidden">
      {/* Left - Scrollable List */}
      <div className="w-1/3 max-w-[300px] h-full overflow-y-auto custom-scrollbar space-y-4 p-4 pr-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className={`cursor-pointer border rounded-lg overflow-hidden group transition-all duration-200 hover:scale-[1.02] ${
              selected.id === project.id ? "border-primary" : "border-muted"
            }`}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full max-h-56 overflow-hidden object-contain group-hover:opacity-90"
            />
            <div className="p-2 text-center font-medium">{project.title}</div>
          </div>
        ))}
      </div>

      {/* Right - Detail Viewer */}
      <div className="flex-1 bg-muted/10 border border-muted rounded-xl p-6 backdrop-blur-sm space-y-2">
        <h3 className="text-2xl font-semibold">{selected.title}</h3>
        <div className="flex gap-2 items-center">
          <p className="text-muted-foreground font-semibold text-sm">{selected.date}</p>
          <p className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-md w-fit">
            {selected.type}
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{selected.description}</p>
        <div>
          <h3 className="text-xl font-semibold">Tech Stack </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {selected.techStack.map((tech, i) => (
              <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Responsibilities </h3>
          <ul className="list-disc ml-4">
            {selected?.responsibles?.map((content, index) => (
              <li className="text-sm text-muted-foreground" key={`list-${index}`}>
                {content}
              </li>
            ))}
          </ul>
        </div>
        {selected.link && (
          <a
            href={selected.link}
            target="_blank"
            className="inline-block mt-2 text-sm underline text-primary"
          >
            Visit project ↗
          </a>
        )}
      </div>
    </div>
  );
};
