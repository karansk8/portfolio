
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transition: 'opacity 0.8s, transform 0.8s' }}
          >
            <span className="text-portfolio-blue">Hello, I'm</span>
            <br /> Karan Dave
          </h1>
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-8 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transition: 'opacity 0.8s 0.2s, transform 0.8s 0.2s' }}
          >
            DevOps Engineer | Site Reliablity Engineer | Cloud Engineer
          </p>
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transition: 'opacity 0.8s 0.4s, transform 0.8s 0.4s' }}
          >
            <Button asChild size="lg" className="bg-portfolio-blue hover:bg-portfolio-dark-blue text-white">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-portfolio-blue transition-colors animate-bounce ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transition: 'opacity 0.8s 0.6s' }}
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
