import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Multiplatform News App",
      description:
        "A modern, cross-platform news app built with Flutter and Dart. Designed for Android, iOS, Web, and Desktop, it delivers real-time news from trusted sources with a responsive and beautifully crafted UI.",
      image: "/assets/newsy.png",
      technologies: ["Flutter", "Dart", "REST API"],
      githubUrl: "https://github.com/SafuRaja7/News-App-Multi-Platform",
    },
    {
      title: "Pool Art – Dexplat",
      description:
        "Developed at Dexplat, this intuitive mobile/web platform streamlines pool management and guest services. It features a clean UI, real-time booking, and admin tools for operational efficiency.",
      image: "/assets/poolart.png",
      technologies: ["Flutter", "Dart", "Firebase"],
      web: "https://",
    },
    {
      title: "DevFolio",
      description:
        "DevFolio is a sleek, fully responsive portfolio template for developers. It showcases skills, projects, and contact info, and is optimized for fast performance across mobile and desktop platforms.",
      image: "/assets/devfolio.png",
      technologies: ["React", "Tailwind CSS", "Vite", "Typescript"],
      githubUrl: "https://github.com/SafuRaja7/saifuraja-dev.git",
      web: "https://saifu.me",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in">
            Here are some of my recent projects that showcase my skills and
            passion for creating amazing web experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30 group animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-portfolio-blue group-hover:text-portfolio-purple transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-purple/10 hover:text-portfolio-purple hover:border-portfolio-purple/20 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-300 text-white"
                    >
                      GitHub
                    </Button>
                  )}

                  {project.web && (
                    <Button
                      onClick={() => window.open(project.web, "_blank")}
                      size="sm"
                      variant="outline"
                      className="flex-1 text-portfolio-blue border-portfolio-blue hover:bg-portfolio-blue/10"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
