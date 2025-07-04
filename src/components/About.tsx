
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">My Flutter Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 2 years of dedicated experience in mobile development, I've had the privilege of building innovative Flutter applications for a diverse range of clients and companies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I specialize in creating high-performance, cross-platform apps with beautiful user interfaces. My passion lies in leveraging the full power of the Flutter framework to deliver seamless and engaging mobile experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not crafting widgets, you'll find me exploring the latest trends in mobile UI/UX, contributing to the Flutter community, or diving deep into advanced Dart concepts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '2+', label: 'Years Experience' },
                { number: '20+', label: 'Happy Clients' },
                { number: '100%', label: 'Commitment' }
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className={`text-center hover-glow border-portfolio-purple/20 bg-gradient-to-br from-portfolio-blue/5 to-portfolio-purple/5 animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
