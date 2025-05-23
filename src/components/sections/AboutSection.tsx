
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    "Kubernetes", "Docker", "Python", 
    "Ansible", "AWS", "Linode",
    "Go", "Saltstack", "Jenkins",
    "Git", "GCP", "CI/CD", "Pulumi", "Serverless", 
    "Terraform", "Prometheus", "Grafana", "Helm", "Vault", "Packer", "ArgoCD"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-portfolio-blue mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 overflow-hidden rounded-full border-4 border-portfolio-blue">
                <div className="bg-gray-300 w-full h-full flex items-center justify-center text-gray-600">
                  Photo
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Professional Bio</h3>
              <p className="text-gray-700 mb-6">
                I am a passionate developer with 5+ years of experience building web applications and digital experiences. 
                My journey in tech began with a Computer Science degree from University Name, and I've since worked with startups 
                and established companies to create meaningful digital solutions.
              </p>
              <p className="text-gray-700 mb-8">
                When I'm not coding, you can find me hiking in nature, reading science fiction, or experimenting with new recipes. 
                I believe in continuous learning and am always exploring new technologies to expand my skill set.
              </p>
              
              <h4 className="font-bold text-lg mb-4">Technical Skills</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <Card key={index} className="bg-gray-50 hover:shadow-md transition-shadow">
                    <CardContent className="py-3 px-4 text-center">
                      {skill}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
