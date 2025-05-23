
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with user authentication, product management, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
      image: "bg-gray-300"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      liveUrl: "#",
      githubUrl: "#",
      image: "bg-gray-300"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application that provides forecast data and historical weather patterns.",
      tags: ["JavaScript", "Weather API", "Chart.js", "CSS"],
      liveUrl: "#",
      githubUrl: "#",
      image: "bg-gray-300"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio site showcasing my skills and projects (the one you're viewing now).",
      tags: ["React", "TailwindCSS", "TypeScript", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      image: "bg-gray-300"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one represents different challenges I've overcome and skills I've developed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-48 ${project.image} flex items-center justify-center text-gray-600`}>
                  Project Image
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-portfolio-blue hover:bg-portfolio-dark-blue">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
