import { Card, CardContent } from "@/components/ui/card";

const EducationCard = ({ className }: { className?: string }) => (
  <Card className={className}>
    <CardContent className="space-y-4 overflow-y-auto custom-scrollbar text-foreground">
      <div>
        <h3 className="text-lg font-semibold">Career Summary</h3>
        <p className="text-sm">
          Front-end Developer with 3+ years of experience in building and maintaining web
          applications. Skilled in ReactJS, Next.js, and modern front-end ecosystems. Proven ability
          to deliver scalable UI components, integrate APIs, and apply solid software design
          principles. Strong communication, adaptability, and teamwork in fast-paced.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Education</h3>
        <p>University Information of Technology - VNU</p>
        <p className="text-sm text-foreground/80">2019 - 2023</p>
        <p className="text-sm font-semibold">GPA - 8.67</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Software Skills</h3>
        <p className="text-sm">HTML5, CSS3, Tailwind, Antd, Shadcn, Material</p>
        <p className="text-sm">JavaScript, Typescript, React, Nextjs</p>
      </div>
    </CardContent>
  </Card>
);

export default EducationCard;
