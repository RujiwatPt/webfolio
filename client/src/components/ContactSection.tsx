import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and connecting with fellow developers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <div className="text-center bg-gray-50 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Email</h3>
            <a
              href={`mailto:${resumeData.personal.email}`}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              {resumeData.personal.email}
            </a>
          </div>
          
          {/* Phone */}
          <div className="text-center bg-gray-50 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Phone</h3>
            <a
              href={`tel:${resumeData.personal.phone.replace(/-/g, '')}`}
              className="text-gray-600 hover:text-black transition-colors duration-300"
            >
              {resumeData.personal.phone}
            </a>
          </div>
          
          {/* Location */}
          <div className="text-center bg-gray-50 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">Location</h3>
            <p className="text-gray-600">{resumeData.personal.location}</p>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href={resumeData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-elegant"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={resumeData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-elegant"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${resumeData.personal.email}`}
            className="w-12 h-12 bg-gradient-to-br from-black to-gray-600 rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-elegant"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
