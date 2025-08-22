import { Github, Linkedin, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

const socialData = [
  {
    link: undefined,
    tooltip: "linhdatran3@gmail.com",
    icon: <Mail className="text-primary" />,
  },
  {
    link: "https://github.com/linhdatran3",
    tooltip: "Github",
    icon: <Github className="text-primary" />,
  },
  {
    link: "https://www.linkedin.com/in/linhdatran/",
    tooltip: "LinkedIn",
    icon: <Linkedin className="text-primary" />,
  },
];

export const SocialSection = () => {
  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast("Copied!", {
        description: "Email address has been copied to clipboard.",
      });
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <div className="flex gap-6">
      {socialData?.map((item) => (
        <Tooltip key={item.tooltip}>
          <TooltipTrigger asChild>
            {item?.link ? (
              <a href={item?.link} target="_blank">
                {item.icon}
              </a>
            ) : (
              <button onClick={() => handleCopy(item.tooltip)}>{item.icon}</button>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>{item.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};
