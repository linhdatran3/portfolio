import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { SocialSection } from "./social-section";
import CV from "@/assets/cv.pdf";

const Homepage = () => {
  return (
    <>
      <div className="space-y-4 md:flex md:space-y-0 md:gap-8 md:justify-between">
        {/* Left Column */}
        <div className="space-y-6 w-full max-w-[400px] !m-auto">
          {/* Avatar and Intro */}
          <div className="flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Rima"
              className="rounded-full w-40 h-40 object-cover mb-4 border-4 border-foreground"
            />
            <div className="bg-primary text-foreground rounded-xl px-6 py-4 text-center w-full">
              <p className="text-xl font-medium">
                Hello, I'm <span className="font-bold">Linhda</span>
              </p>
              <p className="text-sm mt-2">Passionate designer driven by creativity & learning!</p>
            </div>
          </div>

          {/* Education and Skills */}
          <Card className="bg-neutral-100 dark:bg-neutral-900 border-none text-black dark:text-white">
            <CardContent className="p-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Education</h3>
                <p>University Information of Technoly - VNU</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">E-Commerce</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2019 - 2023</p>
                <p className="text-sm font-semibold">GPA - 8.67</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Software Skills</h3>
                <p className="text-sm">HTML5, CSS3, Tailwind, Antd, Shadcn, Material</p>
                <p className="text-sm">JavaScript, Typescript, React, Nextjs</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Soft Skills</h3>
                <p className="text-sm">UI/UX Designing, Figma, Framer, UX research</p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Right Column */}
        <div className="w-full">
          <div className="relative">
            {/* Custom Shape Background */}
            <div className="relative bg-card px-6 pt-6 pb-4 rounded-[2rem] overflow-hidden border-primary border">
              {/* Top-right Cutout */}
              <div className="absolute -top-1 -right-1 w-36 h-20 bg-accent rounded-bl-[4rem] z-1" />

              <div className="relative z-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">Featured Work</h2>
                  <a href="#" className="text-primary text-sm font-semibold hover:underline">
                    View Project ↗
                  </a>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Card className="bg-white dark:bg-neutral-800 text-black dark:text-white">
                    <CardContent className="p-4">
                      Nudging users to buy their first stock ⚡
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary text-secondary-foreground">
                    <CardContent className="p-4">
                      <div className="font-semibold">$10,000 → $14,000</div>
                      <div className="bg-white h-2 rounded-full mt-2"></div>
                    </CardContent>
                  </Card>
                  <Card className="bg-secondary/80 text-secondary-foreground col-span-2">
                    <CardContent className="p-4">
                      <p className="font-semibold">₹4,000 profit 🚀</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white dark:bg-neutral-800 text-black dark:text-white">
                    <CardContent className="p-4">
                      <p className="font-semibold text-sm">3% Increase</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        in conversion over 2 weeks
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* Socials and Resume */}
          <div className="mt-8 flex justify-between items-center flex-wrap gap-4 border border-primary rounded-2xl p-4 ">
            <SocialSection />
            <a href={CV} download="[CV]Frontend_tran_linh_da" target="_blank">
              <Button>Resume ↗</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
