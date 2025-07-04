
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const projects = [
    {
      title: 'Multiplatform News App',
      description: 'Stay informed with our sleek, cross-platform News App built using Flutter and Dart. Designed for Android, iOS, Web, and Desktop, this app delivers real-time news from trusted sources in a fast, responsive, and beautifully crafted UI.',
      image: '/assets/newsy.png',
      technologies: ['Flutter', 'Dart','REST API'],
      githubUrl: 'https://github.com/SafuRaja7/News-App-Multi-Platform'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io'],
      githubUrl: '#'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'A dashboard application that uses machine learning to provide insights from business data with interactive charts and visualizations.',
      image: '/placeholder.svg',
      technologies: ['Python', 'React', 'TensorFlow', 'D3.js'],
      githubUrl: '#'
    },
    {
      title: 'Real Estate Platform',
      description: 'A modern real estate platform with advanced search filters, virtual tours, and mortgage calculator integration.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Mapbox'],
      githubUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management tool that allows scheduling posts, analytics tracking, and multi-platform integration.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'Redis', 'AWS S3'],
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course creation tools, progress tracking, and interactive video lessons with quiz integration.',
      image: '/placeholder.svg',
      technologies: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in">
            Here are some of my recent projects that showcase my skills and passion for creating amazing web experiences.
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
                  <Button 
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    size="sm"
                    className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-300 text-white flex-1"
                  >
                    GitHub
                  </Button>
                
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
