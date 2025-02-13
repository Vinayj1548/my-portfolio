import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiLinkedin, SiGithub, SiWhatsapp } from "react-icons/si";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const email = "work.vinayjangid@gmail.com"; // Replace with your email
  const phone1 = "+919036135392"; // Replace with your phone number
  const phone2 = "+918949381125"; // Replace with your phone number
  const linkedin = "https://www.linkedin.com/in/vinay-jangid-742470240/"; // Replace with your LinkedIn profile
  const github = "https://github.com/Vinayj1548"; // Replace with your GitHub profile
  const whatsapp1 = `https://wa.me/${phone1.replace('+', '')}`; // Replace with your WhatsApp number
  const whatsapp2 = `https://wa.me/${phone2.replace('+', '')}`; // Replace with your WhatsApp number

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
                  <a href={`tel:${phone1}`}>
                    <Phone className="h-5 w-5" />
                    {phone1}
                  </a>
                </Button>
                <Button
                  className="w-full flex items-center gap-2 justify-start"
                  variant="outline"
                  asChild
                >
                  <a href={`tel:${phone2}`}>
                    <Phone className="h-5 w-5" />
                    {phone2}
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
                    href={whatsapp1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    WhatsApp1
                  </a>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href={whatsapp2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    WhatsApp2
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