import { useTyping } from "@/hooks/useTyping";

export const MeSection = () => {
  const typed = useTyping([
    "I'm a Frontend Developer 👨‍💻",
    "I love clean code ✨",
    "I build React apps ⚛️",
    "I design in Tailwind CSS 💅",
  ]);
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <p className="text-3xl font-bold mb-4">Hi!!!</p>
      <p className="text-muted-foreground max-w-xl mx-auto mb-6">
        I'm Đa Trần — a passionate frontend developer based in Vietnam. I specialize in building
        fast, accessible, and engaging web apps using React and Tailwind CSS.
      </p>
      <div className="text-xl sm:text-2xl font-semibold text-primary mb-6 min-h-[2.5rem]">
        {typed}
        <span className="animate-pulse inline-block w-1 h-5 ml-1 bg-primary align-middle" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6 text-left">
        <div className="bg-muted rounded-xl p-6 backdrop-blur-md">
          <h3 className="font-semibold text-lg mb-2">My Journey</h3>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Started coding in 2021</li>
            <li>Freelanced on multiple React projects</li>
            <li>Contributed to open source</li>
          </ul>
        </div>
        <div className="bg-muted rounded-xl p-6 backdrop-blur-md">
          <h3 className="font-semibold text-lg mb-2">Currently</h3>
          <p className="text-sm">
            Learning advanced TypeScript & experimenting with UI animations using Framer Motion.
          </p>
        </div>

        <div className="bg-muted rounded-xl p-6 backdrop-blur-md">
          <h3 className="font-semibold text-lg mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">🎧 Music</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">🚶 Hiking</span>
            <span className="bg-primary/10 text-primary px-2 py-1 rounded">🎮 Gaming</span>
          </div>
        </div>
        <div className="bg-muted rounded-xl p-6 backdrop-blur-md">
          <h3 className="font-semibold text-lg mb-2">Date of birth</h3>
          <p className="italic text-sm">08/10/2001</p>
        </div>
      </div>
    </div>
  );
};
