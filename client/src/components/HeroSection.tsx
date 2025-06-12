import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { resumeData } from '@/lib/resumeData';
import profileImage from '@assets/1673412657098_1749705349784.jpeg';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rujiwat_Pithaksiripan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
        <div className="mb-8">
          {/* Professional profile image */}
          <div className="w-32 h-32 mx-auto rounded-full shadow-elegant mb-6 overflow-hidden border-4 border-white/20">
            <img 
              src={profileImage} 
              alt={`${resumeData.personal.name} ${resumeData.personal.surname}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          <span>{resumeData.personal.name}</span><br />
          <span className="text-gray-300">{resumeData.personal.surname}</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-2 text-gray-200">
          {resumeData.personal.title}
        </p>
        
        <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {resumeData.personal.profile}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToContact}
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-elegant"
          >
            Get In Touch
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            <Mail className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href={resumeData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href={resumeData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-pulse-subtle">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
