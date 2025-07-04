import { useState } from "react";
import emailjs from 'emailjs-com';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { title } from "process";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: name,
      email: email,
      subject,
      message,
    };
    try {
      const result = await emailjs.send(
        'service_1ieq7mn',          // Your EmailJS service ID
        'template_hlixc5d',         // Your EmailJS template ID
        templateParams,
        'mjwsxJlC_FF8hUsr3'         // Your EmailJS public key
      );
  
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
  
      // Reset form fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly at rajasaifi49@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: "Email",
      value: "rajasaifi49@gmail.com",
      color: "text-portfolio-blue",
    },
    {
      title: "Phone",
      value: "+92 301 5580405",
      color: "text-portfolio-purple",
    },
    {
      title: "Location",
      value: "Islamabad, Pakistan",
      color: "text-portfolio-cyan",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-portfolio-blue">
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-portfolio-blue/20 focus:border-portfolio-purple/50 transition-all duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-300 text-white font-semibold py-3 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-portfolio-blue/25"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="hover-glow border-portfolio-purple/20 bg-gradient-to-br from-portfolio-blue/5 to-portfolio-purple/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to discussing new opportunities, creative
                  ideas, or potential collaborations. Whether you have a project
                  in mind or just want to say hello, don't hesitate to reach
                  out!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className={`flex items-center space-x-3 animate-fade-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-full"></div>
                      <div>
                        <span className="text-sm text-muted-foreground">
                          {info.title}:{" "}
                        </span>
                        <span className={`font-medium ${info.color}`}>
                          {info.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-glow border-portfolio-cyan/20 bg-gradient-to-br from-portfolio-cyan/5 to-portfolio-green/5">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-portfolio-cyan">
                  Follow me
                </h3>
                <div className="flex space-x-4">
                  {[
                    { name: "GitHub", url: "https://github.com/safuraja7" },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/safuraja7/",
                    },
                   
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-portfolio-cyan/30 text-portfolio-cyan hover:bg-portfolio-cyan/10 hover:border-portfolio-cyan/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {social.name}
                      </Button>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
