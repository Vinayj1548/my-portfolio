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
              {/* Image Section */}
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
                  alt="Professional workspace"
                  className="rounded-lg"
                />
              </div>

              {/* About Me Text & Code Section */}
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  I specialize in front-end development, with expertise in React, Node.js, 
                  and modern web technologies. My programming skills are improving day by day, 
                  and I'm always eager to learn new things and take on challenging projects.
                </p>

                {/* Code Block for User Profile */}
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg overflow-x-auto">
                  <h2 className="text-xl font-bold text-white">🚀 User Profile: The Code Alchemist 🔥</h2>
                  <pre className="whitespace-pre-wrap">
                    <code>
{`const user = {
  name: "Aspiring Full-Stack Developer",
  skills: [
    "HTML", "CSS", "JavaScript",
    "React.js", "Next.js (a bit)",
    "C", "C++", "Python", "Java",
    "Data Structures & Algorithms (DSA)"
  ],
  experience: {
    role: "Junior Web Developer",
    projects: ["Dynamic Web Applications", "Frontend UI/UX Enhancements", "Optimized Code Performance"],
    tools: ["Vite", "Tailwind CSS", "REST APIs", "Git"]
  },
  mission: "To craft seamless user experiences with scalable and efficient code.",
  futureGoals: ["Master Full-Stack Development", "Contribute to Open Source", "Crack Industry-Level Interviews"]
};

console.log("🚀 Ready to build and break things to innovate! 🔥");`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}


