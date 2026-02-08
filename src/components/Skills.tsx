import { Figma, Code2, Globe, Wrench, Users, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "UI/UX Tools",
      icon: Figma,
      color: "bg-highlight-yellow",
      skills: ["Figma", "Framer", "WIX", "WordPress", "Lovable"],
    },
    {
      title: "Web Technologies",
      icon: Code2,
      color: "bg-highlight-pink",
      skills: ["HTML", "CSS", "JavaScript", "Vercel"],
    },
    {
      title: "Design Skills",
      icon: Globe,
      color: "bg-highlight-blue",
      skills: ["Wireframing", "Prototyping", "Responsive Design"],
    },
    {
      title: "CMS & Builders",
      icon: Wrench,
      color: "bg-highlight-green",
      skills: ["WordPress", "WIX", "Lovable"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "bg-highlight-yellow",
      skills: ["Collaboration", "Communication", "Team Work"],
    },
    {
      title: "Core Strengths",
      icon: Lightbulb,
      color: "bg-highlight-pink",
      skills: ["Problem Solving", "Creativity", "Adaptability"],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
          Skills & <span className="highlight-blue sketchy-circle inline-block">Tools</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">Technologies and tools I work with</p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-foreground/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`${category.color} w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-4 h-4 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <h3 className="text-sm sm:text-xl font-semibold mb-2 sm:mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
