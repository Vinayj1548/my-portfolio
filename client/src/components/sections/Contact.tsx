import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "your.email@example.com"; // Replace with your email
  const phone = "+1234567890"; // Replace with your phone number
  const linkedin = "https://linkedin.com/in/yourprofile"; // Replace with your LinkedIn profile
  const github = "https://github.com/yourusername"; // Replace with your GitHub profile
  const whatsapp = `https://wa.me/${phone.replace('+', '')}`; // Replace with your WhatsApp number

  const handleEmailClick = () => {
    const subject = "Contact from Portfolio";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  onClick={handleEmailClick}
                  className="w-full flex items-center gap-2 justify-start"
                  variant="outline"
                >
                  <Mail className="h-5 w-5" />
                  {email}
                </Button>
                <Button
                  className="w-full flex items-center gap-2 justify-start"
                  variant="outline"
                  asChild
                >
                  <a href={`tel:${phone}`}>
                    <Phone className="h-5 w-5" />
                    {phone}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" asChild className="w-full">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiLinkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiGithub className="w-5 h-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}