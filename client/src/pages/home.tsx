import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const handleDownloadResume = () => {
    // Create a link to download the PDF resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be served from public folder
    link.download = 'Rujiwat_Pithaksiripan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-300">
            © 2024 Rujiwat Pithaksiripan. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with passion for clean code and elegant design.
          </p>
        </div>
      </footer>
      
      {/* Floating Download Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={handleDownloadResume}
          className="bg-gradient-to-br from-black to-gray-800 text-white p-4 rounded-full shadow-elegant hover:shadow-elegant-hover transform hover:scale-110 transition-all duration-300 w-14 h-14"
          title="Download Resume"
        >
          <Download className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
