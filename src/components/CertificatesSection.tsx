
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Complete Machine Learning & Data Science Program",
      issuer: "GeeksforGeeks (GFG)",
      date: "May 2024 - July 2024",
      link: "https://drive.google.com/file/d/1o2kixZtNfJ9C-y7PyV78ciV-KgewHEIS/view"
    },
    {
      title: "Mastering Data Structures and Algorithms using C and C++",
      issuer: "Udemy",
      date: "August 2023 - November 2023",
      link: "https://drive.google.com/file/d/1PUeUScjv7qeurhvRzVwlc4D6Sjb84XgG/view"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certificates</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {certificates.map((cert, index) => (
            <Card key={index} className="opacity-0 animate-fade-in border border-primary/10">
              <CardHeader className="flex flex-row items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Certificate
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
