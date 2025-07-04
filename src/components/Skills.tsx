import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 90 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Firebase', level: 90 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 90 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Figma', level: 85 },
      ]
    }
  ];

  const technologies = [
    'Flutter', 'Dart', 'Python', 'PostgreSQL', 'MongoDB', 'Git',
    'GraphQL', 'REST APIs', 'Figma'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-portfolio-purple">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 animate-fade-in">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 animate-slide-in-left">
            {technologies.map((tech, index) => (
              <span 
                key={tech}
                className={`skill-badge animate-scale-in`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
