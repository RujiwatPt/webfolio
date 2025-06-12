import { resumeData } from '@/lib/resumeData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-black mb-6">Professional Profile</h3>
            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              {resumeData.personal.profile}
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-inner-elegant">
                <h4 className="font-semibold text-black mb-2">Experience</h4>
                <p className="text-gray-600">3+ Years in Backend Development</p>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="bg-gradient-to-br from-black to-gray-800 p-8 rounded-2xl shadow-elegant text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>{resumeData.personal.location}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Backend Specialist</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>B.Sc. Information Technology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Senior Associate Engineer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
