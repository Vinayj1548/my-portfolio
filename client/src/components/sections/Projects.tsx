import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GithubIcon, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import netImg from '../../assets/screenshot.png';
import bookImg from '../../assets/screenshot2.png'



const projects = [
  {
    title: "Netflix-Clone",
    description: "A modern web Page built with HTML and CSS",
    image: netImg,
    github: "https://github.com/Vinayj1548/Netflix-Clone",
    demo: "https://vinayj1548.github.io/Netflix-Clone/",
  },
  {
    title: "NewsApp",
    description: "Full-stack application with real-time features *(API only works in development server)",
    image: bookImg,
    github: "https://github.com/Vinayj1548/NewsMonkey-React",
    demo: "https://vinayj1548.github.io/NewsMonkey-React/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
