import { resumeData } from '@/lib/resumeData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-black to-gray-600"></div>
          
          {resumeData.experience.map((experience, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
              }`}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-black rounded-full border-4 border-white shadow-lg absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
              
              <div className={`ml-12 md:ml-0 ${
                index % 2 === 0 
                  ? 'md:w-1/2 md:pr-8 md:text-right' 
                  : 'md:w-1/2 md:pl-8'
              }`}>
                <div className="bg-gray-50 p-6 rounded-xl shadow-elegant">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-2">
                    {experience.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {experience.duration}
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-sm">
                        • {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
