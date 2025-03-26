"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Medal } from "lucide-react"

const achievements = [
  {
    title: "JEE Advanced 2022",
    description: "Secured All India Rank 6388 among 2.5 Lakh shortlisted candidates",
    icon: <Trophy className="h-6 w-6 text-primary" />,
  },
  {
    title: "JEE Mains 2022",
    description: "Secured 97.31 Percentile, among the top 2% of 11 Lakh candidates",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: "Competitive Programming",
    description: "Codeforces: Specialist (Rating 1454) | Codechef: 3 Star (Rating 1647)",
    icon: <Medal className="h-6 w-6 text-primary" />,
  },
  {
    title: "Senior Executive at Techkriti'24",
    description: "Managed events like BattleBots, Maneovre, IARC, and Hovermania at IIT Kanpur's technical fest",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          My <span className="text-primary">Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <div className="bg-primary/10 p-3 rounded-full">{achievement.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

