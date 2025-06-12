import { Server, Database, Monitor, Settings } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Backend',
      icon: Server,
      skills: resumeData.skills.backend,
    },
    {
      title: 'Database',
      icon: Database,
      skills: resumeData.skills.database,
    },
    {
      title: 'Frontend',
      icon: Monitor,
      skills: resumeData.skills.frontend,
    },
    {
      title: 'Tools & Testing',
      icon: Settings,
      skills: resumeData.skills.tools,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized in backend development with expertise in modern frameworks and databases
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <IconComponent className="w-8 h-8 text-black mb-3 mx-auto" />
                  <h3 className="text-xl font-semibold text-black">{category.title}</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
