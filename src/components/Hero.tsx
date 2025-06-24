
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-br from-portfolio-cyan/20 to-portfolio-pink/20 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              Alex Johnson
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
            <span className="animate-slide-in-left">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-in-right">
            I create amazing web experiences with modern technologies. 
            Passionate about clean code, beautiful design, and solving complex problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-portfolio-blue/25"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="border-portfolio-blue/50 text-portfolio-blue hover:bg-portfolio-blue/10 hover:border-portfolio-purple/50 hover:text-portfolio-purple transition-all duration-300 font-semibold px-8 py-3 rounded-full hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-portfolio-blue/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-portfolio-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
