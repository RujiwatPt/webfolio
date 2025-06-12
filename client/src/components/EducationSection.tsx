import { GraduationCap, Brain } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

export default function EducationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Education & Learning</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Formal Education */}
          <div className="bg-white p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-left">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-black mr-4" />
              <h3 className="text-2xl font-semibold text-black">Formal Education</h3>
            </div>
            
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-black pl-4">
                  <h4 className="font-semibold text-black">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.field}</p>
                  {edu.major && <p className="text-gray-600">Major: {edu.major}</p>}
                  <p className="text-sm text-gray-500">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Continuous Learning */}
          <div className="bg-gradient-to-br from-black to-gray-800 p-8 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 text-white animate-fade-in-right">
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 mr-4" />
              <h3 className="text-2xl font-semibold">Continuous Learning</h3>
            </div>
            
            <div className="space-y-4">
              {resumeData.learning.map((course, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{course.title}</h4>
                  <p className="text-gray-300 text-sm">
                    By {course.instructor} • {course.platform}
                  </p>
                </div>
              ))}
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Professional Development Focus:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Backend Architecture & Scalability</li>
                  <li>• API Design & Integration</li>
                  <li>• Database Optimization</li>
                  <li>• Testing & Quality Assurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
