import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    company: "Freelancer",
    title: "Full Stack Developer & Tech Consultant",
    duration: "Jan 2024 – Present",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Solidity",
      "Web3.js",
      "OpenAI APIs",
    ],
    work: [
      "Developed full-stack applications using React.js, Node.js, and MongoDB",
      "Built cross-platform apps with Flutter and React Native",
      "Integrated AI tools and chatbots using OpenAI APIs",
      "Developed smart contracts with Solidity and Web3.js",
      "Created modern Web3 dashboards and mobile-first platforms",
      "Collaborated with designers, developers, and AI experts to turn ideas into real products",
      "Delivered scalable backend logic and intuitive UI/UX designs",
    ],
    color: "border-portfolio-blue/30",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center mb-6 animate-fade-in">
          Experience
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-12" />

        <div className="space-y-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={`${exp.company}-${index}`}
              className={`hover-glow ${exp.color} bg-gradient-to-br from-muted/10 to-background animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-portfolio-blue w-5 h-5" />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {exp.title} |{" "}
                      <span className="gradient-text">{exp.company}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Work Highlights:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                    {exp.work.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
