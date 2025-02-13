import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  alt="Professional workspace"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  I'm a passionate developer with experience in building modern web applications.
                  My journey in tech started [X] years ago, and I've been creating innovative solutions ever since.
                </p>
                <p className="text-lg text-muted-foreground">
                  I specialize in full-stack development, with expertise in React, Node.js, and modern web technologies.
                  I'm always eager to learn new things and take on challenging projects.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
