import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    thumbnail: "/images/portfolio.png",
    description: "A modern personal portfolio built with React and Tailwind.",
    techStack: ["React", "TailwindCSS", "Vite"],
    link: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    thumbnail: "/images/dashboard.png",
    description: "Admin dashboard for managing e-commerce orders and users.",
    techStack: ["Next.js", "TypeScript", "Shadcn UI"],
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Chat Application",
    thumbnail: "/images/chatapp.png",
    description: "Real-time chat app using Firebase and Zustand for state.",
    techStack: ["React", "Firebase", "Zustand"],
    link: "https://example.com",
  },
];

export const ProjectsSection = () => {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <div className="flex gap-6 h-[inherit]">
      {/* Left - Scrollable List */}
      <div className="w-1/3 h-full overflow-y-auto custom-scrollbar space-y-4 pr-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className={`cursor-pointer border rounded-lg overflow-hidden group transition-all duration-200 hover:scale-[1.02] ${
              selected.id === project.id ? "border-primary" : "border-muted"
            }`}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-32 object-cover group-hover:opacity-90"
            />
            <div className="p-2 text-sm font-medium">{project.title}</div>
          </div>
        ))}
      </div>

      {/* Right - Detail Viewer */}
      <div className="h-full flex-1 bg-muted/10 border border-muted rounded-xl p-6 backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2">{selected.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{selected.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {selected.techStack.map((tech, i) => (
            <span key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
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
