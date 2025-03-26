"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Indian Institute of Technology, Kanpur",
    duration: "2022 - Present (Expected Graduation: April 2026)",
    grade: "CPI: 6.9/10",
    courses: [
      "Data Structure and Algorithms",
      "Operating Systems",
      "Fundamentals of Computing",
      "Introduction to Electronics",
      "Introduction to Computer Organization",
      "Software Development and Operations",
      "Computer Networks (Ongoing)",
      "Linear Algebra and Ordinary Differential Equations",
      "Probability Theory",
      "Multi Variable Calculus",
    ],
  },
  {
    degree: "CBSE Class XII",
    institution: "Jawahar Navodaya Vidyalaya, Bundi",
    duration: "2022",
    grade: "Percentage: 92.4%",
  },
  {
    degree: "CBSE Class X",
    institution: "Jawahar Navodaya Vidyalaya, Bundi",
    duration: "2020",
    grade: "Percentage: 91.6%",
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Education</span>
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{edu.degree}</CardTitle>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm text-muted-foreground">{edu.grade}</span>
                    </div>
                  </div>

                  {edu.courses && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Relevant Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

