
import { Award, GraduationCap, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                <p className="text-foreground/70">
                  I'm a Computer Science & Engineering student at Lovely Professional University with a passion for creating efficient, user-friendly applications. My journey in tech is driven by curiosity and the desire to solve real-world problems through code.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <ul className="space-y-3 text-foreground/70">
                  <li>
                    <p className="font-medium">Bachelor of Technology - Computer Science & Engineering</p>
                    <p>Lovely Professional University | CGPA: 6.82 | 2022 - Present</p>
                  </li>
                  <li>
                    <p className="font-medium">Intermediate</p>
                    <p>Little Flower Children School | 71.8% | 2020 - 2021</p>
                  </li>
                  <li>
                    <p className="font-medium">Matriculation</p>
                    <p>Amrit Public School | 81.8% | 2018 - 2019</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 opacity-0 animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                <ul className="space-y-4 text-foreground/70">
                  <li>
                    <p className="font-medium">Campus Ambassador at DevTown (March 2024 - April 2024)</p>
                    <p>Promoted DevTown programs, workshops, and events through various marketing channels including social media, email campaigns, and in-person events.</p>
                  </li>
                  <li>
                    <p className="font-medium">Top 11-50% Students at University</p>
                    <p>Recognized for good academic performance and participation in extra-curricular activities.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/10">
              <h3 className="text-xl font-semibold mb-3">My Approach</h3>
              <p className="text-foreground/70">
                I approach every project with a focus on clean code, efficient solutions, and user experience. 
                My background in data structures, algorithms, and machine learning allows me to tackle complex 
                problems with analytical thinking. I'm constantly learning and adapting to new technologies to 
                expand my skill set and stay current in the rapidly evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
