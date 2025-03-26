"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Cpu, LineChart, GitBranch, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ["C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Libraries & Frameworks",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: ["NumPy", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Matplotlib", "ReactJS"],
  },
  {
    title: "Tools & Technologies",
    icon: <GitBranch className="h-6 w-6 text-primary" />,
    skills: ["Git", "GitHub", "VS Code", "Linux", "Jupyter Notebook"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    title: "Machine Learning",
    icon: <LineChart className="h-6 w-6 text-primary" />,
    skills: ["Regression", "Classification", "Neural Networks", "NLP", "Data Preprocessing"],
  },
  {
    title: "Core CS Knowledge",
    icon: <Cpu className="h-6 w-6 text-primary" />,
    skills: ["Data Structures", "Algorithms", "OOP", "Operating Systems", "Computer Networks"],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

