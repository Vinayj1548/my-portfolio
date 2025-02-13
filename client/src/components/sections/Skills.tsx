import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiNodedotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Card key={skill.name}>
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                <skill.icon className={`w-12 h-12 ${skill.color}`} />
                <span className="font-medium">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
