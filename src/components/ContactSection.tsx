
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real application, you would send this data to a server
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-8 opacity-0 animate-fade-in">
            <p className="text-lg text-foreground/80">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <a href="mailto:gsanskar77@gmail.com" className="text-foreground hover:text-primary">
                    gsanskar77@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                  <a href="tel:+918707423986" className="text-foreground hover:text-primary">
                    +91 8707423986
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/sanskar-gupta04" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                    linkedin.com/in/sanskar-gupta04
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">GitHub</h3>
                  <a href="https://github.com/SanskarGupta001" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                    github.com/SanskarGupta001
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 opacity-0 animate-fade-in">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
