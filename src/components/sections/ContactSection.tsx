
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formState);
      setFormState({
        name: '',
        email: '',
        message: '',
      });
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-portfolio-blue mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to explore collaboration opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5">
              <div className="bg-portfolio-blue text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p>contact@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p>(123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p>City, State, Country</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-portfolio-blue p-2 rounded-full hover:bg-opacity-90 transition-opacity"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-portfolio-blue p-2 rounded-full hover:bg-opacity-90 transition-opacity"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/5">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message here..."
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-portfolio-blue hover:bg-portfolio-dark-blue"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
