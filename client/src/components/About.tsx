
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
                <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">My Development Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Over the past year, I have worked closely with designers, developers, and AI experts to turn many ideas into real products — whether that meant building modern Web3 dashboards, mobile-first platforms, or integrating OpenAI into smart business tools.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My primary stack revolves around React.js, Node.js, MongoDB, and PostgreSQL. Additionally, I have been learning blockchain technologies in depth, such as Solidity, Web3.js, and NFT smart contracts.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What truly drives me is solving real problems with code — from intuitive UI/UX designs to scalable backend logic. Every project is an opportunity for me to explore, refine, and deliver.
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
