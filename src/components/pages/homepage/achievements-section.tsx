const timelineItems = [
  {
    type: "Education",
    title: "Bachelor of Computer Science",
    subtitle: "University of Technology",
    date: "2018 – 2022",
    image: "/images/university.png",
    description: "Graduated with honors. Specialized in web development.",
  },
  {
    type: "Certificate",
    title: "Meta React Certification",
    subtitle: "Coursera",
    date: "May 2024",
    image: "/images/react-cert.png",
    description: "Covered React fundamentals, hooks, and optimization.",
    link: "#",
  },
  {
    type: "Award",
    title: "Top Developer Award",
    subtitle: "Vietnam Web Awards",
    date: "2021",
    image: "/images/award.png",
    description: "Recognized for contributions to the open-source community.",
  },
];
const AchievementsSection = () => {
  return (
    <div className="relative border-l border-muted pl-6 space-y-10">
      {timelineItems.map((item, index) => (
        <div key={index} className="relative group">
          {/* Timeline Dot */}
          <div className="absolute -left-[10px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
          {/* Timeline Card */}
          <div className="bg-background/50 border border-muted rounded-xl p-4 shadow-md backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-14 h-14 object-contain bg-white rounded-md p-1 border"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                <p className="text-xs text-muted-foreground italic">{item.date}</p>
              </div>
            </div>
            <p className="mt-3 text-sm">{item.description}</p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-primary text-sm underline"
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsSection;
