
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: "University Management System",
    description: "A comprehensive system designed to streamline administrative tasks and enhance data management for students and teachers.",
    features: [
      "User Authentication for students and teachers",
      "Data Management for efficient record-keeping",
      "Marks Entry for academic evaluation processes",
      "Leave Management for teachers and students",
      "Intuitive UI using Swing and AWT"
    ],
    tech: ["C++"],
    github: "#",
    demo: null
  },
  {
    title: "Corona Cases Analysis",
    description: "An interactive dashboard in Tableau to analyze COVID-19 cases over time across countries, enabling data-driven decision-making.",
    features: [
      "Dynamic Dashboard for visualizing daily, weekly, and cumulative trends",
      "Time-Series Analysis to track progression of cases",
      "Geographic Spread mapping of global hotspots",
      "Categorical Breakdown with filters by country, state, and demographics"
    ],
    tech: ["Tableau", "Data Analysis"],
    github: "#",
    demo: null
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="project-card opacity-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-foreground/70 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="skill-tag">{tech}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start space-x-4">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <a href="https://github.com/SanskarGupta001" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
