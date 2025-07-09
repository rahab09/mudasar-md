import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Zap, Palette, Shield, Brain } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      description: 'Building responsive, interactive user interfaces',
      skills: [
        { name: 'React.js', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-800' },
        { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-900' },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-blue-500' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      description: 'Scalable server-side solutions',
      skills: [
        { name: 'Node.js', level: 93, color: 'from-green-500 to-green-700' },
        { name: 'Express.js', level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'MongoDB', level: 87, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 85, color: 'from-blue-700 to-indigo-700' },
      ]
    },
    {
      title: 'Blockchain & Web3',
      icon: Shield,
      description: 'Decentralized applications and smart contracts',
      skills: [
        { name: 'Solidity', level: 82, color: 'from-purple-500 to-purple-700' },
        { name: 'Web3.js', level: 78, color: 'from-orange-500 to-red-500' },
        { name: 'Ethers.js', level: 80, color: 'from-blue-500 to-purple-600' },
        { name: 'Smart Contracts', level: 75, color: 'from-indigo-500 to-purple-600' },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent applications and automation',
      skills: [
        { name: 'OpenAI APIs', level: 85, color: 'from-emerald-500 to-teal-600' },
        { name: 'Python', level: 75, color: 'from-yellow-500 to-orange-500' },
        { name: 'TensorFlow', level: 70, color: 'from-orange-500 to-red-600' },
        { name: 'ML Integration', level: 80, color: 'from-pink-500 to-rose-600' },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      description: 'User-centered design and experience',
      skills: [
        { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-500' },
        { name: 'Design Systems', level: 85, color: 'from-indigo-500 to-purple-500' },
        { name: 'Prototyping', level: 82, color: 'from-pink-500 to-rose-500' },
        { name: 'User Research', level: 78, color: 'from-teal-500 to-green-500' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Zap,
      description: 'Development workflow and deployment',
      skills: [
        { name: 'Git/GitHub', level: 95, color: 'from-gray-700 to-gray-900' },
        { name: 'Docker', level: 75, color: 'from-blue-600 to-blue-800' },
        { name: 'AWS', level: 70, color: 'from-orange-500 to-yellow-500' },
        { name: 'CI/CD', level: 78, color: 'from-green-600 to-blue-600' },
      ]
    }
  ];

  const technologies = [
    { name: 'React.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Solidity', category: 'Blockchain' },
    { name: 'Web3.js', category: 'Blockchain' },
    { name: 'Ethers.js', category: 'Blockchain' },
    { name: 'OpenAI APIs', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Figma', category: 'Design' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'Frontend' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Technical Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Specialized in cutting-edge technologies that power modern digital solutions
          </p>
        </div>

        {/* Enhanced Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background/50 to-muted/20 hover:from-background/80 hover:to-muted/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-portfolio-blue/10 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20">
                      <IconComponent className="w-6 h-6 text-portfolio-blue" />
                    </div>
                    <CardTitle className="text-lg gradient-text">{category.title}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Professional Technology Grid */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4 animate-fade-in">Technology Stack</h3>
          <p className="text-muted-foreground mb-12 animate-fade-in">
            The tools and technologies I leverage to build exceptional digital experiences
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={`tech-${tech.name}-${index}`}
                className={`p-4 rounded-xl bg-gradient-to-br from-background/80 to-muted/20 border border-portfolio-blue/20 hover:border-portfolio-purple/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-scale-in`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <div className="text-sm font-semibold text-foreground group-hover:text-portfolio-blue transition-colors duration-300">
                    {tech.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {tech.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
