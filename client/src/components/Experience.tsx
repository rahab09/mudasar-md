import { Briefcase, Calendar, Award, Users, TrendingUp, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Independent Consultant",
    title: "Senior Full Stack Developer & Blockchain Specialist",
    duration: "Jan 2024 – Present",
    type: "Freelance",
    location: "Remote",
    icon: Briefcase,
    technologies: [
      "React.js", "TypeScript", "Node.js", "Express.js",
      "MongoDB", "PostgreSQL", "Solidity", "Web3.js",
      "OpenAI APIs", "Docker", "AWS", "Tailwind CSS"
    ],
    achievements: [
      "Led development of 15+ full-stack applications with 99.9% uptime",
      "Architected and deployed blockchain solutions serving 10,000+ users",
      "Integrated AI/ML capabilities that increased client efficiency by 40%",
      "Built responsive web applications with 100% mobile compatibility",
      "Delivered projects 20% faster than industry average through optimized workflows",
      "Mentored junior developers and established best practices for development teams"
    ],
    responsibilities: [
      "Full-stack application development using modern JavaScript frameworks",
      "Smart contract development and blockchain integration",
      "AI/ML integration and automation solutions",
      "Database design and optimization",
      "API design and microservices architecture",
      "Performance optimization and security implementation"
    ],
    color: "border-portfolio-blue/30",
    highlights: {
      projects: "50+",
      clients: "25+",
      technologies: "20+",
      satisfaction: "100%"
    }
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Professional Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Delivering exceptional results through innovative technology solutions and collaborative expertise
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card
                key={`${exp.company}-${index}`}
                className={`hover-glow ${exp.color} bg-gradient-to-br from-background/80 to-muted/20 hover:shadow-2xl hover:shadow-portfolio-blue/10 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                    <div className="flex items-center gap-4 mb-4 lg:mb-0">
                      <div className="p-3 rounded-full bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20">
                        <IconComponent className="text-portfolio-blue w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-foreground font-medium">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </span>
                          <Badge variant="secondary" className="bg-portfolio-blue/10 text-portfolio-blue">
                            {exp.type}
                          </Badge>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                      {Object.entries(exp.highlights).map(([key, value]) => (
                        <div key={key} className="p-3 bg-gradient-to-r from-portfolio-blue/5 to-portfolio-purple/5 rounded-lg">
                          <div className="text-xl font-bold gradient-text">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-portfolio-blue flex items-center gap-2">
                      <Code2 className="w-5 h-5" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-purple/10 hover:text-portfolio-purple transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-portfolio-purple flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-portfolio-blue rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-portfolio-cyan flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Core Responsibilities
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-portfolio-purple rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
