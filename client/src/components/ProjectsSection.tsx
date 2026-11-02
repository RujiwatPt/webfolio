import { ExternalLink } from 'lucide-react';
import { resumeData } from '@/lib/resumeData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-black to-gray-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Selected projects, creative studio builds, and hackathons
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <div
              key={project.name}
              className="bg-white p-6 rounded-xl shadow-elegant hover:shadow-elegant-hover transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  {'url' in project && project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-black hover:text-gray-600 transition-colors inline-flex items-center gap-1.5 group"
                    >
                      <span>{project.name}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                    </a>
                  ) : (
                    <h3 className="text-xl font-semibold text-black">{project.name}</h3>
                  )}
                </div>
                <span className="flex-shrink-0 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-700 border border-gray-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {'url' in project && project.url && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-black hover:text-gray-600 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Visit website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
