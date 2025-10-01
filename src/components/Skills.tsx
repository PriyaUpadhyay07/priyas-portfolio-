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
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="highlight-blue sketchy-circle inline-block">Tools</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">Technologies and tools I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-foreground/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors cursor-default"
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
