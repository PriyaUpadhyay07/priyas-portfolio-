import { Figma, Globe, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "UI/UX Tools",
      icon: Figma,
      color: "bg-highlight-yellow",
      type: "tags" as const,
      skills: ["Figma", "Framer", "v0 by Vercel", "Lovable", "Bolt.new", "Google Stitch", "WordPress"],
    },
    {
      title: "Design Skills",
      icon: Globe,
      color: "bg-highlight-blue",
      type: "tags" as const,
      skills: ["Wireframing", "Prototyping", "Responsive Design", "UX Research"],
    },
    {
      title: "Core Strengths",
      icon: Lightbulb,
      color: "bg-highlight-pink",
      type: "list" as const,
      skills: [
        "Designing user experiences that balance business goals with user needs.",
        "Turning complex ideas into simple experiences.",
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
          Design Skills & <span className="highlight-blue sketchy-circle inline-block">Tools</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">
          Technologies and tools I work with
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-7 shadow-md border border-foreground/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`${category.color} w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500`}
              >
                <category.icon className="w-5 h-5 sm:w-7 sm:h-7 text-foreground" />
              </div>
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4">{category.title}</h3>

              {category.type === "tags" ? (
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-secondary rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex gap-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
                      <span className="text-foreground font-bold mt-0.5">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
