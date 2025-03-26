"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a third-year undergraduate student at the Indian Institute of Technology, Kanpur, pursuing a B.Tech in
              Computer Science and Engineering. I'm passionate about solving complex problems and building innovative
              solutions.
            </p>
            <p className="text-muted-foreground mt-4">
              With a strong foundation in data structures, algorithms, and software development, I'm constantly
              exploring new technologies and methodologies to enhance my skills.
            </p>
            <p className="text-muted-foreground mt-4">
              I enjoy competitive programming and have achieved the rank of Specialist on Codeforces and 3 Star on
              Codechef, demonstrating my problem-solving abilities and algorithmic thinking.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">My Interests</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Machine Learning and Data Science</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Web Development and User Interface Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Competitive Programming and Algorithm Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Software Architecture and System Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Open Source Contribution and Collaboration</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

