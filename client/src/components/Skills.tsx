import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Cpu, Palette } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "JavaScript"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      icon: Globe,
      title: "Web3 & Blockchain",
      skills: ["Solidity", "Web3.js", "Ethers.js", "Smart Contracts", "DeFi"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Cross-platform", "Mobile UI/UX"]
    },
    {
      icon: Cpu,
      title: "AI/ML Integration",
      skills: ["OpenAI APIs", "Python", "Machine Learning", "AI Tools", "Automation"]
    },
    {
      icon: Palette,
      title: "Design & Tools",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies, blockchain, and AI/ML
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={`category-${categoryIndex}`} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={`skill-${categoryIndex}-${skillIndex}`} 
                        variant="secondary" 
                        className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Always learning and adapting to new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "Problem Solving", "System Design", "Code Review", "Mentoring", 
              "Agile/Scrum", "Team Leadership", "Project Management", "Client Communication"
            ].map((softSkill, index) => (
              <Badge 
                key={`soft-skill-${index}`} 
                variant="outline" 
                className="text-sm hover:bg-muted transition-colors"
              >
                {softSkill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}