import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiLit,
  SiTailwindcss,
  SiBootstrap,
  SiAntdesign,
  SiStyledcomponents,
  SiReacthookform,
  SiReactquery,
  SiPostman,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiShadcnui,
  SiMaterialdesign,
} from "react-icons/si";

const skillsData = [
  {
    title: "Markup & Programming Languages",
    icons: [
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "UI Frameworks",
    icons: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
      { name: "Lit", Icon: SiLit, color: "#324FFF" },
    ],
  },
  {
    title: "CSS / Styling",
    icons: [
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "Material UI", Icon: SiMaterialdesign, color: "#007FFF" },
      { name: "Ant Design", Icon: SiAntdesign, color: "#0170FE" },
      { name: "Shadcn UI", Icon: SiShadcnui, color: "#000000" },
      { name: "Styled Components", Icon: SiStyledcomponents, color: "#DB7093" },
    ],
  },
  {
    title: "State & Form",
    icons: [
      { name: "Zustand", Icon: undefined, color: "#000000" },
      { name: "React Hook Form", Icon: SiReacthookform, color: "#EC5990" },
      { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
    ],
  },
  {
    title: "API & Database",
    icons: [
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="rounded-xl">
      {skillsData.map((category, index) => (
        <div key={index} className="mb-10">
          <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
          <div className="bg-foreground/5 backdrop-blur-lg rounded-2xl p-4 shadow-inner border border-foreground/10">
            <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-6 place-items-center">
              {category.icons.map((icon, i) => (
                <div
                  key={i}
                  className="group relative flex items-center justify-center w-16 h-16 rounded-xl 
                             bg-foreground/5 border border-foreground/10
                             hover:bg-primary/10 hover:border-primary/30
                             transition-all duration-300"
                >
                  {icon?.Icon ? (
                    <icon.Icon
                      className="text-3xl transition-transform duration-300 group-hover:scale-110"
                      style={{ color: icon.color }}
                    />
                  ) : (
                    <> {icon.name}</>
                  )}
                  <span className="absolute bottom-[-2.2rem] text-xs bg-primary text-accent-foreground px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    {icon.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
