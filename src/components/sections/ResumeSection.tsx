
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeSection = () => {
  const experiences = [
    {
      title: "Senior Developer",
      company: "Tech Company Inc.",
      period: "2021 - Present",
      description: "Lead development teams in creating responsive web applications. Implemented CI/CD pipelines and improved performance by 40%."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2021",
      description: "Built RESTful APIs and frontend interfaces for e-commerce applications. Worked with React, Node.js, and MongoDB."
    },
    {
      title: "Junior Web Developer",
      company: "Web Innovations Co.",
      period: "2016 - 2018",
      description: "Developed and maintained client websites, focusing on responsive design and cross-browser compatibility."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2014 - 2016",
      details: "Specialized in Software Engineering and Human-Computer Interaction."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      year: "2010 - 2014",
      details: "Graduated with honors. Senior project on web accessibility technologies."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
            <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
            <div className="mt-8">
              <Button className="bg-portfolio-blue hover:bg-portfolio-dark-blue">
                <Download size={16} className="mr-2" /> Download Full Resume
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm">
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <p className="text-gray-600 mb-4">{exp.company}</p>
                      <p className="text-gray-700">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full text-sm">
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold">{edu.degree}</h4>
                      <p className="text-gray-600 mb-4">{edu.institution}</p>
                      <p className="text-gray-700">{edu.details}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6 mt-12">Certifications</h3>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold">AWS Certified Solutions Architect</h4>
                  <p className="text-gray-600 mb-2">Amazon Web Services, 2022</p>
                  
                  <h4 className="text-xl font-bold mt-6">Google Professional Cloud Developer</h4>
                  <p className="text-gray-600">Google Cloud, 2021</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
