import Image from "@/components/common/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ExternalLink, GraduationCap, Award as AwardIcon, Trophy } from "lucide-react";
import type { JSX } from "react";

type AchievementType = "Education" | "Certificate" | "Award";

interface AchievementItem {
  type: AchievementType;
  title: string;
  subtitle?: string;
  date?: string;
  image?: string;
  description?: string;
  link?: string; // optional certificate / reference link
  linkLabel?: string; // optional CTA label
}

const typeConfig: Record<AchievementType, { icon: JSX.Element; badgeClass: string }> = {
  Education: {
    icon: <GraduationCap className="h-4 w-4" />,
    badgeClass: "bg-blue-500/10 text-blue-600",
  },
  Certificate: {
    icon: <Trophy className="h-4 w-4" />,
    badgeClass: "bg-emerald-500/10 text-emerald-600",
  },
  Award: { icon: <AwardIcon className="h-4 w-4" />, badgeClass: "bg-amber-500/10 text-amber-700" },
};

const AchievementCard = ({ item }: { item: AchievementItem }) => {
  const cfg = typeConfig[item.type];
  return (
    <div className="group relative">
      <Card className="border-muted bg-background/50 shadow-md backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-4">
            {item.image ? (
              <div className="shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-contain bg-white rounded-md p-1 border"
                  loading="lazy"
                />
              </div>
            ) : null}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge className={`gap-1 px-2 py-0.5 ${cfg.badgeClass}`}>
                  {cfg.icon}
                  <span className="text-[11px] font-medium">{item.type}</span>
                </Badge>
                {item.date ? (
                  <span className="text-xs text-muted-foreground italic">{item.date}</span>
                ) : null}
              </div>

              <h4 className="font-semibold text-base leading-snug truncate">{item.title}</h4>
              {item.subtitle ? (
                <p className="text-sm text-muted-foreground truncate">{item.subtitle}</p>
              ) : null}
              {item.description ? (
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {item.description}
                </p>
              ) : null}

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm mt-3 underline underline-offset-2 hover:no-underline"
                  aria-label={item.linkLabel ?? "Open external link"}
                >
                  {item.linkLabel ?? "Open"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

AchievementCard.displayName = "AchievementCard";
export { AchievementCard, type AchievementType, type AchievementItem };
