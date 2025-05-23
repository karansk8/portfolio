
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ChatbotSection from "@/components/sections/ChatbotSection";
import ContactSection from "@/components/sections/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ChatbotSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
