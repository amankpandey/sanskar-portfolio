
import { Code, Database, Brain, Briefcase } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    languages: ["C++", "SQL", "Python", "R Programming"],
    tools: ["MySQL", "Excel", "Tableau", "Linux"],
    softSkills: ["Problem-Solving Skills", "Team Player", "Project Management"]
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-card rounded-lg p-6 border shadow-sm opacity-0 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold ml-3">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm opacity-0 animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold ml-3">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border shadow-sm opacity-0 animate-fade-in md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold ml-3">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.softSkills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-card rounded-lg p-6 border shadow-sm opacity-0 animate-fade-in">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold ml-3">Experience Level</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="flex flex-col">
              <span className="text-lg font-medium">Programming</span>
              <div className="w-full h-4 bg-secondary rounded-full mt-2">
                <div className="h-4 bg-primary rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-medium">Data Analysis</span>
              <div className="w-full h-4 bg-secondary rounded-full mt-2">
                <div className="h-4 bg-primary rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-medium">Problem Solving</span>
              <div className="w-full h-4 bg-secondary rounded-full mt-2">
                <div className="h-4 bg-primary rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-medium">Database</span>
              <div className="w-full h-4 bg-secondary rounded-full mt-2">
                <div className="h-4 bg-primary rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


// END of the file...