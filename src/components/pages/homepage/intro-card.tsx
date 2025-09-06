import Ava from "@/assets/ava.webp";
import { useTyping } from "@/hooks/useTyping";
const IntroCard = () => {
  const typed = useTyping([
    "I'm a Frontend Developer 👨‍💻",
    "I love clean code ✨",
    "I build React apps ⚛️",
    "I design in Tailwind CSS 💅",
  ]);
  return (
    <div className="flex flex-col items-center">
      <img
        src={Ava}
        alt="linhda"
        height={"190px"}
        width={"190px"}
        srcSet={`${Ava} 1x, ${Ava} 2x`}
        className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-foreground"
        loading="lazy"
      />
      <div className="bg-primary text-foreground rounded-xl px-6 py-4 text-center w-full">
        <p className="text-xl font-medium">
          Hello, I'm <span className="font-bold">Linhda</span>
        </p>
        <div className="text-lg sm:text-xl font-semibold text-accent-foreground">
          {typed}
          <span className="animate-pulse inline-block w-1 h-5 ml-1 bg-foreground align-middle" />
        </div>
        <p className="text-sm mt-2">Passionate frontend developer based in HCM - Vietnam</p>
      </div>
    </div>
  );
};

export default IntroCard;
