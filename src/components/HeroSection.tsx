
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-6 opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-primary">Sanskar Gupta</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 font-light opacity-0 animate-stagger-1">
            Crafting Code. Creating Experiences.
          </h2>
          <p className="text-lg text-foreground/70 max-w-lg opacity-0 animate-stagger-2">
            Computer Science student and developer with a passion for problem-solving and building impactful applications.
          </p>
          <div className="flex space-x-4 pt-4 opacity-0 animate-stagger-3">
            <Button>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center opacity-0 animate-stagger-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-background rounded-full blur-3xl -z-10"></div>
            <div className="overflow-hidden rounded-full border-4 border-primary/20 shadow-xl max-w-xs">
              <img 
                src="/uploads/profile.png" 
                alt="Sanskar Gupta" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-stagger-5"
      >
        <Button variant="ghost" size="icon" className="animate-float">
          <ChevronDown className="h-6 w-6" />
        </Button>
      </a>
    </section>
  );
};

export default HeroSection;
